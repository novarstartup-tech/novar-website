import type { Metadata } from 'next';
import { ProductDetail } from '@/components/MarketingPages';

export const metadata: Metadata = {
  title: 'FEEDORA — Formulation alimentaire avicole',
  description: 'FEEDORA est une application web gratuite de formulation alimentaire avicole conçue par NOVAR.',
  alternates: { canonical: '/produits/feedora', languages: { 'fr-GN': '/produits/feedora', en: '/en/products/feedora' } },
};

export default function FeedoraPage() {
  return <ProductDetail locale="fr" id="feedora" />;
}
