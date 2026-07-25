export type Locale = 'fr' | 'en';

export type ProductId = 'birdy' | 'feedora';
export type ServiceId = 'custom' | 'advisory';
export const CONTACT_TOPICS = [
  'birdy',
  'feedora',
  'demo',
  'sur-mesure',
  'conseil',
  'support',
  'autre',
] as const;
export type ContactTopic = (typeof CONTACT_TOPICS)[number];

export const LOCALES: Locale[] = ['fr', 'en'];

export const SITE_COPY = {
  fr: {
    studioLabel: 'SaaS Studio africain',
    headline: 'Nous créons les logiciels qui font avancer les entreprises.',
    intro:
      'NOVAR conçoit ses propres produits SaaS et développe des solutions sur mesure pour les PME et organisations qui veulent mieux piloter leurs opérations.',
    productsEyebrow: 'Produits édités par NOVAR',
    productsTitle: 'Deux produits utiles aujourd’hui. D’autres demain.',
    customEyebrow: 'Solutions sur mesure',
    customTitle: 'Votre métier mérite mieux qu’un logiciel générique.',
    customBody:
      'Nous transformons vos processus, contraintes et ambitions en une solution claire, fiable et maintenable.',
    contact: 'Parler à NOVAR',
    discover: 'Découvrir nos solutions',
    access: 'Accéder au produit',
    download: 'Télécharger',
    learnMore: 'En savoir plus',
    free: 'Gratuit',
    available: 'Disponible',
    comingSoon: 'Bientôt disponible',
  },
  en: {
    studioLabel: 'African SaaS Studio',
    headline: 'We build the software that moves businesses forward.',
    intro:
      'NOVAR creates its own SaaS products and builds tailored solutions for SMEs and organizations that want better control of their operations.',
    productsEyebrow: 'Products built by NOVAR',
    productsTitle: 'Two useful products today. More to come.',
    customEyebrow: 'Tailored solutions',
    customTitle: 'Your operations deserve more than generic software.',
    customBody:
      'We turn your processes, constraints and ambitions into a clear, reliable and maintainable solution.',
    contact: 'Talk to NOVAR',
    discover: 'Explore our solutions',
    access: 'Open product',
    download: 'Download',
    learnMore: 'Learn more',
    free: 'Free',
    available: 'Available',
    comingSoon: 'Coming soon',
  },
} as const;

export const PRODUCTS = {
  birdy: {
    id: 'birdy',
    name: 'BIRDY',
    tone: 'cyan',
    href: '/produits/birdy-erp',
    englishHref: '/en/products/birdy',
    accessHref: '/telechargements',
    platforms: ['Windows', 'macOS', 'Linux'],
    status: 'available',
    copy: {
      fr: {
        category: 'ERP & comptabilité OHADA — 100 % gratuit',
        summary:
          'Sortez du cahier et d’Excel. BIRDY réunit vos ventes, votre caisse, vos stocks et votre comptabilité OHADA dans un seul logiciel installé sur votre ordinateur — et qui fonctionne même sans connexion internet stable.',
      },
      en: {
        category: 'OHADA ERP & accounting — 100% free',
        summary:
          'Leave paper books and spreadsheets behind. BIRDY brings your sales, cash, inventory and OHADA accounting together in a single desktop app that works even without a stable internet connection.',
      },
    },
  },
  feedora: {
    id: 'feedora',
    name: 'FEEDORA',
    tone: 'emerald',
    href: '/produits/feedora',
    englishHref: '/en/products/feedora',
    accessHref: 'https://feedora-cyan.vercel.app/',
    platforms: ['Web'],
    status: 'available',
    copy: {
      fr: {
        category: 'Formulation alimentaire avicole',
        summary:
          'Une application web pour construire, comparer et optimiser les formules alimentaires des élevages avicoles.',
      },
      en: {
        category: 'Poultry feed formulation',
        summary:
          'A web application to build, compare and optimize poultry feed formulas.',
      },
    },
  },
} as const;

export const SERVICES = {
  custom: {
    id: 'custom',
    tone: 'amber',
    href: '/services/sur-mesure',
    englishHref: '/en/services/custom-software',
    copy: {
      fr: {
        name: 'Solutions sur mesure',
        summary:
          'Applications métier, automatisations et plateformes conçues autour de vos opérations réelles.',
      },
      en: {
        name: 'Tailored software',
        summary:
          'Business applications, automations and platforms designed around your real operations.',
      },
    },
  },
  advisory: {
    id: 'advisory',
    tone: 'violet',
    href: '/services/conseil',
    englishHref: '/en/services/advisory',
    copy: {
      fr: {
        name: 'Conseil & accompagnement',
        summary:
          'Cadrage, architecture, formation et accompagnement pour faire progresser vos projets numériques.',
      },
      en: {
        name: 'Advisory & enablement',
        summary:
          'Scoping, architecture, training and guidance to move digital projects forward.',
      },
    },
  },
} as const;

// Les liens de téléchargement BIRDY ne sont plus codés en dur ici : ils
// sont résolus automatiquement au build vers la dernière release GitHub
// (cf. src/lib/releases.ts). Seul FEEDORA reste un lien d'accès direct.
export const VERIFIED_LINKS = {
  feedora: PRODUCTS.feedora.accessHref,
} as const;

export function localizeHref(href: string, locale: Locale): string {
  if (locale === 'fr' || href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:')) {
    return href;
  }
  if (href === '/') return '/en';
  return `/en${href}`;
}
