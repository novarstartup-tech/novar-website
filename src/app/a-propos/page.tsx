import type { Metadata } from 'next';
import { StudioView } from '@/components/MarketingPages';

export const metadata: Metadata = {
  title: 'Le studio',
  description: 'NOVAR est un SaaS Studio qui édite BIRDY et FEEDORA et conçoit des solutions personnalisées.',
  alternates: { canonical: '/a-propos', languages: { 'fr-GN': '/a-propos', en: '/en/about' } },
};

export default function AboutPage() {
  return <StudioView locale="fr" />;
}
