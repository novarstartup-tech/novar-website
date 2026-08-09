import { ProductDetail } from '@/components/MarketingPages';
export const metadata = { title: 'FEEDORA: Poultry feed formulation', alternates: { canonical: '/en/products/feedora', languages: { 'fr-GN': '/produits/feedora', en: '/en/products/feedora' } } };
export default function Page() { return <ProductDetail locale="en" id="feedora" />; }
