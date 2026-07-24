import type { Metadata } from 'next';
import { StudioHome } from '@/components/StudioHome';

export const metadata: Metadata = {
  title: {
    absolute:
      'BIRDY par NOVAR — Logiciel de gestion commerciale & comptabilité OHADA GRATUIT | Facturation, Caisse, Stock',
  },
  description:
    'BIRDY : logiciel de gestion commerciale, facturation, caisse et comptabilité OHADA/SYSCOHADA 100% GRATUIT pour les PME de Guinée, du Sénégal et de la zone OHADA. Compatible Wave, Orange Money, MTN. FCFA & GNF. Édité par NOVAR.',
  alternates: {
    canonical: '/',
    languages: { 'fr-GN': '/', en: '/en', 'x-default': '/' },
  },
};

export default function HomePage() {
  return <StudioHome locale="fr" />;
}
