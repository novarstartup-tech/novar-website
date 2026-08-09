import Link from 'next/link';
import { Check, Download, Sparkles, Wrench } from 'lucide-react';
import { cn } from '@/lib/utils';

/**
 * PricingTable : Sprint 19 freeware refresh.
 *
 * NOVAR n'est plus un SaaS payant à plans. La grille tarifaire reflète
 * désormais les trois lignes de l'activité telle qu'elle est :
 *
 * 1. BIRDY  : logiciel propriétaire **distribué gratuitement** (freeware)
 *             sous EULA. Tu installes, tu utilises, tu ne paies rien.
 * 2. FEEDORA : SaaS B2B AgriTech, en construction, accès sur demande.
 * 3. Sur mesure : développement custom, devis sur projet.
 *
 * Aucune notion de plan / abonnement / utilisateur facturé. Si demain
 * on réintroduit un plan payant (cloud-hosted, support prioritaire,
 * etc.) on ajoutera une carte ici sans toucher à la première.
 */

type Offer = {
  icon: typeof Check;
  product: string;
  badge: string;
  price: string;
  priceDetail: string;
  tagline: string;
  features: string[];
  cta: { label: string; href: string };
  highlight?: boolean;
};

const OFFERS: Offer[] = [
  {
    icon: Download,
    product: 'BIRDY',
    badge: 'Gratuit',
    price: '0 GNF',
    priceDetail: 'Pour toujours',
    tagline:
      'ERP & comptabilité OHADA complet. Logiciel propriétaire distribué gratuitement.',
    features: [
      'Installation locale Windows (macOS / Linux à venir)',
      'Utilisateurs illimités, dépôts illimités',
      'Comptabilité SYSCOHADA révisée + liasse fiscale',
      'Multi-devises (GNF, XOF, USD, EUR…)',
      'RH & Paie Guinée (IRPP, CNSS)',
      'POS, achats, stock, caisse, banque',
      'Mises à jour à vie',
      'Aucune télémétrie, aucun cloud obligatoire',
    ],
    cta: { label: 'Télécharger BIRDY', href: '/telechargements' },
    highlight: true,
  },
  {
    icon: Sparkles,
    product: 'FEEDORA',
    badge: 'Gratuit',
    price: '0 GNF',
    priceDetail: 'SaaS B2B AgriTech',
    tagline:
      "Plateforme web de formulation alimentaire pour fermes avicoles OHADA. Accès gratuit, ouvert à tous les éleveurs.",
    features: [
      'Formulation optimisée par algorithme',
      "Catalogue d'ingrédients régional",
      'Calcul des coûts de production',
      'Multi-fermes, multi-formules',
      'Tableau de bord nutritionnel',
      'Export PDF des formulations',
      "Aucune limite d'usage",
    ],
    cta: { label: 'Accéder à FEEDORA', href: 'https://feedora-cyan.vercel.app/' },
  },
  {
    icon: Wrench,
    product: 'Sur mesure',
    badge: 'Sur devis',
    // Pas de chiffre affiché : un prix planché ferait fuir certains
    // prospects (« trop cher »), une absence pure ferait hésiter les
    // autres. On répond par une accroche qui qualifie le ticket d'entrée
    // sans le chiffrer : premier échange gratuit, devis aligné sur le
    // périmètre réel.
    price: 'Parlons-en',
    priceDetail: 'Premier échange gratuit · 30 min',
    tagline:
      'Logiciels métiers spécifiques, intégrations, applications mobiles. Devis aligné sur votre périmètre : du POC au déploiement industriel.',
    features: [
      'Audit des besoins métier',
      'Architecture technique adaptée',
      'Développement Tauri / Web / Mobile',
      'Intégration aux outils existants',
      'Formation des équipes incluse',
      'Code source + propriété transférable',
      'Support 6 mois après livraison',
    ],
    cta: { label: 'Démarrer la conversation', href: '/contact?produit=sur-mesure' },
  },
];

export function PricingTable() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {OFFERS.map((o) => {
        const Icon = o.icon;
        return (
          <div
            key={o.product}
            className={cn(
              'relative rounded-2xl border p-8 flex flex-col transition-all',
              o.highlight
                ? 'border-novar-ink bg-novar-ink text-white shadow-lifted'
                : 'border-novar-line bg-white hover:border-novar-ink/20 hover:shadow-lifted',
            )}
          >
            {o.highlight && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-cyan-500 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-slate-950">
                {o.badge}
              </span>
            )}
            {!o.highlight && (
              <span className="self-start rounded-full bg-novar-surface-2 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-novar-muted">
                {o.badge}
              </span>
            )}

            <div
              className={cn(
                'mt-6 inline-flex h-12 w-12 items-center justify-center rounded-xl ring-1',
                o.highlight
                  ? 'bg-cyan-500/15 ring-cyan-400/40 text-cyan-300'
                  : 'bg-novar-surface-2 ring-novar-line text-novar-ink',
              )}
            >
              <Icon className="h-5 w-5" />
            </div>

            <h3
              className={cn(
                'mt-4 font-display text-xl font-bold',
                o.highlight ? 'text-white' : 'text-novar-ink',
              )}
            >
              {o.product}
            </h3>
            <p
              className={cn(
                'mt-1 text-sm',
                o.highlight ? 'text-slate-300' : 'text-novar-muted',
              )}
            >
              {o.tagline}
            </p>

            <div className="mt-6">
              <span
                className={cn(
                  'font-display text-3xl font-bold',
                  o.highlight ? 'text-white' : 'text-novar-ink',
                )}
              >
                {o.price}
              </span>
              <div
                className={cn(
                  'mt-1 text-sm',
                  o.highlight ? 'text-slate-400' : 'text-novar-muted',
                )}
              >
                {o.priceDetail}
              </div>
            </div>

            <ul className="mt-7 space-y-2.5 flex-1">
              {o.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm">
                  <Check
                    className={cn(
                      'h-4 w-4 flex-shrink-0 mt-0.5',
                      o.highlight ? 'text-cyan-400' : 'text-cyan-700',
                    )}
                  />
                  <span
                    className={cn(
                      o.highlight ? 'text-slate-200' : 'text-novar-ink-soft',
                    )}
                  >
                    {f}
                  </span>
                </li>
              ))}
            </ul>

            <Link
              href={o.cta.href}
              className={cn(
                'mt-8 block rounded-lg py-2.5 text-center text-sm font-semibold transition-colors',
                o.highlight
                  ? 'bg-cyan-500 text-slate-950 hover:bg-cyan-400'
                  : 'bg-novar-ink text-white hover:bg-[#060B16]',
              )}
            >
              {o.cta.label}
            </Link>
          </div>
        );
      })}
    </div>
  );
}
