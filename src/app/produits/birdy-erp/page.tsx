import Link from 'next/link';
import {
  ShoppingCart,
  Boxes,
  Truck,
  Wallet,
  BookOpen,
  Users,
  Globe,
  FileText,
  FileSpreadsheet,
  Smartphone,
  ArrowRight,
} from 'lucide-react';
import { FeatureCard } from '@/components/FeatureCard';
import { CtaBanner } from '@/components/CtaBanner';

export const metadata = {
  title: 'BIRDY ERP — Logiciel de gestion OHADA',
  description: 'BIRDY est l\'ERP complet pour PME guinéennes : POS, stock, achats, compta OHADA, RH/paie, multi-devises.',
};

const MODULES = [
  { icon: ShoppingCart, title: 'POS / Ventes', desc: 'Caisse tactile rapide, factures conformes, tickets de caisse, multi-modes de paiement, fonctionnement hors ligne.' },
  { icon: Boxes, title: 'Stock & articles', desc: 'Articles illimités, code-barres, étiquettes, inventaires tournants, alertes de réapprovisionnement, multi-dépôts.' },
  { icon: Truck, title: 'Achats', desc: 'Bons de commande fournisseurs, bons de réception, contrôle des écarts, échéancier de paiements.' },
  { icon: Wallet, title: 'Caisse & banque', desc: 'Suivi en temps réel des encaissements, arrêté de caisse, rapprochement bancaire, multi-comptes.' },
  { icon: BookOpen, title: 'Comptabilité OHADA', desc: 'Plan SYSCOHADA révisé, écritures manuelles, lettrage, journaux, balance, grand-livre, bilan, compte de résultat.' },
  { icon: Users, title: 'RH & Paie', desc: 'Employés, contrats, bulletins de paie, IRPP & CNSS Guinée, congés, ordres de virement.' },
  { icon: Globe, title: 'Multi-devises', desc: 'GNF · USD · EUR · CFA. Taux de change manuels ou automatiques, conversion en temps réel sur tous les documents.' },
  { icon: FileText, title: 'Liasse fiscale', desc: 'Génération automatisée des états annuels conformes DGI Guinée. TAFIRE inclus.' },
  { icon: FileSpreadsheet, title: 'Export FEC', desc: 'Fichier des Écritures Comptables au format réglementaire, prêt pour les contrôles fiscaux.' },
  { icon: Smartphone, title: 'Mobile Money', desc: 'Encaissements Orange Money et MTN MoMo intégrés. Réconciliation automatique avec les écritures comptables.' },
];

export default function BirdyErpPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-novar-cosmic py-20">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="absolute -top-20 right-0 h-96 w-96 rounded-full bg-novar-cyan/20 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-novar-cyan/30 bg-novar-cyan/10 px-3 py-1 text-xs font-medium text-novar-cyan mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-novar-cyan animate-pulse" />
              Disponible aujourd&apos;hui
            </div>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white">
              BIRDY ERP
            </h1>
            <p className="mt-4 text-xl text-slate-300">
              Le logiciel de gestion intégré pour les PME guinéennes.
            </p>
            <p className="mt-4 max-w-2xl text-base text-slate-400 leading-relaxed">
              Ventes, stock, comptabilité OHADA, paie, mobile money. Un seul outil, en français, qui fonctionne
              même quand Internet est capricieux. Conçu à Conakry pour le terrain africain.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link
                href="/demo"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-novar-cyan px-6 py-3 text-sm font-semibold text-novar-cosmic hover:bg-novar-cyan-glow"
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
          </div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-novar-cosmic">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-sm font-semibold text-novar-blue dark:text-novar-cyan uppercase tracking-wider">
              Modules
            </span>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
              Tout ce dont votre PME a besoin
            </h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
              Dix modules natifs, intégrés depuis le premier jour. Pas de plugins payants à empiler, pas de
              modules tiers à configurer.
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
                Conformité OHADA
              </span>
              <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
                La comptabilité guinéenne, sans douleur
              </h2>
              <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
                BIRDY génère automatiquement votre bilan, votre compte de résultat, votre TAFIRE et votre
                liasse fiscale au format DGI Guinée. Le FEC est exportable en un clic pour les contrôles
                fiscaux.
              </p>
              <ul className="mt-6 space-y-2 text-slate-700 dark:text-slate-300">
                <li>· Plan comptable SYSCOHADA révisé pré-installé</li>
                <li>· Lettrage automatique et manuel</li>
                <li>· Déclarations TVA et acomptes IS</li>
                <li>· Journaux paramétrables</li>
                <li>· Clôture annuelle assistée</li>
              </ul>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-8 dark:border-slate-800 dark:bg-novar-cosmic">
              <div className="space-y-3 font-mono text-sm">
                <div className="flex justify-between text-slate-600 dark:text-slate-400">
                  <span>Compte 411 — Clients</span>
                  <span className="text-novar-blue dark:text-novar-cyan">12 450 000 GNF</span>
                </div>
                <div className="flex justify-between text-slate-600 dark:text-slate-400">
                  <span>Compte 401 — Fournisseurs</span>
                  <span>−4 320 000 GNF</span>
                </div>
                <div className="flex justify-between text-slate-600 dark:text-slate-400">
                  <span>Compte 521 — Banque</span>
                  <span className="text-novar-blue dark:text-novar-cyan">28 100 000 GNF</span>
                </div>
                <div className="flex justify-between text-slate-600 dark:text-slate-400">
                  <span>Compte 4456 — TVA déductible</span>
                  <span>1 240 000 GNF</span>
                </div>
                <div className="border-t border-slate-200 dark:border-slate-700 pt-3 flex justify-between font-semibold text-slate-900 dark:text-white">
                  <span>Résultat de l&apos;exercice</span>
                  <span className="text-novar-blue dark:text-novar-cyan">+18 920 000 GNF</span>
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
