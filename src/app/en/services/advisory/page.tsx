import { ServiceDetail } from '@/components/MarketingPages';
export const metadata = { title: 'Advisory and enablement', alternates: { canonical: '/en/services/advisory', languages: { 'fr-GN': '/services/conseil', en: '/en/services/advisory' } } };
export default function Page() { return <ServiceDetail locale="en" id="advisory" />; }
