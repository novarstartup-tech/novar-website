import type { Metadata } from 'next';
import { ProductDetail } from '@/components/MarketingPages';

export const metadata: Metadata = {
  title: 'BIRDY — ERP & gestion OHADA',
  description: 'BIRDY est un ERP desktop gratuit conçu par NOVAR pour les PME de l’espace OHADA.',
  alternates: { canonical: '/produits/birdy-erp', languages: { 'fr-GN': '/produits/birdy-erp', en: '/en/products/birdy' } },
};

export default function BirdyPage() {
  return <ProductDetail locale="fr" id="birdy" />;
}
