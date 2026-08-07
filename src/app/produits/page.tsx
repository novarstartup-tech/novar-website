import type { Metadata } from 'next';
import { ProductsOverview } from '@/components/MarketingPages';

export const metadata: Metadata = {
  title: 'Nos produits : BIRDY, FEEDORA & sur-mesure',
  description: 'Découvrez BIRDY, FEEDORA et les solutions sur mesure conçues par le SaaS Studio NOVAR.',
  alternates: { canonical: '/produits', languages: { 'fr-GN': '/produits', en: '/en/solutions' } },
};

export default function ProductsPage() {
  return <ProductsOverview locale="fr" />;
}
