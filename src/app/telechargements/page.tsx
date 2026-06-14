import type { Metadata } from 'next';
import { DownloadsView } from '@/components/MarketingPages';

export const metadata: Metadata = {
  title: 'Télécharger BIRDY',
  description: 'Téléchargez gratuitement la dernière version publiée de BIRDY.',
  alternates: { canonical: '/telechargements', languages: { 'fr-GN': '/telechargements', en: '/en/downloads' } },
};

export default function DownloadsPage() {
  return <DownloadsView locale="fr" />;
}
