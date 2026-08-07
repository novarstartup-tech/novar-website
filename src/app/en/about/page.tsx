import { StudioView } from '@/components/MarketingPages';
export const metadata = { title: 'The studio — behind BIRDY and FEEDORA', description: 'NOVAR is an African SaaS studio in Conakry, Guinea, building its own products BIRDY and FEEDORA and designing custom software for SMEs and organizations across the OHADA region.', alternates: { canonical: '/en/about', languages: { 'fr-GN': '/a-propos', en: '/en/about' } } };
export default function Page() { return <StudioView locale="en" />; }
