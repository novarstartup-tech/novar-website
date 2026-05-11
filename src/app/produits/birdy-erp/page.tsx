import Link from 'next/link';
import {
  ArrowRight,
  ReceiptText,
  BookOpen,
  Users,
  Boxes,
  Truck,
  Wallet,
  Globe,
  Smartphone,
  CheckCircle2,
} from 'lucide-react';
import { CtaBanner } from '@/components/CtaBanner';
import { ProductBackdrop } from '@/components/ProductBackdrop';
import { SoftwareApplicationJsonLd } from '@/components/JsonLd';
import { SITE } from '@/lib/site';

export const metadata = {
  title: 'BIRDY — ERP & gestion comptable OHADA',
  description:
    "BIRDY est l'ERP et le logiciel de gestion comptable OHADA complet pour PME africaines : facturation, comptabilité, paie, stocks. Moderne, en français, sans douleur.",
};

const MODULES = [
  {
    icon: ReceiptText,
    title: 'Facturation',
    desc: "Devis, factures, avoirs, relances clients. Numérotation conforme, modèles personnalisables, envoi par email en un clic.",
  },
  {
    icon: BookOpen,
    title: 'Comptabilité OHADA',
    desc: "Plan SYSCOHADA révisé, écritures manuelles, lettrage, journaux, balance, grand-livre, bilan, compte de résultat. Liasse fiscale et FEC inclus.",
  },
  {
    icon: Users,
    title: 'Paie & RH',
    desc: "Employés, contrats, bulletins de paie, calcul automatique IRPP & CNSS, congés, ordres de virement.",
  },
  {
    icon: Boxes,
    title: 'Stocks & articles',
    desc: "Articles illimités, multi-dépôts, code-barres, alertes seuils, inventaires tournants. Mouvements tracés.",
  },
  {
    icon: Truck,
    title: 'Achats fournisseurs',
    desc: "Commandes, réceptions partielles ou totales, factures fournisseur, échéancier de paiements.",
  },
  {
    icon: Wallet,
    title: 'Caisse & banque',
    desc: "Sessions de caisse, encaissements en temps réel, rapprochement bancaire multi-comptes, arrêté de caisse.",
  },
  {
    icon: Globe,
    title: 'Multi-devises',
    desc: "GNF, XOF, USD, EUR et plus. Taux de change manuels ou automatiques, conversion en temps réel sur tous les documents.",
  },
  {
    icon: Smartphone,
    title: "Hors ligne d'abord",
    desc: "BIRDY tourne sans Internet. Synchronisation automatique dès que la connexion revient.",
  },
];

export default function BirdyErpPage() {
  return (
    <>
      <SoftwareApplicationJsonLd
        name="BIRDY ERP"
        description="BIRDY est un ERP et logiciel de gestion comptable OHADA complet pour PME africaines. Facturation, comptabilité SYSCOHADA, paie IRPP/CNSS, stocks, caisse, multi-devises GNF/XOF/EUR/USD. Freeware propriétaire."
        url={`${SITE.url}/produits/birdy-erp`}
        applicationCategory="BusinessApplication"
        operatingSystem="Windows 10, Windows 11"
        offers={{ price: '0', priceCurrency: 'XOF' }}
      />
      {/* Hero — palette cyan navy (confiance, expertise comptable).
          Photo backdrop au fond + voile sombre dégradé gauche pour la
          lisibilité du texte (style Stripe / Linear hero). */}
      <section className="relative overflow-hidden border-b border-slate-800/40 bg-slate-950">
        {/* Photo en fond (BIRDY ERP) */}
        <div className="absolute inset-0" aria-hidden>
          <ProductBackdrop variant="birdy" />
        </div>
        {/* Voile gauche -> droite : opaque sur la moitié texte, transparent
            sur la photo. Garantit la lisibilité sans étouffer l'image. */}
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
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
              Produit NOVAR · ERP OHADA · Gratuit
            </span>
            <h1 className="mt-4 font-display text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-[1.05]">
              BIRDY
            </h1>
            <p className="mt-4 text-xl sm:text-2xl font-medium text-cyan-300">
              L&apos;ERP et la gestion comptable OHADA, sans douleur.
            </p>
            <p className="mt-6 max-w-2xl text-lg text-slate-300 leading-relaxed">
              BIRDY est un logiciel de gestion comptable OHADA complet pour
              les PME africaines. Facturation, comptabilité, paie, stocks —
              tout est centralisé dans un outil moderne, en français, qui
              s&apos;installe en quelques minutes.{' '}
              <strong className="text-white">100&nbsp;% gratuit, à vie.</strong>
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-3">
              <Link
                href="/telechargements"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-cyan-500 px-5 py-3 text-sm font-semibold text-slate-950 transition-all hover:bg-cyan-400 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(34,211,238,0.35)]"
              >
                Télécharger BIRDY <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/demo"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-600 bg-slate-900/40 px-5 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-slate-800/60"
              >
                Réserver une démo
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs uppercase tracking-wider text-slate-400">
              <span className="inline-flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                En production
              </span>
              <span className="text-slate-700">·</span>
              <span>Windows · macOS &amp; Linux à venir</span>
              <span className="text-slate-700">·</span>
              <span>SYSCOHADA révisé</span>
              <span className="text-slate-700">·</span>
              <span>Multi-utilisateurs</span>
            </div>
          </div>
        </div>
      </section>

      {/* Modules */}
      <section className="surface-alt">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-700">
              Modules
            </span>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-novar-ink leading-tight">
              Tout ce dont une PME a besoin.
            </h2>
            <p className="mt-5 text-lg text-novar-muted leading-relaxed">
              Huit modules natifs, intégrés depuis le premier jour. Pas de
              plugins payants à empiler, pas de modules tiers à configurer —
              tout est inclus.
            </p>
          </div>

          <div className="mt-14 grid gap-px bg-novar-line rounded-3xl overflow-hidden border border-novar-line sm:grid-cols-2 lg:grid-cols-4">
            {MODULES.map((m) => {
              const Icon = m.icon;
              return (
                <div key={m.title} className="bg-white p-7 transition-all hover:bg-novar-surface-2">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-novar-surface-2 text-novar-ink ring-1 ring-novar-line">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 font-display text-base font-semibold text-novar-ink">
                    {m.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-novar-muted">
                    {m.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Comptabilité OHADA — focus */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 md:py-32">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-700">
                Conformité OHADA native
              </span>
              <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold tracking-tight text-novar-ink leading-tight">
                La comptabilité africaine, sans complexité.
              </h2>
              <p className="mt-6 text-lg text-novar-muted leading-relaxed">
                BIRDY génère automatiquement votre bilan, votre compte de
                résultat, votre TAFIRE et votre liasse fiscale au format
                local. Le FEC est exportable en un clic pour les contrôles
                fiscaux.
              </p>
              <ul className="mt-8 space-y-4">
                {[
                  'Plan comptable SYSCOHADA révisé pré-installé',
                  'Lettrage automatique et manuel',
                  "Déclarations TVA et acomptes d'impôt",
                  'Journaux paramétrables',
                  'Clôture annuelle assistée',
                  'Export FEC réglementaire',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-novar-ink-soft">
                    <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-cyan-700 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl border border-novar-line bg-novar-surface-2 p-8 sm:p-12 shadow-soft">
              <div className="space-y-3 font-mono text-sm">
                <div className="text-xs font-semibold uppercase tracking-wider text-novar-muted mb-3">
                  Balance générale — Exercice 2026
                </div>
                <div className="flex justify-between text-novar-muted">
                  <span>Compte 411 — Clients</span>
                  <span className="text-novar-ink font-semibold">12 450 000 GNF</span>
                </div>
                <div className="flex justify-between text-novar-muted">
                  <span>Compte 401 — Fournisseurs</span>
                  <span>−4 320 000 GNF</span>
                </div>
                <div className="flex justify-between text-novar-muted">
                  <span>Compte 521 — Banque</span>
                  <span className="text-novar-ink font-semibold">28 100 000 GNF</span>
                </div>
                <div className="flex justify-between text-novar-muted">
                  <span>Compte 4456 — TVA déductible</span>
                  <span>1 240 000 GNF</span>
                </div>
                <div className="flex justify-between text-novar-muted">
                  <span>Compte 6011 — Achats marchandises</span>
                  <span>9 300 000 GNF</span>
                </div>
                <div className="border-t border-novar-line pt-4 mt-4 flex justify-between font-semibold text-novar-ink">
                  <span>Résultat de l&apos;exercice</span>
                  <span className="text-cyan-700">+18 920 000 GNF</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 pb-24 md:pb-32">
          <CtaBanner
            title="Prêt à installer BIRDY ?"
            description="100 % gratuit, sans abonnement, sans carte bancaire. Installation guidée en moins de 30 minutes."
            primaryHref="/telechargements"
            primaryLabel="Télécharger BIRDY"
            secondaryHref="/demo"
            secondaryLabel="Réserver une démo"
          />
        </div>
      </section>
    </>
  );
}
