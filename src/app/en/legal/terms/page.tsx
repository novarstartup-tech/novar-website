import { LegalView } from '@/components/MarketingPages';
export const metadata = { title: 'Terms of use and services', alternates: { canonical: '/en/legal/terms', languages: { 'fr-GN': '/legal/cgv', en: '/en/legal/terms' } } };
export default function Page() { return <LegalView locale="en" kind="terms" />; }
