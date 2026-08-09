import type { Metadata } from 'next';
import { ProductDetail } from '@/components/MarketingPages';
import { WebApplicationJsonLd } from '@/components/JsonLd';
import { SITE } from '@/lib/site';

export const metadata: Metadata = {
  title: 'FEEDORA : Formulation alimentaire avicole gratuite',
  description:
    'FEEDORA : application web gratuite de formulation alimentaire pour fermes avicoles (poulet de chair, pondeuse, dinde). Composer et comparer des formules, suivre le coût au kilo et à la tonne. Éditée par NOVAR.',
  alternates: { canonical: '/produits/feedora', languages: { 'fr-GN': '/produits/feedora', en: '/en/products/feedora' } },
};

export default function FeedoraPage() {
  return (
    <>
      <WebApplicationJsonLd
        name="FEEDORA"
        description="Application web gratuite de formulation alimentaire pour fermes avicoles (poulet de chair, pondeuse, dinde), éditée par NOVAR : composer et comparer des formules, suivre le coût au kilo et à la tonne."
        url={`${SITE.url}/produits/feedora`}
        image={`${SITE.url}/products/feedora-formulation.png`}
        isAccessibleForFree
        offers={{ price: '0', priceCurrency: 'XOF' }}
        featureList={[
          'Formulation alimentaire avicole (poulet de chair, pondeuse, dinde)',
          'Composition à partir des ingrédients et contraintes disponibles',
          'Analyse nutritionnelle de la formule',
          'Comparaison des options et des coûts',
          'Suivi du coût au kilo et à la tonne',
          'Sauvegarde et évolution des formules',
          'Accessible en ligne, sans installation',
        ]}
      />
      <ProductDetail locale="fr" id="feedora" />
    </>
  );
}
