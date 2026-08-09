import type { Metadata } from 'next';
import { StudioHome } from '@/components/StudioHome';

export const metadata: Metadata = {
  title: {
    absolute:
      'BIRDY by NOVAR: Free OHADA business management & accounting software | Invoicing, POS, Stock',
  },
  description:
    'BIRDY: 100% FREE business management, invoicing, POS and OHADA/SYSCOHADA accounting software for SMEs in West & Central Africa. Wave, Orange Money, MTN ready. XOF & GNF.',
  alternates: {
    canonical: '/en',
    languages: { 'fr-GN': '/', en: '/en', 'x-default': '/' },
  },
};

export default function EnglishHomePage() {
  return <StudioHome locale="en" />;
}
