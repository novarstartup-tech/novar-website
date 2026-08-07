import type { Metadata } from 'next';
import { ServiceDetail } from '@/components/MarketingPages';
import { ServiceJsonLd } from '@/components/JsonLd';
import { SITE } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Logiciel, application & site web sur mesure — Afrique / OHADA',
  description:
    'Vous avez besoin d’un logiciel, d’une application ou d’un site web sur mesure pour votre entreprise en Afrique ? NOVAR, studio logiciel à Conakry (Guinée), conçoit des applications métier, plateformes et automatisations pour les PME et organisations de l’espace OHADA.',
  keywords: [
    'logiciel sur mesure Afrique',
    'développement application sur mesure OHADA',
    'créer un logiciel pour mon entreprise',
    'agence développement web Guinée',
    'application métier PME africaine',
    'digitaliser mon entreprise',
    'développeur logiciel Conakry',
  ],
  alternates: { canonical: '/services/sur-mesure', languages: { 'fr-GN': '/services/sur-mesure', en: '/en/services/custom-software' } },
};

export default function CustomSoftwarePage() {
  return (
    <>
      <ServiceJsonLd
        name="Solutions logicielles sur mesure"
        description="NOVAR conçoit des logiciels, applications et sites web sur mesure pour les PME et organisations de l’espace OHADA : applications métier (web et desktop), plateformes, automatisation de processus et accompagnement."
        url={`${SITE.url}/services/sur-mesure`}
        serviceType="Développement de logiciels, d’applications et de sites web sur mesure"
        areaServed={['Guinée', 'Sénégal', "Côte d'Ivoire", 'Mali', 'Bénin', 'Burkina Faso', 'Togo', 'Niger', 'Cameroun', 'Gabon']}
        catalog={[
          'Applications métier sur mesure (web et desktop)',
          'Sites web, portails et plateformes',
          'Automatisation de processus et digitalisation',
          'Intégrations, tableaux de bord et reprise de données',
          'Conseil, formation et accompagnement technique',
        ]}
      />
      <ServiceDetail locale="fr" id="custom" />
    </>
  );
}
