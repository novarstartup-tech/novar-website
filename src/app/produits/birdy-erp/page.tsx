import type { Metadata } from 'next';
import { ProductDetail } from '@/components/MarketingPages';
import { SoftwareApplicationJsonLd } from '@/components/JsonLd';
import { RelatedSolutions } from '@/components/SolutionSections';
import { SITE } from '@/lib/site';

export const metadata: Metadata = {
  title: 'BIRDY — ERP & gestion commerciale OHADA gratuit',
  description:
    'BIRDY : logiciel de gestion commerciale, facturation, caisse et comptabilité OHADA/SYSCOHADA 100% gratuit pour les PME de Guinée et de la zone OHADA. Wave, Orange Money, MTN. FCFA & GNF.',
  alternates: {
    canonical: '/produits/birdy-erp',
    languages: {
      'fr-GN': '/produits/birdy-erp',
      en: '/en/products/birdy',
      'x-default': '/produits/birdy-erp',
    },
  },
};

export default function BirdyPage() {
  return (
    <>
      <SoftwareApplicationJsonLd
        name="BIRDY"
        description="ERP et logiciel de gestion commerciale, facturation, caisse et comptabilité OHADA/SYSCOHADA gratuit pour les PME africaines, édité par NOVAR."
        url={`${SITE.url}/produits/birdy-erp`}
        applicationCategory="BusinessApplication"
        operatingSystem="Windows, macOS, Linux"
        offers={{ price: '0', priceCurrency: 'XOF' }}
      />
      <ProductDetail locale="fr" id="birdy" />
      <RelatedSolutions
        heading="BIRDY, module par module"
        intro="Découvrez en détail comment BIRDY couvre chaque besoin de gestion — facturation, caisse, stock et comptabilité OHADA — et son adaptation au marché guinéen."
      />
    </>
  );
}
