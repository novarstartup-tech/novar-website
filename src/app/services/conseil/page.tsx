import { GraduationCap, ClipboardCheck, Layers, Users } from 'lucide-react';
import { FeatureCard } from '@/components/FeatureCard';
import { CtaBanner } from '@/components/CtaBanner';

export const metadata = {
  title: 'Conseil & accompagnement',
  description: 'Audit technique, choix de stack, architecture, formation. NOVAR vous aide à prendre les bonnes décisions technologiques.',
};

export default function ConseilPage() {
  return (
    <>
      <section className="bg-novar-cosmic py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-sm font-semibold text-novar-cyan uppercase tracking-wider">Services</span>
          <h1 className="mt-2 font-display text-4xl sm:text-5xl font-bold text-white">Conseil & accompagnement</h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-300">
            Vous avez un projet technologique mais vous ne savez pas par où commencer ? Nous vous aidons
            à clarifier vos besoins, choisir les bonnes briques et former vos équipes.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-novar-cosmic">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2">
            <FeatureCard
              icon={ClipboardCheck}
              title="Audit technique"
              description="Évaluation de votre infrastructure existante, identification des risques, recommandations priorisées. Rapport livrable sous 2 semaines."
            />
            <FeatureCard
              icon={Layers}
              title="Choix d'architecture"
              description="Sélection des technologies adaptées à votre métier, dimensionnement, schéma de déploiement, plan de migration."
            />
            <FeatureCard
              icon={GraduationCap}
              title="Formation des équipes"
              description="Sessions de formation pour vos développeurs, comptables, gestionnaires. En présentiel à Conakry ou en visio."
            />
            <FeatureCard
              icon={Users}
              title="Accompagnement DSI"
              description="Présence régulière comme conseiller externe : revue de projets, priorisation, recrutement, suivi prestataires."
            />
          </div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-novar-cosmic">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <CtaBanner
            title="Discutons de vos enjeux"
            description="Premier échange gratuit pour comprendre votre situation et voir si nous pouvons vous aider."
            primaryHref="/contact"
          />
        </div>
      </section>
    </>
  );
}
