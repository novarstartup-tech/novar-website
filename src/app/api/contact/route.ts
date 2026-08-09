import { NextResponse } from 'next/server';
import { z } from 'zod';
import { Resend } from 'resend';
import { SITE } from '@/lib/site';

const schema = z
  .object({
    name: z.string().trim().min(2).max(100),
    email: z.string().trim().email().max(200),
    company: z.string().trim().max(150).optional(),
    topic: z.enum(['birdy', 'feedora', 'demo', 'sur-mesure', 'conseil', 'support', 'autre']),
    message: z.string().trim().min(10).max(5000),
    website: z.string().max(200).optional(),
  })
  .strict();

const TOPIC_LABELS: Record<z.infer<typeof schema>['topic'], string> = {
  birdy: 'Renseignement BIRDY',
  feedora: 'Renseignement FEEDORA',
  demo: 'Demande de démonstration',
  'sur-mesure': 'Projet sur mesure',
  conseil: 'Conseil et accompagnement',
  support: 'Support technique',
  autre: 'Autre',
};

const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX = 5;
const ipHits = new Map<string, number[]>();

function getClientIp(request: Request): string {
  const forwarded = request.headers.get('x-forwarded-for');
  if (forwarded) return forwarded.split(',')[0].trim();
  return request.headers.get('x-real-ip') ?? 'unknown';
}

function isRateLimited(ip: string): boolean {
  const cutoff = Date.now() - RATE_LIMIT_WINDOW_MS;
  const hits = (ipHits.get(ip) ?? []).filter((timestamp) => timestamp > cutoff);
  if (hits.length >= RATE_LIMIT_MAX) {
    ipHits.set(ip, hits);
    return true;
  }
  hits.push(Date.now());
  ipHits.set(ip, hits);
  return false;
}

export async function POST(request: Request) {
  const ip = getClientIp(request);
  if (isRateLimited(ip)) {
    return NextResponse.json({ ok: false, code: 'RATE_LIMITED' }, { status: 429 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, code: 'INVALID_JSON' }, { status: 400 });
  }

  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ ok: false, code: 'INVALID_DATA' }, { status: 422 });
  }

  const { name, email, company, topic, message, website } = parsed.data;
  if (website) return NextResponse.json({ ok: true });

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.info('[contact] Resend not configured; request accepted in preview.', { topic });
    return NextResponse.json({ ok: true, mode: 'preview' });
  }

  try {
    const resend = new Resend(apiKey);
    await resend.emails.send({
      from: 'NOVAR Website <noreply@novar.gn>',
      to: SITE.email,
      replyTo: email,
      subject: `[NOVAR] ${TOPIC_LABELS[topic]} : ${name}`,
      text: `De : ${name} <${email}>
Entreprise : ${company ?? 'Non renseignée'}
Sujet : ${TOPIC_LABELS[topic]}

${message}
`,
    });
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('[contact] Resend error', error);
    return NextResponse.json({ ok: false, code: 'SEND_FAILED' }, { status: 500 });
  }
}
