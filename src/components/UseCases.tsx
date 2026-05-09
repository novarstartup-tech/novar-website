'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { Store, Bird, Building2, ArrowRight } from 'lucide-react';

type UseCase = {
  icon: React.ElementType;
  sector: string;
  title: string;
  problem: string;
  solution: string;
  product: 'BIRDY' | 'FEEDORA' | 'Sur mesure';
  productHref: string;
  tone: 'cyan' | 'emerald' | 'amber';
};

const CASES: UseCase[] = [
  {
    icon: Store,
    sector: 'Commerce de détail',
    title: 'Boutique de quartier à Conakry',
    problem: "Excel + cahiers papier, pas de visibilité réelle sur les marges, déclarations fiscales pénibles.",
    solution: "BIRDY : POS sur PC, comptabilité OHADA en arrière-plan, liasse fiscale auto-générée en fin d'exercice.",
    product: 'BIRDY',
    productHref: '/produits/birdy-erp',
    tone: 'cyan',
  },
  {
    icon: Bird,
    sector: 'Élevage avicole',
    title: 'Coopérative avicole multi-pays',
    problem: "Formuler les rations à la main, devises et matières premières qui changent par pays, marge alimentaire opaque.",
    solution: "FEEDORA : formulation intelligente, prix par pays, coût/kg en temps réel, rapports PDF pour les éleveurs.",
    product: 'FEEDORA',
    productHref: '/produits/feedora',
    tone: 'emerald',
  },
  {
    icon: Building2,
    sector: 'Distribution B2B',
    title: 'PME multi-dépôts avec besoin spécifique',
    problem: "Workflow logistique unique, intégrations métier que les ERP standards ne couvrent pas.",
    solution: "Solution sur mesure : audit, architecture, développement et déploiement d'une application taillée pour le besoin.",
    product: 'Sur mesure',
    productHref: '/services/sur-mesure',
    tone: 'amber',
  },
];

const TONE_STYLES = {
  cyan:    { bg: 'bg-cyan-50',    ring: 'ring-cyan-200',    text: 'text-cyan-700',    border: 'group-hover:border-cyan-300',    wash: 'from-cyan-50/40' },
  emerald: { bg: 'bg-emerald-50', ring: 'ring-emerald-200', text: 'text-emerald-700', border: 'group-hover:border-emerald-300', wash: 'from-emerald-50/40' },
  amber:   { bg: 'bg-amber-50',   ring: 'ring-amber-200',   text: 'text-amber-700',   border: 'group-hover:border-amber-300',   wash: 'from-amber-50/40' },
} as const;

export function UseCases() {
  return (
    <section className="surface-alt">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 md:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-novar-accent">
            Cas d'usage
          </span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-novar-ink leading-tight">
            Trois exemples concrets.
          </h2>
          <p className="mt-5 text-lg text-novar-muted leading-relaxed">
            Chaque entreprise a son contexte. Voici comment NOVAR
            s'adapte à des réalités différentes.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {CASES.map((c, i) => {
            const t = TONE_STYLES[c.tone];
            const Icon = c.icon;
            return (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Link href={c.productHref} className="group block h-full">
                  <div className={`relative h-full overflow-hidden rounded-2xl border border-novar-line bg-white p-7 transition-all duration-300 ${t.border} group-hover:shadow-lifted`}>
                    <div className={`absolute inset-0 -z-10 bg-gradient-to-br ${t.wash} via-white to-white opacity-0 transition-opacity duration-300 group-hover:opacity-100`} aria-hidden />

                    <div className="flex items-start justify-between gap-3">
                      <div className={`inline-flex h-11 w-11 items-center justify-center rounded-xl ${t.bg} ring-1 ${t.ring} ${t.text}`}>
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-novar-muted">
                        {c.sector}
                      </span>
                    </div>

                    <h3 className="mt-5 font-display text-lg font-semibold text-novar-ink leading-snug">
                      {c.title}
                    </h3>

                    <div className="mt-4 space-y-3 text-sm">
                      <div>
                        <div className="text-xs font-semibold uppercase tracking-wider text-novar-muted">
                          Problème
                        </div>
                        <p className="mt-1 text-novar-ink-soft leading-relaxed">{c.problem}</p>
                      </div>
                      <div>
                        <div className={`text-xs font-semibold uppercase tracking-wider ${t.text}`}>
                          Solution NOVAR
                        </div>
                        <p className="mt-1 text-novar-ink-soft leading-relaxed">{c.solution}</p>
                      </div>
                    </div>

                    <div className={`mt-6 inline-flex items-center gap-1 text-sm font-medium ${t.text} transition-all group-hover:gap-2`}>
                      Découvrir {c.product} <ArrowRight className="h-3.5 w-3.5" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
