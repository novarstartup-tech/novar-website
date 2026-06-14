import { DownloadsView } from '@/components/MarketingPages';
export const metadata = { title: 'Download BIRDY', alternates: { canonical: '/en/downloads', languages: { 'fr-GN': '/telechargements', en: '/en/downloads' } } };
export default function Page() { return <DownloadsView locale="en" />; }
