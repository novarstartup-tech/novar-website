import Link from 'next/link';
import {
  Rocket,
  Boxes,
  BookOpen,
  Users,
  ShieldCheck,
  ArrowRight,
  type LucideIcon,
} from 'lucide-react';

export const metadata = {
  title: 'Documentation BIRDY & FEEDORA',
  description:
    'Documentation complète : démarrage rapide, modules BIRDY (POS, articles, stock, achats, caisse), comptabilité OHADA, RH & paie, sécurité.',
  alternates: { canonical: '/docs' },
};

type Section = {
  title: string;
  icon: LucideIcon;
  description: string;
  links: { label: string; href: string }[];
};

const SECTIONS: Section[] = [
  {
    title: 'Démarrage',
    icon: Rocket,
    description: 'Installer BIRDY et configurer votre société en moins d’une heure.',
    links: [
      { label: 'Installation', href: '/docs/demarrage/installation' },
      { label: 'Première utilisation', href: '/docs/demarrage/premiere-utilisation' },
      { label: 'Parcours d’onboarding', href: '/docs/demarrage/onboarding' },
      { label: 'Tour de l’interface', href: '/docs/demarrage/interface' },
    ],
  },
  {
    title: 'Modules BIRDY',
    icon: Boxes,
    description: 'Les modules métiers de l’ERP : ventes, stock, achats, caisse.',
    links: [
      { label: 'POS / Ventes', href: '/docs/modules/pos' },
      { label: 'Articles & catégories', href: '/docs/modules/articles' },
      { label: 'Gestion du stock', href: '/docs/modules/stock' },
      { label: 'Achats & approvisionnement', href: '/docs/modules/achats' },
      { label: 'Caisse & encaissements', href: '/docs/modules/caisse' },
    ],
  },
  {
    title: 'Comptabilité OHADA',
    icon: BookOpen,
    description: 'Plan comptable, lettrage, liasse fiscale, FEC — tout est intégré.',
    links: [
      { label: 'Plan comptable SYSCOHADA', href: '/docs/ohada/plan-comptable' },
      { label: 'Écritures manuelles', href: '/docs/ohada/ecritures-manuelles' },
      { label: 'Lettrage', href: '/docs/ohada/lettrage' },
      { label: 'Déclaration de TVA', href: '/docs/ohada/tva' },
      { label: 'Liasse fiscale', href: '/docs/ohada/liasse-fiscale' },
      { label: 'Export FEC', href: '/docs/ohada/fec-export' },
      { label: 'TAFIRE', href: '/docs/ohada/tafire' },
    ],
  },
  {
    title: 'RH & Paie',
    icon: Users,
    description: 'Gérer vos employés, contrats, paies et déclarations sociales.',
    links: [
      { label: 'Gestion des employés', href: '/docs/rh-paie/employes' },
      { label: 'Contrats & avenants', href: '/docs/rh-paie/contrats' },
      { label: 'Paie mensuelle', href: '/docs/rh-paie/paie-mensuelle' },
      { label: 'IRPP & CNSS Guinée', href: '/docs/rh-paie/irpp-cnss' },
      { label: 'Congés & absences', href: '/docs/rh-paie/conges' },
    ],
  },
  {
    title: 'Sécurité',
    icon: ShieldCheck,
    description: 'Authentification forte et traçabilité des accès.',
    links: [
      { label: 'Authentification MFA', href: '/docs/securite/mfa' },
      { label: 'Journal d’audit', href: '/docs/securite/audit-log' },
    ],
  },
];

export default function DocsIndex() {
  return (
    <div className="w-full">
      {/* HERO */}
      <section className="relative overflow-hidden bg-white">
        <div className="absolute inset-x-0 top-0 h-[360px] bg-gradient-to-b from-novar-surface-2 to-white" aria-hidden />
        <div className="absolute inset-0 bg-dots opacity-50" aria-hidden />
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-12 pt-12 pb-10 sm:pt-16 sm:pb-12">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-novar-accent">
            Documentation
          </span>
          <h1 className="mt-4 font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-novar-ink">
            Tout ce qu&apos;il faut pour
            <br />
            maîtriser BIRDY.
          </h1>
          <p className="mt-5 max-w-2xl text-base sm:text-lg text-novar-muted leading-relaxed">
            Guides pas à pas, références techniques et bonnes pratiques —
            organisés par thème pour aller droit au but.
          </p>
        </div>
      </section>

      {/* SECTIONS — grille 3 colonnes (responsive) */}
      <section className="bg-white py-10 sm:py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SECTIONS.map((section) => {
              const Icon = section.icon;
              return (
                <article
                  key={section.title}
                  className="flex flex-col rounded-2xl border border-novar-line bg-white p-5 sm:p-7 hover:border-novar-ink/20 hover:shadow-lifted transition-all"
                >
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-novar-surface-2 text-novar-ink ring-1 ring-novar-line">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h2 className="font-display text-lg font-semibold text-novar-ink">
                      {section.title}
                    </h2>
                  </div>
                  <p className="mt-4 text-sm text-novar-muted leading-relaxed">
                    {section.description}
                  </p>
                  <ul className="mt-5 space-y-2 flex-1">
                    {section.links.map((l) => (
                      <li key={l.href}>
                        <Link
                          href={l.href}
                          className="group flex items-center justify-between rounded-lg border border-transparent px-3 py-2 text-sm text-novar-ink-soft hover:border-novar-line hover:bg-novar-surface-2 transition-colors"
                        >
                          <span>{l.label}</span>
                          <ArrowRight className="h-3.5 w-3.5 text-novar-muted opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-0.5" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
