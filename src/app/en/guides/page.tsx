import { ResourcesView } from '@/components/MarketingPages';
export const metadata = { title: 'Guides', alternates: { canonical: '/en/guides', languages: { 'fr-GN': '/tutoriels', en: '/en/guides' } } };
export default function Page() { return <ResourcesView locale="en" mode="guides" />; }
