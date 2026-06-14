import { SecurityView } from '@/components/MarketingPages';
export const metadata = { title: 'Security', alternates: { canonical: '/en/security', languages: { 'fr-GN': '/securite', en: '/en/security' } } };
export default function Page() { return <SecurityView locale="en" />; }
