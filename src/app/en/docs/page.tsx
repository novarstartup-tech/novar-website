import { ResourcesView } from '@/components/MarketingPages';
export const metadata = { title: 'Documentation: BIRDY & FEEDORA', description: 'Official documentation for BIRDY, the free OHADA ERP and accounting software by NOVAR, and FEEDORA: getting started, modules, OHADA accounting, payroll and security.', alternates: { canonical: '/en/docs', languages: { 'fr-GN': '/docs', en: '/en/docs' } } };
export default function Page() { return <ResourcesView locale="en" mode="guides" />; }
