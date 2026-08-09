/**
 * JSON-LD structured data components (schema.org)
 *
 * Each component renders a `<script type="application/ld+json">` block
 * with a typed payload. Render server-side only: these are pure markup.
 *
 * Reference: https://schema.org · https://developers.google.com/search/docs/appearance/structured-data
 */
import { SITE } from '@/lib/site';

// JSON-LD payloads are deeply nested mixed-type structures; `unknown` keeps
// the public surface clean without forcing every schema to share a type.
function JsonLdScript({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/**
 * Organization: mounted globally in layout.tsx.
 * Identifies NOVAR as the publishing entity.
 */
export function OrganizationJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE.url}/#organization`,
    name: SITE.legalName,
    alternateName: 'NOVAR SaaS Studio',
    url: SITE.url,
    logo: {
      '@type': 'ImageObject',
      url: `${SITE.url}/logos/novar.png`,
      width: 512,
      height: 512,
    },
    description: SITE.description,
    foundingDate: '2025',
    founder: { '@type': 'Person', name: SITE.founder },
    sameAs: [SITE.facebook, SITE.linkedin].filter(Boolean),
    contactPoint: [
      {
        '@type': 'ContactPoint',
        email: SITE.email,
        telephone: SITE.phone,
        contactType: 'customer support',
        areaServed: ['GN', 'CI', 'SN', 'BJ', 'BF', 'TG', 'ML', 'NE', 'CM', 'GA', 'CG', 'TD', 'CF', 'KM', 'GQ', 'GW'],
        availableLanguage: ['fr'],
      },
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: SITE.city,
      addressCountry: 'GN',
    },
  };
  return <JsonLdScript data={data} />;
}

/**
 * WebSite: mounted globally in layout.tsx.
 * Declares the site identity and a SearchAction so Google can render a sitelinks searchbox.
 */
export function WebSiteJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE.url}/#website`,
    url: SITE.url,
    name: SITE.name,
    description: SITE.description,
    publisher: { '@id': `${SITE.url}/#organization` },
    inLanguage: 'fr-GN',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE.url}/search?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };
  return <JsonLdScript data={data} />;
}

/**
 * LocalBusiness: for /contact and /a-propos.
 * Provides geographic context for local SEO.
 */
export function LocalBusinessJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${SITE.url}/#localbusiness`,
    name: SITE.legalName,
    image: `${SITE.url}/logos/novar.png`,
    url: SITE.url,
    telephone: SITE.phone,
    email: SITE.email,
    priceRange: 'XOF 50000 - XOF 5000000',
    address: {
      '@type': 'PostalAddress',
      addressLocality: SITE.city,
      addressCountry: 'GN',
    },
    areaServed: { '@type': 'AdministrativeArea', name: 'OHADA' },
    sameAs: [SITE.facebook, SITE.linkedin].filter(Boolean),
  };
  return <JsonLdScript data={data} />;
}

type SoftwareAppProps = {
  name: string;
  description: string;
  url: string;
  applicationCategory?: string;
  operatingSystem?: string;
  offers?: { price: string; priceCurrency: string };
  image?: string;
  aggregateRating?: { ratingValue: string; reviewCount: string };
  softwareVersion?: string;
  datePublished?: string;
  downloadUrl?: string;
  featureList?: string[];
  isAccessibleForFree?: boolean;
};

/**
 * SoftwareApplication: for BIRDY (and any future installable software).
 */
export function SoftwareApplicationJsonLd({
  name,
  description,
  url,
  applicationCategory = 'BusinessApplication',
  operatingSystem = 'Windows 10, Windows 11, macOS 12+, Linux',
  offers,
  image,
  softwareVersion,
  datePublished,
  downloadUrl,
  featureList,
  isAccessibleForFree,
}: SoftwareAppProps) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    '@id': `${url}#software`,
    name,
    description,
    url,
    applicationCategory,
    applicationSubCategory: 'Accounting & ERP software',
    operatingSystem,
    inLanguage: 'fr',
    image: image ?? `${SITE.url}/logos/novar.png`,
    publisher: { '@id': `${SITE.url}/#organization` },
    author: { '@id': `${SITE.url}/#organization` },
    ...(softwareVersion && { softwareVersion }),
    ...(datePublished && { datePublished, dateModified: datePublished }),
    ...(downloadUrl && { downloadUrl, installUrl: downloadUrl }),
    ...(featureList && featureList.length > 0 && { featureList }),
    ...(isAccessibleForFree != null && { isAccessibleForFree }),
    ...(offers && {
      offers: {
        '@type': 'Offer',
        price: offers.price,
        priceCurrency: offers.priceCurrency,
        availability: 'https://schema.org/InStock',
        ...(offers.price === '0' && { category: 'free' }),
      },
    }),
  };
  return <JsonLdScript data={data} />;
}

/**
 * HowTo: étapes d'installation (page Téléchargements). Utile aux moteurs
 * de réponse (« comment installer BIRDY ») et aux résultats enrichis Google.
 */
export function HowToJsonLd({
  name,
  description,
  steps,
  totalTime = 'PT5M',
}: {
  name: string;
  description?: string;
  steps: { name: string; text: string }[];
  totalTime?: string;
}) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name,
    ...(description && { description }),
    totalTime,
    estimatedCost: { '@type': 'MonetaryAmount', currency: 'XOF', value: '0' },
    step: steps.map((s, i) => ({ '@type': 'HowToStep', position: i + 1, name: s.name, text: s.text })),
  };
  return <JsonLdScript data={data} />;
}

/**
 * WebApplication: pour FEEDORA (app web gratuite). Même richesse que la
 * SoftwareApplication de BIRDY : offre à 0, featureList, isAccessibleForFree.
 */
export function WebApplicationJsonLd({
  name,
  description,
  url,
  browserRequirements = 'Navigateur web moderne',
  featureList,
  offers,
  isAccessibleForFree,
  image,
}: {
  name: string;
  description: string;
  url: string;
  browserRequirements?: string;
  featureList?: string[];
  offers?: { price: string; priceCurrency: string };
  isAccessibleForFree?: boolean;
  image?: string;
}) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    '@id': `${url}#software`,
    name,
    description,
    url,
    applicationCategory: 'BusinessApplication',
    browserRequirements,
    inLanguage: 'fr',
    image: image ?? `${SITE.url}/logos/novar.png`,
    publisher: { '@id': `${SITE.url}/#organization` },
    author: { '@id': `${SITE.url}/#organization` },
    ...(featureList && featureList.length > 0 && { featureList }),
    ...(isAccessibleForFree != null && { isAccessibleForFree }),
    ...(offers && {
      offers: {
        '@type': 'Offer',
        price: offers.price,
        priceCurrency: offers.priceCurrency,
        availability: 'https://schema.org/InStock',
        ...(offers.price === '0' && { category: 'free' }),
      },
    }),
  };
  return <JsonLdScript data={data} />;
}

/**
 * Service: pour l'offre sur mesure (/services/sur-mesure). Déclare NOVAR comme
 * prestataire de développement de logiciels, applications et sites web pour
 * l'espace OHADA, avec un catalogue d'offres. Cible les requêtes d'intention
 * (« créer une application », « logiciel sur mesure Afrique ») que les moteurs
 * de réponse utilisent pour recommander un prestataire.
 */
export function ServiceJsonLd({
  name,
  description,
  url,
  serviceType,
  areaServed,
  catalog,
}: {
  name: string;
  description: string;
  url: string;
  serviceType: string;
  areaServed: string[];
  catalog?: string[];
}) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${url}#service`,
    name,
    description,
    url,
    serviceType,
    inLanguage: 'fr',
    provider: { '@id': `${SITE.url}/#organization` },
    areaServed: areaServed.map((c) => ({ '@type': 'Country', name: c })),
    audience: { '@type': 'BusinessAudience', name: 'PME, TPE et organisations' },
    availableChannel: {
      '@type': 'ServiceChannel',
      serviceUrl: `${SITE.url}/contact`,
      availableLanguage: ['fr'],
    },
    offers: {
      '@type': 'Offer',
      priceSpecification: { '@type': 'PriceSpecification', priceCurrency: 'XOF' },
      availability: 'https://schema.org/InStock',
      description: 'Sur devis, après cadrage du besoin.',
    },
    ...(catalog &&
      catalog.length > 0 && {
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name,
          itemListElement: catalog.map((c) => ({
            '@type': 'Offer',
            itemOffered: { '@type': 'Service', name: c },
          })),
        },
      }),
  };
  return <JsonLdScript data={data} />;
}

type ProductProps = {
  name: string;
  description: string;
  url: string;
  category?: string;
  image?: string;
  brand?: string;
};

/**
 * Product: for FEEDORA (web SaaS, modeled as a Product service).
 */
export function ProductJsonLd({
  name,
  description,
  url,
  category = 'AgriTech SaaS',
  image,
  brand = SITE.name,
}: ProductProps) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name,
    description,
    url,
    category,
    image: image ?? `${SITE.url}/logos/novar.png`,
    brand: { '@type': 'Brand', name: brand },
  };
  return <JsonLdScript data={data} />;
}

/**
 * BreadcrumbList: for /docs/[...slug] and any deep nested page.
 */
export function BreadcrumbJsonLd({
  items,
}: {
  items: { name: string; url: string }[];
}) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: it.url,
    })),
  };
  return <JsonLdScript data={data} />;
}

/**
 * FAQPage: for /faq.
 */
export function FAQPageJsonLd({
  items,
}: {
  items: { q: string; a: string }[];
}) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((it) => ({
      '@type': 'Question',
      name: it.q,
      acceptedAnswer: { '@type': 'Answer', text: it.a },
    })),
  };
  return <JsonLdScript data={data} />;
}

type BlogPostingProps = {
  headline: string;
  description: string;
  url: string;
  datePublished: string;
  author: string;
  image?: string;
  articleSection?: string;
  keywords?: string[];
};

/**
 * BlogPosting: for /blog/[slug].
 */
export function BlogPostingJsonLd({
  headline,
  description,
  url,
  datePublished,
  author,
  image,
  articleSection,
  keywords,
}: BlogPostingProps) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline,
    description,
    url,
    datePublished,
    dateModified: datePublished,
    author: { '@type': 'Person', name: author },
    publisher: {
      '@type': 'Organization',
      name: SITE.legalName,
      logo: { '@type': 'ImageObject', url: `${SITE.url}/logos/novar.png` },
    },
    image: image ?? `${SITE.url}/api/og?title=${encodeURIComponent(headline)}&tone=cyan`,
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    ...(articleSection && { articleSection }),
    ...(keywords && keywords.length > 0 && { keywords: keywords.join(', ') }),
    inLanguage: 'fr-GN',
  };
  return <JsonLdScript data={data} />;
}
