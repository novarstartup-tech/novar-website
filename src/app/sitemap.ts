import type { MetadataRoute } from 'next';
import { flattenDocs } from '@/lib/docs';
import { BLOG_POSTS } from '@/lib/blog';
import { SITE } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE.url;
  const staticRoutes = [
    '',
    '/produits',
    '/produits/birdy-erp',
    '/services/sur-mesure',
    '/services/conseil',
    '/tarifs',
    '/telechargements',
    '/tutoriels',
    '/docs',
    '/blog',
    '/compte',
    '/compte/login',
    '/a-propos',
    '/contact',
    '/demo',
    '/faq',
    '/legal/cgv',
    '/legal/privacy',
  ];

  const docRoutes = flattenDocs().map((d) => `/docs/${d.slug}`);
  const blogRoutes = BLOG_POSTS.map((p) => `/blog/${p.slug}`);

  return [...staticRoutes, ...docRoutes, ...blogRoutes].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: path === '' ? 1 : 0.7,
  }));
}
