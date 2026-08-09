import type { Metadata } from 'next';
import { StudioView } from '@/components/MarketingPages';
import { LocalBusinessJsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Le studio : qui édite BIRDY et FEEDORA',
  description: 'NOVAR est un SaaS studio à Conakry (Guinée) qui édite ses produits BIRDY et FEEDORA et conçoit des logiciels sur mesure pour les PME et organisations de l’espace OHADA.',
  alternates: { canonical: '/a-propos', languages: { 'fr-GN': '/a-propos', en: '/en/about' } },
};

export default function AboutPage() {
  return (
    <>
      <LocalBusinessJsonLd />
      <StudioView locale="fr" />
    </>
  );
}
