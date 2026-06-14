import type { Metadata } from 'next';
import { ServiceDetail } from '@/components/MarketingPages';

export const metadata: Metadata = {
  title: 'Conseil et accompagnement',
  description: 'NOVAR accompagne les PME et organisations dans le cadrage, l’architecture et l’adoption de leurs projets numériques.',
  alternates: { canonical: '/services/conseil', languages: { 'fr-GN': '/services/conseil', en: '/en/services/advisory' } },
};

export default function AdvisoryPage() {
  return <ServiceDetail locale="fr" id="advisory" />;
}
