import { ProductsOverview } from '@/components/MarketingPages';
export const metadata = { title: 'Products and solutions', alternates: { canonical: '/en/solutions', languages: { 'fr-GN': '/produits', en: '/en/solutions' } } };
export default function Page() { return <ProductsOverview locale="en" />; }
