import { ServiceDetail } from '@/components/MarketingPages';
export const metadata = { title: 'Advisory and enablement: OHADA software', description: 'NOVAR advisory and enablement for SMEs and organizations across the OHADA region: audit, architecture, training and outsourced tech leadership.', alternates: { canonical: '/en/services/advisory', languages: { 'fr-GN': '/services/conseil', en: '/en/services/advisory' } } };
export default function Page() { return <ServiceDetail locale="en" id="advisory" />; }
