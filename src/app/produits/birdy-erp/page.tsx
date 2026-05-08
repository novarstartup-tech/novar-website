import Link from 'next/link';
import {
  Boxes,
  Warehouse,
  History,
  AlertTriangle,
  Barcode,
  Truck,
  Globe,
  Smartphone,
  ArrowRight,
} from 'lucide-react';
import { FeatureCard } from '@/components/FeatureCard';
import { CtaBanner } from '@/components/CtaBanner';

export const metadata = {
  title: 'BIRDY — Plateforme de gestion de stock',
  description:
    "BIRDY est la plateforme de gestion de stock pour boutiques et PME africaines : entrées/sorties, multi-dépôts, alertes seuils, code-barres, hors ligne par défaut.",
};

const MODULES = [
  {
    icon: Boxes,
    title: 'Catalogue articles',
    desc: "Articles illimités avec code-barres, photos, catégories, unités multiples (carton, sachet, kg). Import / export Excel.",
  },
  {
    icon: Warehouse,
    title: 'Multi-dépôts',
    desc: "Suivez le stock dans plusieurs entrepôts, boutiques ou véhicules. Transferts inter-dépôts tracés.",
  },
  {
    icon: History,
    title: 'Mouvements détaillés',
    desc: "Historique complet : entrées, sorties, ajustements, transferts, inventaires. Chaque mouvement est horodaté et signé.",
  },
  {
    icon: AlertTriangle,
    title: 'Alertes seuils',
    desc: "Définissez un stock minimum par article. Alertes visuelles dès que vous descendez sous le seuil de réapprovisionnement.",
  },
  {
    icon: Barcode,
    title: 'Code-barres',
    desc: "Saisie rapide via lecteur code-barres USB ou caméra. Génération et impression d'étiquettes EAN-13.",
  },
  {
    icon: Truck,
    title: 'Réceptions fournisseurs',
    desc: "Bons de commande, réceptions partielles ou totales, contrôle des écarts. Traçabilité de bout en bout.",
  },
  {
    icon: Globe,
    title: 'Multi-devises',
    desc: "GNF, XOF, USD, EUR. Coût d'achat enregistré dans la devise d'origine, conversion automatique.",
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
      <section className="relative overflow-hidden bg-novar-cosmic py-20">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="absolute -top-20 right-0 h-96 w-96 rounded-full bg-novar-cyan/20 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold text-novar-cyan uppercase tracking-wider">Produit Novar</span>
            <h1 className="mt-2 font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white">
              BIRDY
            </h1>
            <p className="mt-3 text-xl text-novar-cyan font-medium">
              Plateforme de gestion de stock pour PME africaines
            </p>
            <p className="mt-6 max-w-2xl text-lg text-slate-300 leading-relaxed">
              Suivez votre stock en temps réel, gérez plusieurs dépôts, recevez
              des alertes de réapprovisionnement et travaillez hors ligne. BIRDY
              est conçu à Conakry pour le terrain ouest-africain — boutiques,
              grossistes, distributeurs.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link
                href="/demo"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-novar-cyan px-6 py-3 text-sm font-semibold text-novar-cosmic shadow-lg shadow-novar-cyan/20 hover:bg-novar-cyan-glow"
              >
                Réserver une démo <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/telechargements"
                className="inline-flex items-center justify-center rounded-lg border border-novar-cyan/40 px-6 py-3 text-sm font-semibold text-novar-cyan hover:bg-novar-cyan/10"
              >
                Télécharger
              </Link>
              <Link
                href="/tarifs"
                className="inline-flex items-center justify-center rounded-lg border border-white/20 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
              >
                Voir les tarifs
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-3 gap-y-2 text-xs text-slate-400">
              <span className="inline-flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                En production
              </span>
              <span className="text-slate-600">·</span>
              <span>Windows · macOS · Linux</span>
              <span className="text-slate-600">·</span>
              <span>Hors ligne par défaut</span>
              <span className="text-slate-600">·</span>
              <span>Multi-utilisateurs</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-novar-cosmic">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-sm font-semibold text-novar-blue dark:text-novar-cyan uppercase tracking-wider">
              Fonctionnalités
            </span>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
              Tout ce qu&apos;il faut pour piloter votre stock
            </h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
              BIRDY se concentre sur une seule chose : la gestion de stock,
              faite proprement. Pas de modules superflus, pas de plugins
              payants à empiler.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {MODULES.map((m) => (
              <FeatureCard key={m.title} icon={m.icon} title={m.title} description={m.desc} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50 dark:bg-novar-cosmic-2/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="text-sm font-semibold text-novar-blue dark:text-novar-cyan uppercase tracking-wider">
                Conçu pour l&apos;Afrique
              </span>
              <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
                Hors ligne d&apos;abord, multi-devises, multi-dépôts
              </h2>
              <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
                Internet capricieux ? BIRDY continue de fonctionner. Vos
                vendeurs scannent, vendent, réceptionnent — la base se
                synchronise dès que la connexion revient. Une seule licence
                couvre tous vos points de vente et entrepôts.
              </p>
              <ul className="mt-6 space-y-2 text-slate-700 dark:text-slate-300">
                <li>· Base SQLite locale chiffrée — vos données restent chez vous</li>
                <li>· Multi-utilisateurs avec rôles (vendeur, magasinier, gérant)</li>
                <li>· Sauvegardes automatiques chiffrées</li>
                <li>· Interface française pensée pour le terrain</li>
                <li>· Support installation et formation</li>
              </ul>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-novar-cosmic">
              <div className="space-y-3 font-mono text-sm">
                <div className="flex justify-between text-slate-600 dark:text-slate-400">
                  <span>Riz parfumé 25 kg</span>
                  <span className="text-novar-blue dark:text-novar-cyan">142 sacs</span>
                </div>
                <div className="flex justify-between text-slate-600 dark:text-slate-400">
                  <span>Huile palme 5 L</span>
                  <span className="text-amber-500">28 bidons ⚠</span>
                </div>
                <div className="flex justify-between text-slate-600 dark:text-slate-400">
                  <span>Sucre en poudre 1 kg</span>
                  <span className="text-novar-blue dark:text-novar-cyan">516 sachets</span>
                </div>
                <div className="flex justify-between text-slate-600 dark:text-slate-400">
                  <span>Lait concentré 410 g</span>
                  <span className="text-rose-500">0 boîtes ✕</span>
                </div>
                <div className="border-t border-slate-200 dark:border-slate-700 pt-3 flex justify-between font-semibold text-slate-900 dark:text-white">
                  <span>Valeur totale stock</span>
                  <span className="text-novar-blue dark:text-novar-cyan">42 580 000 GNF</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-novar-cosmic">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <CtaBanner
            title="Prêt à essayer BIRDY ?"
            description="30 jours gratuits, sans carte bancaire. Installation guidée en moins de 30 minutes."
            primaryHref="/demo"
            primaryLabel="Démarrer l'essai gratuit"
            secondaryHref="/tarifs"
            secondaryLabel="Voir les tarifs"
          />
        </div>
      </section>
    </>
  );
}
