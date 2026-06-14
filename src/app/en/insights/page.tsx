import { ResourcesView } from '@/components/MarketingPages';
export const metadata = { title: 'Insights', alternates: { canonical: '/en/insights', languages: { 'fr-GN': '/blog', en: '/en/insights' } } };
export default function Page() { return <ResourcesView locale="en" mode="insights" />; }
