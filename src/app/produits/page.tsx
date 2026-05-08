import { Boxes, Bird } from 'lucide-react';
import { FeatureCard } from '@/components/FeatureCard';
import { CtaBanner } from '@/components/CtaBanner';

export const metadata = {
  title: 'Produits',
  description: 'Le catalogue NOVAR : BIRDY ERP, FEEDORA, solutions sur mesure et fintech B2B pour PME africaines.',
};

export default function ProduitsPage() {
  return (
    <>
      <section className="bg-novar-cosmic py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-sm font-semibold text-novar-cyan uppercase tracking-wider">Produits Novar</span>
          <h1 className="mt-2 font-display text-4xl sm:text-5xl font-bold text-white">Nos plateformes B2B verticales</h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-300">
            En parallèle de notre activité fintech, NOVAR édite des plateformes
            métiers indépendantes pour des secteurs précis. Deux produits sont
            en production aujourd&apos;hui — <strong className="text-novar-cyan">BIRDY</strong> pour
            la gestion de stock et <strong className="text-novar-cyan">FEEDORA</strong> pour la formulation alimentaire avicole.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-novar-cosmic">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2">
            <FeatureCard
              icon={Boxes}
              title="BIRDY"
              description="Plateforme de gestion de stock pour boutiques et PME. Suivi des entrées/sorties, multi-dépôts, alertes seuils, hors ligne par défaut. Conçu pour le marché ouest-africain."
              href="/produits/birdy-erp"
              badge="En production"
            />
            <FeatureCard
              icon={Bird}
              title="FEEDORA"
              description="Plateforme de gestion et formulation alimentaire pour fermes avicoles. Calcul de rations équilibrées, multi-pays (CI, Mali, Sénégal, Bénin, Guinée), rapports PDF. SaaS B2B."
              href="/produits/feedora"
              badge="En production"
            />
          </div>

          <div className="mt-10 rounded-xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-novar-cosmic-2/30">
            <h2 className="font-display text-2xl font-bold text-slate-900 dark:text-white">
              Vous cherchez une solution fintech ou un logiciel sur mesure ?
            </h2>
            <p className="mt-2 max-w-2xl text-slate-600 dark:text-slate-400">
              Au-delà de nos produits, NOVAR conçoit des solutions fintech B2B
              (Mobile Money, passerelles bancaires, paiement marchand) et des
              logiciels métiers sur cahier des charges.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href="/services/sur-mesure"
                className="inline-flex items-center gap-2 rounded-lg bg-novar-cyan px-5 py-2.5 text-sm font-semibold text-novar-cosmic hover:bg-novar-cyan-glow"
              >
                Voir nos services
              </a>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
              >
                Nous contacter
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50 dark:bg-novar-cosmic-2/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-slate-900 dark:text-white mb-8">Roadmap publique</h2>
          <div className="rounded-xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-novar-cosmic overflow-hidden">
            <div className="divide-y divide-slate-200 dark:divide-slate-800">
              <RoadmapRow quarter="Q2 2026" status="En cours" items={['BIRDY — Mobile companion (lecture stock + scan)', 'FEEDORA — module Bovins (vaches laitières)', 'Sauvegardes cloud chiffrées Ed25519']} />
              <RoadmapRow quarter="Q3 2026" status="Planifié" items={['Novar Pay — passerelle Mobile Money unifiée', 'BIRDY — synchronisation multi-magasins', 'API publique BIRDY v1']} />
              <RoadmapRow quarter="Q4 2026" status="Planifié" items={['Novar Wallet — wallet marchand B2B', 'FEEDORA — analytics performance lots', 'Intégration banques guinéennes']} />
              <RoadmapRow quarter="2027" status="Exploration" items={['Novar Lend — facilité de crédit court terme PME', 'BIRDY analytics avancées', 'Marketplace plugins fintech']} />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-novar-cosmic">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <CtaBanner
            title="Une idée de logiciel à concrétiser ?"
            description="Nous transformons les idées en outils performants. Parlons-en."
            primaryHref="/contact"
            secondaryHref="/services/sur-mesure"
            secondaryLabel="Voir nos services"
          />
        </div>
      </section>
    </>
  );
}

function RoadmapRow({ quarter, status, items }: { quarter: string; status: string; items: string[] }) {
  return (
    <div className="grid grid-cols-[120px_1fr] sm:grid-cols-[160px_120px_1fr] gap-4 px-6 py-5">
      <div className="font-display font-semibold text-slate-900 dark:text-white">{quarter}</div>
      <div className="hidden sm:block">
        <span className="rounded-full bg-novar-cyan/10 px-2 py-0.5 text-xs font-medium text-novar-cyan">
          {status}
        </span>
      </div>
      <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300">
        {items.map((it) => <li key={it}>· {it}</li>)}
      </ul>
    </div>
  );
}
