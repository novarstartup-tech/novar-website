import { Boxes, Wrench, ShoppingCart, Utensils } from 'lucide-react';
import { FeatureCard } from '@/components/FeatureCard';
import { CtaBanner } from '@/components/CtaBanner';

export const metadata = {
  title: 'Produits',
  description: 'Le catalogue NOVAR : BIRDY ERP, solutions sur mesure, et notre roadmap produits.',
};

export default function ProduitsPage() {
  return (
    <>
      <section className="bg-novar-cosmic py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-sm font-semibold text-novar-cyan uppercase tracking-wider">Catalogue</span>
          <h1 className="mt-2 font-display text-4xl sm:text-5xl font-bold text-white">Nos produits</h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-300">
            BIRDY ERP est notre produit phare, disponible aujourd&apos;hui. D&apos;autres logiciels métiers
            arrivent en 2026 — restez informé.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-novar-cosmic">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <FeatureCard
              icon={Boxes}
              title="BIRDY ERP"
              description="Logiciel de gestion intégré : POS, stock, achats, compta OHADA, paie. Disponible aujourd'hui."
              href="/produits/birdy-erp"
              badge="Disponible"
            />
            <FeatureCard
              icon={Wrench}
              title="Solutions sur mesure"
              description="Logiciels métiers développés pour votre entreprise. Cahier des charges, design, dev, déploiement."
              href="/services/sur-mesure"
            />
            <FeatureCard
              icon={ShoppingCart}
              title="Novar Caisse Cloud"
              description="Solution de caisse SaaS pour boutiques et chaînes. Multi-points de vente, multi-utilisateurs."
              badge="Q3 2026"
            />
            <FeatureCard
              icon={Utensils}
              title="Novar Restaurant POS"
              description="POS spécialisé restauration : commandes en salle, cuisine connectée, gestion des tables."
              badge="Q4 2026"
            />
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50 dark:bg-novar-cosmic-2/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-slate-900 dark:text-white mb-8">Roadmap publique</h2>
          <div className="rounded-xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-novar-cosmic overflow-hidden">
            <div className="divide-y divide-slate-200 dark:divide-slate-800">
              <RoadmapRow quarter="Q2 2026" status="En cours" items={['BIRDY ERP — Module RH/Paie complet', 'Liasse fiscale Guinée — DGI 2026', 'Sauvegardes cloud chiffrées Ed25519']} />
              <RoadmapRow quarter="Q3 2026" status="Planifié" items={['Novar Caisse Cloud — bêta privée', 'API publique BIRDY v1', 'SSO Google + Microsoft']} />
              <RoadmapRow quarter="Q4 2026" status="Planifié" items={['Novar Restaurant POS — bêta', 'Application mobile BIRDY Pocket', 'Marketplace de plugins']} />
              <RoadmapRow quarter="2027" status="Exploration" items={['BIRDY analytics avancées (BI)', 'Intégration banques guinéennes', 'Module e-commerce']} />
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
