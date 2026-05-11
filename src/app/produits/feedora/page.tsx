import Link from 'next/link';
import {
  ArrowRight,
  ExternalLink,
  FileBarChart2,
  Globe2,
  Coins,
  History,
  Settings2,
  Layers,
  CheckCircle2,
} from 'lucide-react';
import { CtaBanner } from '@/components/CtaBanner';
import { ProductBackdrop } from '@/components/ProductBackdrop';
import { ProductJsonLd } from '@/components/JsonLd';
import { SITE } from '@/lib/site';

export const metadata = {
  title: "FEEDORA — Formulation alimentaire pour fermes avicoles",
  description:
    "Application B2B AgriTech pour éleveurs et nutritionnistes : formulation d'aliments équilibrés et économiques, calcul du coût en temps réel, alertes nutritionnelles, rapports PDF.",
};

const FEATURES = [
  {
    icon: Layers,
    title: 'Formulation intelligente',
    body: "Création de formules pour toutes les spéculations : poulet de chair, pondeuse, dinde et plus. Calcul en temps réel du coût par kg et par tonne, vérification automatique des besoins nutritionnels (énergie, protéines, lysine, calcium, etc.). Alertes basées sur les standards zootechniques.",
  },
  {
    icon: Globe2,
    title: 'Multi-pays',
    body: "Personnalisation des prix et matières premières par pays. Conversion automatique des devises selon votre localisation. Pensé pour les coopératives et fermes opérant sur plusieurs marchés.",
  },
  {
    icon: History,
    title: 'Historique complet',
    body: "Sauvegarde automatique de toutes vos formulations. Suivi de l'évolution des coûts au fil du temps. Réouverture et modification rapide des anciennes formules.",
  },
  {
    icon: Settings2,
    title: 'Paramétrage avancé',
    body: "Gestion complète de la base d'ingrédients. Ajustement des besoins nutritionnels par phase d'élevage. Administration des utilisateurs et des rôles.",
  },
  {
    icon: FileBarChart2,
    title: 'Rapports professionnels',
    body: 'Génération de rapports PDF haute qualité, mise en page optimisée pour l\'impression. Analyse détaillée des coûts et de la composition nutritionnelle.',
  },
  {
    icon: Coins,
    title: 'Multi-devises',
    body: 'Conversion automatique entre devises locales et de référence selon le pays sélectionné. Idéal pour les structures opérant sur plusieurs marchés.',
  },
];

export default function FeedoraPage() {
  return (
    <>
      <ProductJsonLd
        name="FEEDORA"
        description="FEEDORA est une application SaaS B2B AgriTech pour la formulation alimentaire en aviculture. Création de formules pour poulet de chair, pondeuse, dinde — calcul du coût en temps réel, alertes nutritionnelles (énergie, protéines, lysine, calcium), multi-devises, rapports PDF. Conçue pour éleveurs, nutritionnistes et coopératives en Guinée et Afrique de l'Ouest."
        url={`${SITE.url}/produits/feedora`}
        category="AgriTech SaaS — Alimentation animale & formulation avicole"
      />
      {/* Hero — palette emeraude (AgriTech vivant), photo backdrop +
          voile sombre gauche pour la lisibilité du texte. */}
      <section className="relative overflow-hidden border-b border-slate-800/40 bg-slate-950">
        <div className="absolute inset-0" aria-hidden>
          <ProductBackdrop variant="feedora" />
        </div>
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden
          style={{
            background:
              'linear-gradient(90deg, rgba(8,15,30,0.92) 0%, rgba(8,15,30,0.80) 35%, rgba(8,15,30,0.30) 70%, rgba(8,15,30,0.00) 100%)',
          }}
        />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-20 md:py-28">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">
              Produit NOVAR · AgriTech B2B
            </span>
            <h1 className="mt-4 font-display text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-[1.05]">
              FEEDORA
            </h1>
            <p className="mt-4 text-xl sm:text-2xl font-medium text-emerald-300">
              Formulation alimentaire pour fermes avicoles.
            </p>
            <p className="mt-6 max-w-2xl text-lg text-slate-300 leading-relaxed">
              Application professionnelle B2B AgriTech, conçue pour aider les
              éleveurs et nutritionnistes à formuler des aliments pour
              volailles équilibrés, économiques et performants. En production
              aujourd&apos;hui.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-3">
              <a
                href="https://feedora-cyan.vercel.app/"
                target="_blank"
                rel="noopener"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-500 px-5 py-3 text-sm font-semibold text-slate-950 transition-all hover:bg-emerald-400 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(52,211,153,0.35)]"
              >
                Accéder à FEEDORA <ExternalLink className="h-4 w-4" />
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-600 bg-slate-900/40 px-5 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-slate-800/60"
              >
                Demander une démo <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs uppercase tracking-wider text-slate-400">
              <span className="inline-flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                En production
              </span>
              <span className="text-slate-700">·</span>
              <span>SaaS Web</span>
              <span className="text-slate-700">·</span>
              <span>Multi-utilisateurs</span>
              <span className="text-slate-700">·</span>
              <span>Multi-pays</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="surface-alt">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
              Fonctionnalités
            </span>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-novar-ink leading-tight">
              Pensé pour les professionnels.
            </h2>
            <p className="mt-5 text-lg text-novar-muted leading-relaxed">
              Tout ce dont un nutritionniste avicole a besoin pour formuler,
              valider et historiser ses rations.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((f) => {
              const Icon = f.icon;
              return (
                <div
                  key={f.title}
                  className="rounded-2xl border border-novar-line bg-white p-7 transition-all hover:shadow-lifted hover:border-novar-ink/20"
                >
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-novar-surface-2 text-novar-ink ring-1 ring-novar-line">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold text-novar-ink">
                    {f.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-novar-muted">
                    {f.body}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bénéfices utilisateurs */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 md:py-32">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
                Pour qui
              </span>
              <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold tracking-tight text-novar-ink leading-tight">
                Pensé par et pour les professionnels de l&apos;avicole.
              </h2>
              <p className="mt-6 text-lg text-novar-muted leading-relaxed">
                FEEDORA s&apos;adresse aux éleveurs avicoles qui veulent
                maîtriser leurs coûts alimentaires, et aux nutritionnistes qui
                accompagnent plusieurs structures. Le résultat : des formules
                équilibrées, performantes, économiques.
              </p>
              <ul className="mt-8 space-y-4">
                {[
                  "Réduction du coût alimentaire jusqu'à 15 %",
                  "Garantie d'équilibre nutritionnel sur chaque lot",
                  "Historique exploitable pour le suivi de performance",
                  "Travail collaboratif entre éleveur et nutritionniste",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-novar-ink-soft">
                    <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-emerald-700 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl border border-novar-line bg-novar-surface-2 p-8 sm:p-12 shadow-soft">
              <div className="space-y-3 text-sm">
                <div className="text-xs font-semibold uppercase tracking-wider text-novar-muted mb-3">
                  Formule poulet de chair · Démarrage
                </div>
                <div className="flex items-center justify-between text-novar-muted">
                  <span>Maïs jaune</span>
                  <span className="font-mono text-novar-ink">52,4 %</span>
                </div>
                <div className="flex items-center justify-between text-novar-muted">
                  <span>Tourteau de soja 48</span>
                  <span className="font-mono text-novar-ink">28,1 %</span>
                </div>
                <div className="flex items-center justify-between text-novar-muted">
                  <span>Son de blé</span>
                  <span className="font-mono text-novar-ink">12,0 %</span>
                </div>
                <div className="flex items-center justify-between text-novar-muted">
                  <span>Phosphate bicalcique</span>
                  <span className="font-mono text-novar-ink">1,8 %</span>
                </div>
                <div className="flex items-center justify-between text-novar-muted">
                  <span>Carbonate de calcium</span>
                  <span className="font-mono text-novar-ink">1,2 %</span>
                </div>
                <div className="border-t border-novar-line pt-4 mt-4 flex items-center justify-between font-semibold text-novar-ink">
                  <span>Coût par tonne</span>
                  <span className="text-emerald-700 font-mono">312 400 XOF</span>
                </div>
                <div className="text-xs text-novar-muted mt-2">
                  Énergie 2 920 kcal · Protéines 19,2 % · Lysine 1,12 %
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 pb-24 md:pb-32">
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
