import { GraduationCap, ClipboardCheck, Layers, Users } from 'lucide-react';
import { FeatureCard } from '@/components/FeatureCard';
import { CtaBanner } from '@/components/CtaBanner';
import { PageHero } from '@/components/PageHero';

export const metadata = {
  title: 'Conseil & accompagnement',
  description: 'Audit technique, choix de stack, architecture, formation. NOVAR vous aide à prendre les bonnes décisions technologiques.',
};

export default function ConseilPage() {
  return (
    <>
      <PageHero
        tone="violet"
        eyebrow="Services"
        title="Conseil & accompagnement."
        description="Vous avez un projet technologique mais vous ne savez pas par où commencer ? Nous vous aidons à clarifier vos besoins, choisir les bonnes briques et former vos équipes."
      />

      <section className="bg-white py-14 sm:py-16 md:py-20 lg:py-24">
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

      <section className="bg-white pb-16 sm:pb-20 md:pb-24 lg:pb-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <CtaBanner
            title="Discutons de vos enjeux."
            description="Premier échange gratuit pour comprendre votre situation et voir si nous pouvons vous aider."
            primaryHref="/contact"
          />
        </div>
      </section>
    </>
  );
}
