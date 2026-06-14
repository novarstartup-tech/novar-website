import type { Metadata } from 'next';
import { LegalView } from '@/components/MarketingPages';

export const metadata: Metadata = {
  title: 'Politique de confidentialité',
  alternates: { canonical: '/legal/privacy', languages: { 'fr-GN': '/legal/privacy', en: '/en/legal/privacy' } },
};

export default function PrivacyPage() {
  return <LegalView locale="fr" kind="privacy" />;
}
