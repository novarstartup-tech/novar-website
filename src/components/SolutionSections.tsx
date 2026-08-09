import Link from 'next/link';
import { ArrowRight, ChevronDown, Download } from 'lucide-react';
import { FAQPageJsonLd } from '@/components/JsonLd';

/**
 * Sections partagées par les pages « Solutions » (SEO longue traîne).
 *
 * Les pages elles-mêmes portent un contenu unique et détaillé ; seuls les
 * blocs transverses (maillage interne, FAQ, appel à l'action) sont mutualisés
 * ici pour rester cohérents sans dupliquer le fond de chaque page.
 */

export type SolutionKey =
  | 'facturation-ohada'
  | 'caisse'
  | 'gestion-de-stock'
  | 'comptabilite-ohada'
  | 'guinee';

export const SOLUTIONS: Record<
  SolutionKey,
  { slug: string; label: string; tagline: string }
> = {
  'facturation-ohada': {
    slug: '/logiciels/facturation-ohada',
    label: 'Logiciel de facturation OHADA',
    tagline: 'Factures et tickets conformes, TVA, avoirs et suivi des règlements clients.',
  },
  caisse: {
    slug: '/logiciels/caisse',
    label: 'Logiciel de caisse (POS)',
    tagline: 'Encaissement rapide, fonctionne hors ligne, arrêté de caisse et rapport Z.',
  },
  'gestion-de-stock': {
    slug: '/logiciels/gestion-de-stock',
    label: 'Logiciel de gestion de stock',
    tagline: 'Stock en temps réel, valorisation CMP/FIFO, inventaires et alertes de seuil.',
  },
  'comptabilite-ohada': {
    slug: '/logiciels/comptabilite-ohada',
    label: 'Comptabilité OHADA / SYSCOHADA',
    tagline: 'Plan SYSCOHADA révisé, liasse fiscale, TAFIRE et export FEC automatisés.',
  },
  guinee: {
    slug: '/logiciels/guinee',
    label: 'BIRDY pour la Guinée',
    tagline: 'Gestion, caisse et paie en GNF, IRPP/CNSS et support depuis Conakry.',
  },
};

const ORDER: SolutionKey[] = [
  'facturation-ohada',
  'caisse',
  'gestion-de-stock',
  'comptabilite-ohada',
  'guinee',
];

/**
 * Grille de maillage interne vers les autres pages solutions.
 * `current` exclut la page courante ; sans `current`, les cinq sont affichées.
 */
export function RelatedSolutions({
  current,
  heading = 'Un même logiciel gratuit, plusieurs besoins couverts',
  intro = 'BIRDY réunit facturation, caisse, stock et comptabilité OHADA dans une seule application. Explorez chaque module en détail.',
}: {
  current?: SolutionKey;
  heading?: string;
  intro?: string;
}) {
  const entries = ORDER.filter((key) => key !== current);
  return (
    <section className="section-shell border-t border-slate-200 bg-slate-50">
      <div>
        <h2 className="max-w-3xl font-display text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
          {heading}
        </h2>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate-600">{intro}</p>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {entries.map((key) => {
            const s = SOLUTIONS[key];
            return (
              <Link
                key={key}
                href={s.slug}
                className="editorial-card block transition hover:-translate-y-1 hover:shadow-lg"
              >
                <h3 className="font-display text-lg font-bold text-slate-950">{s.label}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.tagline}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-slate-950">
                  Découvrir <ArrowRight className="h-4 w-4" aria-hidden />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/**
 * FAQ d'une page solution. Émet le JSON-LD FAQPage correspondant pour
 * l'éligibilité aux résultats enrichis Google.
 */
export function SolutionFaq({
  items,
  title = 'Questions fréquentes',
}: {
  items: { q: string; a: string }[];
  title?: string;
}) {
  return (
    <section className="section-shell">
      <div className="max-w-4xl">
        <FAQPageJsonLd items={items} />
        <h2 className="font-display text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
          {title}
        </h2>
        <div className="mt-8 space-y-3">
          {items.map((item) => (
            <details
              key={item.q}
              className="group rounded-2xl border border-slate-200 bg-white open:shadow-sm"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 font-display font-bold text-slate-950">
                {item.q}
                <ChevronDown
                  className="h-4 w-4 shrink-0 transition-transform group-open:rotate-180"
                  aria-hidden
                />
              </summary>
              <p className="px-5 pb-5 text-sm leading-relaxed text-slate-600">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

/**
 * Bloc d'appel à l'action : téléchargement BIRDY + page produit.
 */
export function SolutionCta({
  heading,
  body,
  tone = 'cyan',
}: {
  heading: string;
  body: string;
  tone?: 'cyan' | 'emerald' | 'amber' | 'violet';
}) {
  const wash = {
    cyan: 'border-cyan-200 bg-cyan-50',
    emerald: 'border-emerald-200 bg-emerald-50',
    amber: 'border-amber-200 bg-amber-50',
    violet: 'border-violet-200 bg-violet-50',
  }[tone];
  return (
    <section className="section-shell pt-0">
      <div className={`rounded-3xl border p-7 sm:p-10 lg:p-12 ${wash}`}>
        <h2 className="max-w-3xl font-display text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
          {heading}
        </h2>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate-600">{body}</p>
        <div className="mt-7 flex flex-wrap gap-3">
          <Link href="/telechargements" className="btn-primary">
            <Download className="h-4 w-4" aria-hidden /> Télécharger BIRDY gratuitement
          </Link>
          <Link href="/produits/birdy-erp" className="btn-ghost">
            Découvrir l&apos;ERP BIRDY
          </Link>
        </div>
      </div>
    </section>
  );
}
