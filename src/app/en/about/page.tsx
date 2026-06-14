import { StudioView } from '@/components/MarketingPages';
export const metadata = { title: 'The studio', alternates: { canonical: '/en/about', languages: { 'fr-GN': '/a-propos', en: '/en/about' } } };
export default function Page() { return <StudioView locale="en" />; }
