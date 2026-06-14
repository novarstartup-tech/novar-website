import type { Metadata } from 'next';
import { SecurityView } from '@/components/MarketingPages';

export const metadata: Metadata = {
  title: 'Sécurité',
  description: 'Principes de sécurité appliqués au site public NOVAR.',
  alternates: { canonical: '/securite', languages: { 'fr-GN': '/securite', en: '/en/security' } },
};

export default function SecurityPage() {
  return <SecurityView locale="fr" />;
}
