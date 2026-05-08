import { NextResponse } from 'next/server';
import { z } from 'zod';
import { Resend } from 'resend';
import { SITE } from '@/lib/site';

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  company: z.string().optional(),
  topic: z.enum(['birdy', 'feedora', 'sur-mesure', 'conseil', 'support', 'autre']),
  message: z.string().min(10),
});

const TOPIC_LABELS: Record<z.infer<typeof schema>['topic'], string> = {
  birdy: 'Renseignement BIRDY (ERP OHADA)',
  feedora: 'Renseignement FEEDORA (formulation avicole)',
  'sur-mesure': 'Projet sur mesure',
  conseil: 'Conseil & accompagnement',
  support: 'Support technique',
  autre: 'Autre',
};

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Corps de requête invalide' }, { status: 400 });
  }

  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: 'Données invalides', details: parsed.error.flatten() }, { status: 422 });
  }

  const { name, email, company, topic, message } = parsed.data;
  const apiKey = process.env.RESEND_API_KEY;

  // If Resend isn't configured, log to console — useful in dev / preview
  if (!apiKey) {
    console.log('[contact] (Resend non configuré) Message reçu:', { name, email, company, topic, message });
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

${message}
`,
    });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('[contact] Resend error', err);
    return NextResponse.json({ error: 'Erreur d’envoi' }, { status: 500 });
  }
}
