import type { MetadataRoute } from 'next';
import { BLOG_POSTS } from '@/lib/blog';
import { flattenDocs } from '@/lib/docs';
import { SITE } from '@/lib/site';

const LOCALIZED_ROUTES = [
  ['', '/en'],
  ['/produits', '/en/solutions'],
  ['/produits/birdy-erp', '/en/products/birdy'],
  ['/produits/feedora', '/en/products/feedora'],
  ['/services/sur-mesure', '/en/services/custom-software'],
  ['/services/conseil', '/en/services/advisory'],
  ['/a-propos', '/en/about'],
  ['/contact', '/en/contact'],
  ['/telechargements', '/en/downloads'],
  ['/tutoriels', '/en/guides'],
  ['/securite', '/en/security'],
  ['/legal/privacy', '/en/legal/privacy'],
  ['/legal/cgv', '/en/legal/terms'],
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const localized = LOCALIZED_ROUTES.flatMap(([fr, en]) => {
    const languages = {
      fr: `${SITE.url}${fr}`,
      'fr-GN': `${SITE.url}${fr}`,
      en: `${SITE.url}${en}`,
      'x-default': `${SITE.url}${fr}`,
    };
    return [fr, en].map((path) => ({
      url: `${SITE.url}${path}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: path === '' || path === '/en' ? 1 : 0.8,
      alternates: { languages },
    }));
  });
  const frenchOnly = [
    '/docs',
    '/blog',
    '/faq',
    ...flattenDocs().map((doc) => `/docs/${doc.slug}`),
    ...BLOG_POSTS.map((post) => `/blog/${post.slug}`),
  ].map((path) => ({
    url: `${SITE.url}${path}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }));
  return [...localized, ...frenchOnly];
}
