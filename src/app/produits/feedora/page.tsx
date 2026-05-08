import Link from 'next/link';
import { ArrowRight, ExternalLink, FileBarChart2, Globe2, Coins, History, Settings2, Layers } from 'lucide-react';
import { CtaBanner } from '@/components/CtaBanner';

export const metadata = {
  title: 'FEEDORA — Plateforme d\'Optimisation Nutritionnelle pour Volailles',
  description:
    "Application B2B SaaS pour éleveurs et nutritionnistes : formulation d'aliments équilibrés, multi-devises, multi-pays (Côte d'Ivoire, Mali, Sénégal, Bénin, Guinée).",
};

const FEATURES = [
  {
    icon: Layers,
    title: 'Formulation intelligente',
    body: "Création de formules pour toutes les spéculations : poulet de chair, pondeuse, dinde et plus. Calcul en temps réel du coût par kg et par tonne, vérification automatique des besoins nutritionnels (Énergie, Protéines, Lysine, Calcium, etc.). Alertes et recommandations basées sur les standards zootechniques.",
  },
  {
    icon: Globe2,
    title: 'Multi-pays Afrique de l\'Ouest',
    body: "Personnalisation des prix et matières premières par pays : Côte d'Ivoire, Mali, Sénégal, Bénin, Guinée. Conversion automatique des devises (XOF, GNF, USD) selon votre localisation.",
  },
  {
    icon: History,
    title: 'Historique complet',
    body: 'Sauvegarde automatique de toutes vos formulations. Suivi de l\'évolution des coûts au fil du temps. Réouverture et modification rapide des anciennes formules.',
  },
  {
    icon: Settings2,
    title: 'Paramétrage avancé',
    body: 'Gestion complète de la base de données d\'ingrédients. Ajustement des besoins nutritionnels par phase d\'élevage. Administration des utilisateurs et des rôles (Admin, God, User).',
  },
  {
    icon: FileBarChart2,
    title: 'Rapports professionnels',
    body: 'Génération de rapports PDF haute qualité, mise en page optimisée pour l\'impression. Analyse détaillée des coûts et de la composition nutritionnelle.',
  },
  {
    icon: Coins,
    title: 'Multi-devises auto',
    body: 'Conversion automatique XOF / GNF / USD selon le pays sélectionné. Idéal pour les coopératives et fermes opérant dans plusieurs marchés.',
  },
];

export default function FeedoraPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-novar-cosmic py-24 lg:py-32">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-[600px] w-[1000px] rounded-full bg-novar-cyan/10 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-sm font-semibold text-novar-cyan uppercase tracking-wider">Produit Novar</span>
          <h1 className="mt-2 font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white">
            FEEDORA
          </h1>
          <p className="mt-3 text-xl text-novar-cyan font-medium">
            Plateforme d&apos;Optimisation Nutritionnelle pour Volailles
          </p>
          <p className="mt-6 max-w-2xl text-lg text-slate-300 leading-relaxed">
            Application professionnelle B2B conçue pour aider les éleveurs et
            nutritionnistes à formuler des aliments pour volailles équilibrés,
            économiques et performants. En production aujourd&apos;hui dans
            plusieurs pays d&apos;Afrique de l&apos;Ouest.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a
              href="https://feedora-cyan.vercel.app/"
              target="_blank"
              rel="noopener"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-novar-cyan px-6 py-3 text-sm font-semibold text-novar-cosmic shadow-lg shadow-novar-cyan/20 hover:bg-novar-cyan-glow transition-colors"
            >
              Accéder à FEEDORA <ExternalLink className="h-4 w-4" />
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-novar-cyan/40 bg-transparent px-6 py-3 text-sm font-semibold text-novar-cyan hover:bg-novar-cyan/10 transition-colors"
            >
              Demander une démo guidée <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-8 flex flex-wrap gap-x-3 gap-y-2 text-xs text-slate-400">
            <span className="inline-flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              En production
            </span>
            <span className="text-slate-600">·</span>
            <span>SaaS Web</span>
            <span className="text-slate-600">·</span>
            <span>Multi-utilisateurs</span>
            <span className="text-slate-600">·</span>
            <span>Côte d&apos;Ivoire · Mali · Sénégal · Bénin · Guinée</span>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-novar-cosmic">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
              Fonctionnalités clés
            </h2>
            <p className="mt-4 text-slate-600 dark:text-slate-400">
              Tout ce dont un nutritionniste avicole professionnel a besoin pour
              formuler, valider et historiser ses rations.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((f) => {
              const Icon = f.icon;
              return (
                <div
                  key={f.title}
                  className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-novar-cyan/40 hover:shadow-lg dark:border-slate-800 dark:bg-novar-cosmic/50"
                >
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-novar-cyan/10 text-novar-cyan">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-bold text-slate-900 dark:text-white">
                    {f.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                    {f.body}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50 dark:bg-novar-cosmic-2/30">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-slate-900 dark:text-white">Stack technique</h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400">
            FEEDORA est construit sur une stack moderne pour garantir
            performance, sécurité et évolutivité.
          </p>
          <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-4 text-sm">
            <div>
              <dt className="font-semibold text-slate-900 dark:text-white">Frontend</dt>
              <dd className="text-slate-600 dark:text-slate-400">React, Vite, TailwindCSS</dd>
            </div>
            <div>
              <dt className="font-semibold text-slate-900 dark:text-white">UI</dt>
              <dd className="text-slate-600 dark:text-slate-400">Radix UI, Lucide, Recharts</dd>
            </div>
            <div>
              <dt className="font-semibold text-slate-900 dark:text-white">State</dt>
              <dd className="text-slate-600 dark:text-slate-400">TanStack Query</dd>
            </div>
            <div>
              <dt className="font-semibold text-slate-900 dark:text-white">Backend</dt>
              <dd className="text-slate-600 dark:text-slate-400">Base44 (BaaS Supabase-like)</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-novar-cosmic">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <CtaBanner
            title="Vous gérez une exploitation avicole ?"
            description="Démarrez avec FEEDORA dès aujourd'hui ou demandez une démo guidée par notre équipe."
            primaryHref="https://feedora-cyan.vercel.app/"
            primaryLabel="Accéder à FEEDORA"
            secondaryHref="/contact"
            secondaryLabel="Demander une démo"
          />
        </div>
      </section>
    </>
  );
}
