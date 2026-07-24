import type { Metadata } from 'next';
import { ProductDetail } from '@/components/MarketingPages';
import { ProductJsonLd } from '@/components/JsonLd';
import { SITE } from '@/lib/site';

export const metadata: Metadata = {
  title: 'FEEDORA — Formulation alimentaire avicole',
  description: 'FEEDORA est une application web gratuite de formulation alimentaire avicole conçue par NOVAR.',
  alternates: { canonical: '/produits/feedora', languages: { 'fr-GN': '/produits/feedora', en: '/en/products/feedora' } },
};

export default function FeedoraPage() {
  return (
    <>
      <ProductJsonLd
        name="FEEDORA"
        description="Application web gratuite de formulation alimentaire pour fermes avicoles, éditée par NOVAR."
        url={`${SITE.url}/produits/feedora`}
      />
      <ProductDetail locale="fr" id="feedora" />
    </>
  );
}
