import type { Metadata } from 'next';
import { LegalView } from '@/components/MarketingPages';

export const metadata: Metadata = {
  title: 'Conditions d’utilisation et de prestation',
  alternates: { canonical: '/legal/cgv', languages: { 'fr-GN': '/legal/cgv', en: '/en/legal/terms' } },
};

export default function TermsPage() {
  return <LegalView locale="fr" kind="terms" />;
}
