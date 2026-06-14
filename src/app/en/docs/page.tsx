import { ResourcesView } from '@/components/MarketingPages';
export const metadata = { title: 'Documentation', alternates: { canonical: '/en/docs', languages: { 'fr-GN': '/docs', en: '/en/docs' } } };
export default function Page() { return <ResourcesView locale="en" mode="guides" />; }
