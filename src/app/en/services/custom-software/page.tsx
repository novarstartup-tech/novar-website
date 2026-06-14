import { ServiceDetail } from '@/components/MarketingPages';
export const metadata = { title: 'Tailored software', alternates: { canonical: '/en/services/custom-software', languages: { 'fr-GN': '/services/sur-mesure', en: '/en/services/custom-software' } } };
export default function Page() { return <ServiceDetail locale="en" id="custom" />; }
