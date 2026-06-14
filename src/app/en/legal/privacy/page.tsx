import { LegalView } from '@/components/MarketingPages';
export const metadata = { title: 'Privacy policy', alternates: { canonical: '/en/legal/privacy', languages: { 'fr-GN': '/legal/privacy', en: '/en/legal/privacy' } } };
export default function Page() { return <LegalView locale="en" kind="privacy" />; }
