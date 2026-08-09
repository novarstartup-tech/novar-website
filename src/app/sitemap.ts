import type { MetadataRoute } from 'next';
import { BLOG_POSTS } from '@/lib/blog';
import { flattenDocs } from '@/lib/docs';
import { SITE } from '@/lib/site';

/**
 * Sitemap NOVAR : inventaire complet des routes.
 *
 * Trois familles :
 *   BILINGUAL  : la route existe en FR et en EN, les deux se déclarent
 *                mutuellement via alternates.languages (réciprocité exigée
 *                par Google : un alternate non réciproque est ignoré).
 *   FR_ONLY    : pas encore de version EN. On n'écrit AUCUN alternate :
 *                annoncer un /en inexistant est pire que ne rien annoncer.
 *   DATED      : routes dont la date de modification vient d'une source
 *                réelle (release, front-matter) et non de la date de build.
 *
 * Règle sur lastModified : ne jamais utiliser new Date() pour du contenu
 * statique. Un site dont toutes les URL changent à chaque déploiement perd
 * sa crédibilité de fraîcheur auprès des moteurs et des moteurs de réponse.
 */

/** Date de publication de la release BIRDY en ligne. */
const BIRDY_RELEASE = new Date('2026-08-04');
/** Dernière révision éditoriale des pages statiques. */
const CONTENT_REVISION = new Date('2026-08-07');

type Priority = 1 | 0.9 | 0.8 | 0.7 | 0.6 | 0.5;

const BILINGUAL: { fr: string; en: string; priority: Priority; lastModified?: Date }[] = [
  { fr: '',                          en: '/en',                            priority: 1 },
  { fr: '/produits',                 en: '/en/solutions',                  priority: 0.8 },
  { fr: '/produits/birdy-erp',       en: '/en/products/birdy',             priority: 0.9, lastModified: BIRDY_RELEASE },
  { fr: '/produits/feedora',         en: '/en/products/feedora',           priority: 0.8 },
  { fr: '/telechargements',          en: '/en/downloads',                  priority: 0.9, lastModified: BIRDY_RELEASE },
  { fr: '/services/sur-mesure',      en: '/en/services/custom-software',   priority: 0.8 },
  { fr: '/services/conseil',         en: '/en/services/advisory',          priority: 0.8 },
  { fr: '/a-propos',                 en: '/en/about',                      priority: 0.7 },
  { fr: '/contact',                  en: '/en/contact',                    priority: 0.8 },
  { fr: '/tutoriels',                en: '/en/guides',                     priority: 0.7 },
  { fr: '/securite',                 en: '/en/security',                   priority: 0.5 },
  { fr: '/legal/privacy',            en: '/en/legal/privacy',              priority: 0.5 },
  { fr: '/legal/cgv',                en: '/en/legal/terms',                priority: 0.5 },
];

/** Pages FR sans équivalent EN publié. Passer une entrée en BILINGUAL le jour où /en existe. */
const FR_ONLY: { path: string; priority: Priority }[] = [
  { path: '/logiciels',                        priority: 0.8 },
  { path: '/logiciels/facturation-ohada',      priority: 0.7 },
  { path: '/logiciels/caisse',                 priority: 0.7 },
  { path: '/logiciels/gestion-de-stock',       priority: 0.7 },
  { path: '/logiciels/comptabilite-ohada',     priority: 0.7 },
  { path: '/logiciels/guinee',                 priority: 0.7 },
  { path: '/logiciels/senegal',                priority: 0.7 },
  { path: '/logiciels/cote-d-ivoire',          priority: 0.7 },
  { path: '/logiciels/mali',                   priority: 0.7 },
  { path: '/logiciels/benin',                  priority: 0.7 },
  { path: '/logiciels/cameroun',               priority: 0.7 },
  { path: '/docs',                             priority: 0.8 },
  { path: '/blog',                             priority: 0.7 },
  { path: '/faq',                              priority: 0.7 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const bilingual = BILINGUAL.flatMap(({ fr, en, priority, lastModified }) => {
    // L'accueil est '' : sans normalisation, <loc> et alternates divergent
    // d'un slash et Search Console signale « pas de hreflang auto-référent ».
    const abs = (p: string) => `${SITE.url}${p === '' ? '/' : p}`;
    const languages = {
      fr: abs(fr),
      'fr-GN': abs(fr),
      en: abs(en),
      'x-default': abs(fr),
    };
    return [fr, en].map((path) => ({
      url: abs(path),
      lastModified: lastModified ?? CONTENT_REVISION,
      changeFrequency: 'monthly' as const,
      priority,
      alternates: { languages },
    }));
  });

  const frOnly = FR_ONLY.map(({ path, priority }) => ({
    url: `${SITE.url}${path}`,
    lastModified: CONTENT_REVISION,
    changeFrequency: 'monthly' as const,
    priority,
  }));

  // `flattenDocs()` renvoie aujourd'hui { slug, title, category } : il n'y a
  // pas encore de date par document. On retombe donc sur la révision globale.
  // Pour dater chaque page réellement (ce qui vaut le détour, la fraîcheur
  // par document pèse dans les citations d'IA), ajouter `updated?: string`
  // au type de `src/lib/docs.ts`, le remplir depuis le front-matter, puis
  // remplacer la ligne ci-dessous par :
  //     lastModified: doc.updated ? new Date(doc.updated) : CONTENT_REVISION,
  const docs = flattenDocs().map((doc) => ({
    url: `${SITE.url}/docs/${doc.slug}`,
    lastModified: CONTENT_REVISION,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  // Même remarque pour `BlogMeta` dans `src/lib/blog.ts` : ni `date` ni
  // `updated` n'y figurent pour l'instant. Une fois `date: string` (et
  // éventuellement `updated?: string`) ajoutés, remplacer par :
  //     lastModified: new Date(post.updated ?? post.date),
  const posts = BLOG_POSTS.map((post) => ({
    url: `${SITE.url}/blog/${post.slug}`,
    lastModified: CONTENT_REVISION,
    changeFrequency: 'yearly' as const,
    priority: 0.6,
  }));

  return [...bilingual, ...frOnly, ...docs, ...posts];
}
