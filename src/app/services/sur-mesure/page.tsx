import type { Metadata } from 'next';
import { ServiceDetail } from '@/components/MarketingPages';

export const metadata: Metadata = {
  title: 'Solutions logicielles sur mesure',
  description: 'NOVAR conçoit des logiciels personnalisés pour les PME et organisations.',
  alternates: { canonical: '/services/sur-mesure', languages: { 'fr-GN': '/services/sur-mesure', en: '/en/services/custom-software' } },
};

export default function CustomSoftwarePage() {
  return <ServiceDetail locale="fr" id="custom" />;
}
