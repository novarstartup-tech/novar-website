'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Check } from 'lucide-react';
import { formatPriceGNF, cn } from '@/lib/utils';

type Plan = { name: string; tagline: string; monthly: number; features: string[]; highlight?: boolean; cta: { label: string; href: string } };

const PLANS: Plan[] = [
  { name: 'Solo', tagline: 'Pour les indépendants et petites boutiques', monthly: 50_000, features: ['1 utilisateur', 'POS complet (ventes, retours)', 'Gestion des articles & stock', 'Caisse & arrêté de caisse', 'Mobile Money (Orange · MTN)', '1 dépôt / point de vente', 'Sauvegardes locales', 'Support email'], cta: { label: 'Commencer', href: '/demo' } },
  { name: 'Pro', tagline: 'Pour les PME en croissance', monthly: 150_000, highlight: true, features: ['Jusqu’à 5 utilisateurs', 'Tout Solo +', 'Comptabilité OHADA SYSCOHADA', 'Plan comptable complet & lettrage', 'Liasse fiscale & TAFIRE', 'Export FEC', 'Multi-devises (GNF · USD · EUR)', 'Tableaux de bord temps réel', 'Support prioritaire'], cta: { label: 'Essayer 30 jours', href: '/demo' } },
  { name: 'Enterprise', tagline: 'Pour les groupes multi-sites', monthly: 400_000, features: ['Utilisateurs illimités', 'Tout Pro +', 'RH & Paie (IRPP, CNSS Guinée)', 'Multi-dépôts & multi-sociétés', 'API REST documentée', 'SSO Google / Microsoft', 'Audit log & MFA', 'Formation sur site', 'Account manager dédié'], cta: { label: 'Nous contacter', href: '/contact' } },
];

export function PricingTable() {
  const [annual, setAnnual] = useState(false);
  return (
    <div>
      <div className="flex items-center justify-center gap-3 mb-10">
        <span className={cn('text-sm font-medium', !annual ? 'text-slate-900 dark:text-white' : 'text-slate-500')}>Mensuel</span>
        <button onClick={() => setAnnual(!annual)} className="relative inline-flex h-6 w-11 items-center rounded-full bg-slate-200 dark:bg-slate-700 transition-colors" role="switch" aria-checked={annual} type="button">
          <span className={cn('inline-block h-4 w-4 transform rounded-full bg-novar-cyan shadow-sm transition-transform', annual ? 'translate-x-6' : 'translate-x-1')} />
        </button>
        <span className={cn('text-sm font-medium', annual ? 'text-slate-900 dark:text-white' : 'text-slate-500')}>
          Annuel <span className="ml-1 rounded-full bg-novar-cyan/10 px-2 py-0.5 text-xs text-novar-cyan">−17%</span>
        </span>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {PLANS.map((plan) => {
          const price = annual ? Math.round(plan.monthly * 12 * 0.83) : plan.monthly;
          const period = annual ? '/an' : '/mois';
          return (
            <div key={plan.name} className={cn('relative rounded-2xl border p-8 flex flex-col', plan.highlight ? 'border-novar-cyan bg-novar-cosmic text-white shadow-2xl shadow-novar-cyan/10' : 'border-slate-200 bg-white dark:border-slate-800 dark:bg-novar-cosmic-2')}>
              {plan.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-novar-cyan px-3 py-1 text-xs font-bold text-novar-cosmic">Le plus populaire</span>
              )}
              <h3 className={cn('font-display text-xl font-bold', plan.highlight ? 'text-white' : 'text-slate-900 dark:text-white')}>{plan.name}</h3>
              <p className={cn('mt-1 text-sm', plan.highlight ? 'text-slate-300' : 'text-slate-600 dark:text-slate-400')}>{plan.tagline}</p>
              <div className="mt-6">
                <span className={cn('font-display text-3xl font-bold', plan.highlight ? 'text-white' : 'text-slate-900 dark:text-white')}>{formatPriceGNF(price)}</span>
                <span className={cn('text-sm ml-1', plan.highlight ? 'text-slate-400' : 'text-slate-500')}>{period}</span>
              </div>
              <ul className="mt-6 space-y-2 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <Check className={cn('h-4 w-4 flex-shrink-0 mt-0.5', plan.highlight ? 'text-novar-cyan' : 'text-novar-blue dark:text-novar-cyan')} />
                    <span className={cn(plan.highlight ? 'text-slate-200' : 'text-slate-700 dark:text-slate-300')}>{f}</span>
                  </li>
                ))}
              </ul>
              <Link href={plan.cta.href} className={cn('mt-8 block rounded-lg py-2.5 text-center text-sm font-semibold transition-colors', plan.highlight ? 'bg-novar-cyan text-novar-cosmic hover:bg-novar-cyan-glow' : 'bg-novar-cosmic text-white hover:bg-slate-900 dark:bg-novar-cyan dark:text-novar-cosmic')}>
                {plan.cta.label}
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
