import type { Metadata } from 'next';
import { ProductDetail } from '@/components/MarketingPages';
import { SoftwareApplicationJsonLd } from '@/components/JsonLd';
import { SITE } from '@/lib/site';

export const metadata: Metadata = {
  title: 'BIRDY — Free OHADA business management & accounting software',
  description:
    'BIRDY: 100% free business management, invoicing, POS and OHADA/SYSCOHADA accounting software for SMEs in West & Central Africa. Wave, Orange Money, MTN ready. XOF & GNF.',
  alternates: {
    canonical: '/en/products/birdy',
    languages: {
      'fr-GN': '/produits/birdy-erp',
      en: '/en/products/birdy',
      'x-default': '/produits/birdy-erp',
    },
  },
};

export default function Page() {
  return (
    <>
      <SoftwareApplicationJsonLd
        name="BIRDY"
        description="Free ERP and business management, invoicing, POS and OHADA/SYSCOHADA accounting software for African SMEs, published by NOVAR."
        url={`${SITE.url}/en/products/birdy`}
        applicationCategory="BusinessApplication"
        operatingSystem="Windows, macOS, Linux"
        offers={{ price: '0', priceCurrency: 'XOF' }}
      />
      <ProductDetail locale="en" id="birdy" />
    </>
  );
}
