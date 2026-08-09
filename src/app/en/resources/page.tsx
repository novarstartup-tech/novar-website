import { ResourcesView } from '@/components/MarketingPages';
export const metadata = { title: 'Resources: docs, tutorials & blog', description: 'NOVAR resources: documentation, tutorials and articles on BIRDY, OHADA accounting and running an SME across the OHADA region.', alternates: { canonical: '/en/resources' } };
export default function Page() { return <ResourcesView locale="en" />; }
