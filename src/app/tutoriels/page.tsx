import type { Metadata } from 'next';
import { ResourcesView } from '@/components/MarketingPages';

export const metadata: Metadata = {
  title: 'Guides',
  description: 'Guides publics et documentation réellement disponibles pour les produits NOVAR.',
  alternates: { canonical: '/tutoriels', languages: { 'fr-GN': '/tutoriels', en: '/en/guides' } },
};

export default function GuidesPage() {
  return <ResourcesView locale="fr" mode="guides" />;
}
