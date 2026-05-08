'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useState } from 'react';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';

const schema = z.object({
  name: z.string().min(2, 'Veuillez saisir votre nom'),
  email: z.string().email('Adresse e-mail invalide'),
  company: z.string().optional(),
  topic: z.enum(['birdy', 'sur-mesure', 'conseil', 'support', 'autre']),
  message: z.string().min(10, 'Décrivez votre demande en quelques mots'),
});
type FormValues = z.infer<typeof schema>;

export function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>({ resolver: zodResolver(schema), defaultValues: { topic: 'birdy' } });
  const [status, setStatus] = useState<'idle' | 'ok' | 'error'>('idle');

  async function onSubmit(values: FormValues) {
    setStatus('idle');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error('Erreur serveur');
      setStatus('ok');
      reset();
    } catch {
      setStatus('error');
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
            Nom complet *
          </label>
          <input
            id="name"
            {...register('name')}
            className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm focus:border-novar-cyan focus:outline-none focus:ring-1 focus:ring-novar-cyan dark:border-slate-700 dark:bg-novar-cosmic-2"
          />
          {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name.message}</p>}
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
            E-mail *
          </label>
          <input
            id="email"
            type="email"
            {...register('email')}
            className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm focus:border-novar-cyan focus:outline-none focus:ring-1 focus:ring-novar-cyan dark:border-slate-700 dark:bg-novar-cosmic-2"
          />
          {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email.message}</p>}
        </div>
      </div>
      <div>
        <label htmlFor="company" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
          Entreprise
        </label>
        <input
          id="company"
          {...register('company')}
          className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm focus:border-novar-cyan focus:outline-none focus:ring-1 focus:ring-novar-cyan dark:border-slate-700 dark:bg-novar-cosmic-2"
        />
      </div>
      <div>
        <label htmlFor="topic" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
          Sujet *
        </label>
        <select
          id="topic"
          {...register('topic')}
          className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm focus:border-novar-cyan focus:outline-none focus:ring-1 focus:ring-novar-cyan dark:border-slate-700 dark:bg-novar-cosmic-2"
        >
          <option value="birdy">Renseignement BIRDY ERP</option>
          <option value="sur-mesure">Projet sur mesure</option>
          <option value="conseil">Conseil & accompagnement</option>
          <option value="support">Support technique</option>
          <option value="autre">Autre</option>
        </select>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
          Votre message *
        </label>
        <textarea
          id="message"
          rows={5}
          {...register('message')}
          className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm focus:border-novar-cyan focus:outline-none focus:ring-1 focus:ring-novar-cyan dark:border-slate-700 dark:bg-novar-cosmic-2"
        />
        {errors.message && <p className="mt-1 text-xs text-red-600">{errors.message.message}</p>}
      </div>

      {status === 'ok' && (
        <div className="flex items-center gap-2 rounded-lg bg-emerald-50 p-3 text-sm text-emerald-800 dark:bg-emerald-950/30 dark:text-emerald-200">
          <CheckCircle2 className="h-4 w-4" />
          Message envoyé. Nous vous répondons sous 24 h.
        </div>
      )}
      {status === 'error' && (
        <div className="flex items-center gap-2 rounded-lg bg-red-50 p-3 text-sm text-red-800 dark:bg-red-950/30 dark:text-red-200">
          <AlertCircle className="h-4 w-4" />
          Une erreur est survenue. Réessayez ou écrivez-nous directement.
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex items-center gap-2 rounded-lg bg-novar-cosmic px-5 py-2.5 text-sm font-semibold text-white hover:bg-slate-900 disabled:opacity-50 dark:bg-novar-cyan dark:text-novar-cosmic dark:hover:bg-novar-cyan-glow"
      >
        <Send className="h-4 w-4" />
        {isSubmitting ? 'Envoi en cours…' : 'Envoyer le message'}
      </button>
    </form>
  );
}
