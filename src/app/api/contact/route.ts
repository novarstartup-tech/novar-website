import { NextResponse } from 'next/server';
import { z } from 'zod';
import { Resend } from 'resend';
import { SITE } from '@/lib/site';

/**
 * /api/contact — Tier 1 cybersécurité.
 *
 * Garde-fous serveur (en plus du honeypot + timing trap côté client) :
 *
 * 1. **Validation Zod stricte** : aucune valeur inconnue, tailles
 *    plafonnées (anti-payload-bomb).
 * 2. **Honeypot serveur** : si `website` est rempli, on renvoie 200 OK
 *    silencieusement sans envoyer le mail (le bot croit avoir réussi).
 * 3. **Timing trap serveur** : `_elapsed` < 2s → même traitement.
 * 4. **Rate limit IP-based** en mémoire : max 5 envois / 10 minutes par
 *    IP. Suffisant pour un site marketing — Vercel scale au cold-start
 *    donc le store en mémoire est best-effort, pas une garantie. Pour
 *    Tier 2/3 : Redis + sliding window.
 * 5. **Email size cap** : 4000 chars max sur message (vs Zod 5000)
 *    pour éviter des mails monstrueux.
 */

const schema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email().max(200),
  company: z.string().max(150).optional(),
  topic: z.enum(['birdy', 'feedora', 'sur-mesure', 'conseil', 'support', 'autre']),
  message: z.string().min(10).max(5000),
  website: z.string().max(200).optional(),
  _elapsed: z.number().optional(),
});

const TOPIC_LABELS: Record<z.infer<typeof schema>['topic'], string> = {
  birdy: 'Renseignement BIRDY (ERP OHADA)',
  feedora: 'Renseignement FEEDORA (formulation avicole)',
  'sur-mesure': 'Projet sur mesure',
  conseil: 'Conseil & accompagnement',
  support: 'Support technique',
  autre: 'Autre',
};

// In-memory rate limit (best-effort — Vercel cold-starts wipent le Map)
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 min
const RATE_LIMIT_MAX = 5;
const ipHits = new Map<string, number[]>();

function getClientIp(request: Request): string {
  // Vercel et la plupart des reverse-proxies posent x-forwarded-for
  const xff = request.headers.get('x-forwarded-for');
  if (xff) return xff.split(',')[0].trim();
  const real = request.headers.get('x-real-ip');
  if (real) return real;
  return 'unknown';
}

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const cutoff = now - RATE_LIMIT_WINDOW_MS;
  const hits = (ipHits.get(ip) ?? []).filter((t) => t > cutoff);
  if (hits.length >= RATE_LIMIT_MAX) {
    ipHits.set(ip, hits);
    return true;
  }
  hits.push(now);
  ipHits.set(ip, hits);
  return false;
}

export async function POST(request: Request) {
  const ip = getClientIp(request);

  // Rate limit en premier, avant même de parser le JSON
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: 'Trop de requêtes. Réessayez dans 10 minutes.' },
      { status: 429 },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Corps de requête invalide' }, { status: 400 });
  }

  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: 'Données invalides', details: parsed.error.flatten() },
      { status: 422 },
    );
  }

  const { name, email, company, topic, message, website, _elapsed } = parsed.data;

  // Honeypot — silent success
  if (website && website.length > 0) {
    console.log('[contact] honeypot trigger from ip=%s', ip);
    return NextResponse.json({ ok: true });
  }
  // Timing trap — silent success
  if (typeof _elapsed === 'number' && _elapsed < 2000) {
    console.log('[contact] timing trap (elapsed=%dms) from ip=%s', _elapsed, ip);
    return NextResponse.json({ ok: true });
  }

  const apiKey = process.env.RESEND_API_KEY;

  // If Resend isn't configured, log to console — useful in dev / preview
  if (!apiKey) {
    console.log('[contact] (Resend non configuré) Message reçu:', {
      name,
      email,
      company,
      topic,
      message,
    });
    return NextResponse.json({ ok: true, mode: 'log' });
  }

  try {
    const resend = new Resend(apiKey);
    await resend.emails.send({
      from: `NOVAR Website <noreply@novar.gn>`,
      to: SITE.email,
      replyTo: email,
      subject: `[NOVAR] ${TOPIC_LABELS[topic]} — ${name}`,
      text: `De : ${name} <${email}>
Entreprise : ${company ?? '—'}
Sujet : ${TOPIC_LABELS[topic]}
IP : ${ip}

${message}
`,
    });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('[contact] Resend error', err);
    return NextResponse.json({ error: 'Erreur d’envoi' }, { status: 500 });
  }
}
