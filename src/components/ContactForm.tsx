'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useState, useRef, useEffect } from 'react';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';

/**
 * ContactForm — formulaire B2B avec garde-fous anti-spam Tier 1.
 *
 * 1. Honeypot `website` (champ caché aux humains, visible aux bots) :
 *    si rempli, on simule un succès côté UI mais on ne POST jamais.
 *    99 % des bots remplissent tous les champs sans regarder le CSS.
 * 2. Timing trap : on enregistre `mountedAt`. Un humain met >2 secondes
 *    pour remplir le formulaire ; un bot remplit en <500ms. Si la durée
 *    est suspecte, même traitement que le honeypot.
 * 3. Validation Zod côté client + serveur (double rideau).
 * 4. Le serveur applique un rate limit IP-based supplémentaire.
 */
const schema = z.object({
  name: z.string().min(2, 'Veuillez saisir votre nom'),
  email: z.string().email('Adresse e-mail invalide'),
  company: z.string().optional(),
  topic: z.enum(['birdy', 'feedora', 'sur-mesure', 'conseil', 'support', 'autre']),
  message: z.string().min(10, 'Décrivez votre demande en quelques mots'),
  // Honeypot : champ caché. S'il est rempli côté client, c'est un bot.
  website: z.string().max(0, '').optional(),
});
type FormValues = z.infer<typeof schema>;

const inputClass =
  'w-full rounded-lg border border-novar-line bg-white px-3.5 py-2.5 text-sm text-novar-ink placeholder:text-novar-muted focus:border-novar-accent focus:outline-none focus:ring-2 focus:ring-novar-accent/20 transition-colors';

const labelClass =
  'block text-xs font-semibold uppercase tracking-wider text-novar-muted mb-1.5';

export function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { topic: 'birdy', website: '' },
  });
  const [status, setStatus] = useState<'idle' | 'ok' | 'error'>('idle');
  const mountedAt = useRef<number>(Date.now());

  useEffect(() => {
    mountedAt.current = Date.now();
  }, []);

  async function onSubmit(values: FormValues) {
    setStatus('idle');

    // Garde-fou 1 — honeypot rempli : on fake un succès, on ne POST jamais.
    if (values.website && values.website.length > 0) {
      setStatus('ok');
      reset();
      return;
    }

    // Garde-fou 2 — soumission anormalement rapide (<2s) : très probablement
    // un bot. Même traitement silencieux qu'un honeypot trip.
    const elapsed = Date.now() - mountedAt.current;
    if (elapsed < 2000) {
      setStatus('ok');
      reset();
      return;
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...values, _elapsed: elapsed }),
      });
      if (!res.ok) throw new Error('Erreur serveur');
      setStatus('ok');
      reset();
    } catch {
      setStatus('error');
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>
            Nom complet *
          </label>
          <input
            id="name"
            placeholder="Votre nom"
            {...register('name')}
            className={inputClass}
          />
          {errors.name && (
            <p className="mt-1 text-xs text-red-600">{errors.name.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>
            E-mail *
          </label>
          <input
            id="email"
            type="email"
            placeholder="vous@entreprise.com"
            {...register('email')}
            className={inputClass}
          />
          {errors.email && (
            <p className="mt-1 text-xs text-red-600">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="company" className={labelClass}>
          Entreprise
        </label>
        <input
          id="company"
          placeholder="Nom de votre société"
          {...register('company')}
          className={inputClass}
        />
      </div>

      {/*
        Honeypot — champ caché aux humains via aria-hidden + tabIndex=-1 +
        position absolute hors viewport. Les bots qui parsent le HTML brut
        rempliront tous les champs sans regarder le CSS et déclencheront
        notre garde-fou côté handler.

        Pas de display:none — certains bots détectent et skipent les champs
        cachés. La technique "off-screen positioning" est plus efficace.
      */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          left: '-10000px',
          top: 'auto',
          width: '1px',
          height: '1px',
          overflow: 'hidden',
        }}
      >
        <label htmlFor="website">
          Site web (ne pas remplir — réservé aux robots)
        </label>
        <input
          id="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          {...register('website')}
        />
      </div>

      <div>
        <label htmlFor="topic" className={labelClass}>
          Sujet *
        </label>
        <select id="topic" {...register('topic')} className={inputClass}>
          <option value="birdy">Renseignement BIRDY (ERP OHADA)</option>
          <option value="feedora">Renseignement FEEDORA (formulation avicole)</option>
          <option value="sur-mesure">Projet sur mesure</option>
          <option value="conseil">Conseil &amp; accompagnement</option>
          <option value="support">Support technique</option>
          <option value="autre">Autre</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          Votre message *
        </label>
        <textarea
          id="message"
          rows={5}
          placeholder="Décrivez votre contexte, vos objectifs, et ce que nous pouvons faire pour vous."
          {...register('message')}
          className={inputClass}
        />
        {errors.message && (
          <p className="mt-1 text-xs text-red-600">{errors.message.message}</p>
        )}
      </div>

      {status === 'ok' && (
        <div className="flex items-start gap-2 rounded-lg border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-800">
          <CheckCircle2 className="h-4 w-4 mt-0.5 flex-shrink-0" />
          <span>Message bien reçu. Nous vous répondons sous 24 h ouvrées.</span>
        </div>
      )}
      {status === 'error' && (
        <div className="flex items-start gap-2 rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-800">
          <AlertCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
          <span>
            Une erreur est survenue. Vous pouvez nous écrire directement à
            novar.startup@gmail.com.
          </span>
        </div>
      )}

      <div className="pt-2">
        <button type="submit" disabled={isSubmitting} className="btn-primary disabled:opacity-50">
          <Send className="h-4 w-4" />
          {isSubmitting ? 'Envoi en cours…' : 'Envoyer le message'}
        </button>
      </div>
    </form>
  );
}
