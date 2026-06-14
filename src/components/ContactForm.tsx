'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { AlertCircle, CheckCircle2, Send } from 'lucide-react';
import { CONTACT_TOPICS, type ContactTopic, type Locale } from '@/lib/content';

const COPY = {
  fr: {
    name: 'Nom complet',
    namePlaceholder: 'Votre nom',
    email: 'E-mail professionnel',
    company: 'Entreprise ou organisation',
    companyPlaceholder: 'Nom de votre structure',
    topic: 'Sujet',
    message: 'Votre message',
    messagePlaceholder: 'Décrivez votre contexte, votre objectif et le résultat attendu.',
    required: 'Champ obligatoire',
    nameError: 'Veuillez saisir au moins 2 caractères.',
    emailError: 'Saisissez une adresse e-mail valide.',
    messageError: 'Décrivez votre demande en au moins 10 caractères.',
    submit: 'Envoyer le message',
    sending: 'Envoi en cours…',
    success: 'Message bien reçu. Notre équipe vous répondra dans les meilleurs délais.',
    genericError: 'Le message n’a pas pu être envoyé. Écrivez-nous directement à novar.startup@gmail.com.',
    rateLimited: 'Trop de demandes ont été envoyées. Réessayez dans quelques minutes.',
    invalid: 'Certains champs sont invalides. Vérifiez le formulaire.',
    topics: {
      birdy: 'BIRDY',
      feedora: 'FEEDORA',
      demo: 'Demander une démonstration',
      'sur-mesure': 'Projet logiciel sur mesure',
      conseil: 'Conseil et accompagnement',
      support: 'Support produit',
      autre: 'Autre demande',
    },
  },
  en: {
    name: 'Full name',
    namePlaceholder: 'Your name',
    email: 'Work email',
    company: 'Company or organization',
    companyPlaceholder: 'Organization name',
    topic: 'Topic',
    message: 'Your message',
    messagePlaceholder: 'Describe your context, objective and expected outcome.',
    required: 'Required field',
    nameError: 'Enter at least 2 characters.',
    emailError: 'Enter a valid email address.',
    messageError: 'Describe your request in at least 10 characters.',
    submit: 'Send message',
    sending: 'Sending…',
    success: 'Message received. Our team will get back to you as soon as possible.',
    genericError: 'The message could not be sent. Email us directly at novar.startup@gmail.com.',
    rateLimited: 'Too many requests were sent. Please try again in a few minutes.',
    invalid: 'Some fields are invalid. Please review the form.',
    topics: {
      birdy: 'BIRDY',
      feedora: 'FEEDORA',
      demo: 'Request a demonstration',
      'sur-mesure': 'Tailored software project',
      conseil: 'Advisory and enablement',
      support: 'Product support',
      autre: 'Other request',
    },
  },
} as const;

const schema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(200),
  company: z.string().trim().max(150).optional(),
  topic: z.enum(CONTACT_TOPICS),
  message: z.string().trim().min(10).max(5000),
  website: z.string().max(200).optional(),
});

type FormValues = z.infer<typeof schema>;
type ApiErrorCode = 'RATE_LIMITED' | 'INVALID_JSON' | 'INVALID_DATA' | 'SEND_FAILED';

const inputClass =
  'w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-950 placeholder:text-slate-400 transition-colors focus:border-cyan-600 focus:outline-none focus:ring-4 focus:ring-cyan-100 aria-[invalid=true]:border-red-500 aria-[invalid=true]:focus:ring-red-100';

export function ContactForm({
  locale = 'fr',
  defaultTopic = 'autre',
}: {
  locale?: Locale;
  defaultTopic?: ContactTopic;
}) {
  const c = COPY[locale];
  const [status, setStatus] = useState<'idle' | 'ok' | 'error'>('idle');
  const [apiError, setApiError] = useState<ApiErrorCode | null>(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { topic: defaultTopic, website: '' },
  });

  async function onSubmit(values: FormValues) {
    setStatus('idle');
    setApiError(null);

    if (values.website) {
      setStatus('ok');
      reset({ topic: defaultTopic, website: '' });
      return;
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });
      const payload = (await response.json()) as { ok?: boolean; code?: ApiErrorCode };
      if (!response.ok || !payload.ok) {
        setApiError(payload.code ?? 'SEND_FAILED');
        setStatus('error');
        return;
      }
      setStatus('ok');
      reset({ topic: defaultTopic, website: '' });
    } catch {
      setApiError('SEND_FAILED');
      setStatus('error');
    }
  }

  const errorMessage =
    apiError === 'RATE_LIMITED' ? c.rateLimited : apiError === 'INVALID_DATA' ? c.invalid : c.genericError;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label={c.name} required error={errors.name ? c.nameError : undefined} id="name">
          <input
            id="name"
            autoComplete="name"
            placeholder={c.namePlaceholder}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? 'name-error' : undefined}
            className={inputClass}
            {...register('name')}
          />
        </Field>
        <Field label={c.email} required error={errors.email ? c.emailError : undefined} id="email">
          <input
            id="email"
            type="email"
            autoComplete="email"
            placeholder="you@company.com"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? 'email-error' : undefined}
            className={inputClass}
            {...register('email')}
          />
        </Field>
      </div>

      <Field label={c.company} id="company">
        <input
          id="company"
          autoComplete="organization"
          placeholder={c.companyPlaceholder}
          className={inputClass}
          {...register('company')}
        />
      </Field>

      <div className="absolute -left-[10000px] h-px w-px overflow-hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" tabIndex={-1} autoComplete="off" {...register('website')} />
      </div>

      <Field label={c.topic} required id="topic">
        <select id="topic" className={inputClass} {...register('topic')}>
          {CONTACT_TOPICS.map((topic) => (
            <option key={topic} value={topic}>
              {c.topics[topic]}
            </option>
          ))}
        </select>
      </Field>

      <Field label={c.message} required error={errors.message ? c.messageError : undefined} id="message">
        <textarea
          id="message"
          rows={6}
          placeholder={c.messagePlaceholder}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? 'message-error' : undefined}
          className={inputClass}
          {...register('message')}
        />
      </Field>

      <div aria-live="polite" aria-atomic="true">
        {status === 'ok' && (
          <div role="status" className="flex items-start gap-3 rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-900">
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
            <span>{c.success}</span>
          </div>
        )}
        {status === 'error' && (
          <div role="alert" className="flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-900">
            <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
            <span>{errorMessage}</span>
          </div>
        )}
      </div>

      <button type="submit" disabled={isSubmitting} className="btn-primary disabled:cursor-not-allowed disabled:opacity-60">
        <Send className="h-4 w-4" aria-hidden />
        {isSubmitting ? c.sending : c.submit}
      </button>
      <p className="text-xs text-slate-500">* {c.required}</p>
    </form>
  );
}

function Field({
  id,
  label,
  required,
  error,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-semibold text-slate-800">
        {label}
        {required ? <span aria-hidden="true"> *</span> : null}
      </label>
      {children}
      {error ? (
        <p id={`${id}-error`} className="mt-2 text-xs font-medium text-red-700">
          {error}
        </p>
      ) : null}
    </div>
  );
}
