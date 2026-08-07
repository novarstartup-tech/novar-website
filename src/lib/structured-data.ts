import { SITE } from '@/lib/site';

/**
 * Données structurées NOVAR — schema.org
 *
 * Montage : <JsonLd data={organizationLd()} /> dans le layout racine,
 * puis la ou les entrées spécifiques dans chaque page.
 * Ne jamais dupliquer @id : c'est lui qui relie le graphe entre pages.
 */

const ORG_ID = `${SITE.url}/#organization`;
const SITE_ID = `${SITE.url}/#website`;

export function organizationLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': ORG_ID,
    name: SITE.name,
    legalName: SITE.legalName,
    alternateName: 'NOVAR SaaS Studio',
    url: SITE.url,
    logo: { '@type': 'ImageObject', url: `${SITE.url}/logos/novar.png` },
    description: SITE.description,
    slogan: 'Engineering African Innovation',
    email: SITE.email,
    founder: { '@type': 'Person', name: SITE.founder },
    address: {
      '@type': 'PostalAddress',
      addressLocality: SITE.city,
      addressCountry: 'GN',
    },
    areaServed: [
      { '@type': 'Country', name: 'Guinée' },
      { '@type': 'Country', name: 'Sénégal' },
      { '@type': 'Country', name: "Côte d'Ivoire" },
      { '@type': 'Country', name: 'Mali' },
      { '@type': 'Country', name: 'Bénin' },
      { '@type': 'Country', name: 'Cameroun' },
    ],
    knowsAbout: [
      'SYSCOHADA', 'comptabilité OHADA', 'ERP', 'facturation', 'logiciel de caisse',
      'gestion de stock', 'formulation alimentaire avicole', 'automatisation',
    ],
    knowsLanguage: ['fr', 'en'],
    contactPoint: [{
      '@type': 'ContactPoint',
      contactType: 'customer support',
      email: SITE.email,
      telephone: SITE.whatsapp,
      availableLanguage: ['French', 'English'],
      areaServed: ['GN', 'SN', 'CI', 'ML', 'BJ', 'CM'],
    }],
    sameAs: [SITE.linkedin, SITE.facebook],
  };
}

export function webSiteLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': SITE_ID,
    url: SITE.url,
    name: SITE.name,
    description: SITE.description,
    inLanguage: 'fr',
    publisher: { '@id': ORG_ID },
    potentialAction: {
      '@type': 'SearchAction',
      target: { '@type': 'EntryPoint', urlTemplate: `${SITE.url}/docs?q={search_term_string}` },
      'query-input': 'required name=search_term_string',
    },
  };
}

/** BIRDY — application gratuite : SoftwareApplication + Offer à 0. */
export function birdyLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    '@id': `${SITE.url}/produits/birdy-erp#software`,
    name: 'BIRDY',
    alternateName: 'BIRDY ERP',
    applicationCategory: 'BusinessApplication',
    applicationSubCategory: 'Accounting & ERP software',
    operatingSystem: 'Windows 10, Windows 11, macOS 12+, Linux',
    softwareVersion: '26.0.5',
    datePublished: '2026-07-12',
    inLanguage: 'fr',
    url: `${SITE.url}/produits/birdy-erp`,
    downloadUrl: `${SITE.url}/telechargements`,
    installUrl: `${SITE.url}/telechargements`,
    publisher: { '@id': ORG_ID },
    author: { '@id': ORG_ID },
    description:
      "BIRDY est un logiciel ERP gratuit de gestion commerciale, facturation, caisse, stock, paie et comptabilité OHADA / SYSCOHADA pour les PME de l'espace OHADA. Application desktop fonctionnant hors ligne.",
    featureList: [
      'Facturation et devis conformes OHADA',
      'Comptabilité SYSCOHADA révisé',
      'Export FEC et liasse fiscale',
      'TAFIRE',
      'Gestion de stock multi-dépôts',
      'Achats et fournisseurs',
      'Caisse et point de vente',
      'Paie, CNSS et IRPP',
      'Multi-devises GNF, XOF, XAF, EUR, USD',
      'Fonctionnement hors ligne',
    ],
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'XOF',
      availability: 'https://schema.org/InStock',
      url: `${SITE.url}/telechargements`,
      category: 'free',
    },
    isAccessibleForFree: true,
  };
}

export function feedoraLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    '@id': `${SITE.url}/produits/feedora#software`,
    name: 'FEEDORA',
    applicationCategory: 'BusinessApplication',
    browserRequirements: 'Navigateur web moderne',
    inLanguage: 'fr',
    url: `${SITE.url}/produits/feedora`,
    publisher: { '@id': ORG_ID },
    description:
      "FEEDORA est une application web gratuite de formulation alimentaire pour fermes avicoles : composer et comparer des formules, suivre le coût au kilo et à la tonne.",
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'XOF', availability: 'https://schema.org/InStock' },
    isAccessibleForFree: true,
  };
}

/** Chaque Q/R doit reprendre mot pour mot le texte visible de la page. */
export function faqLd(items: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  };
}

export function breadcrumbLd(trail: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((step, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: step.name,
      item: `${SITE.url}${step.path}`,
    })),
  };
}

/** Page Téléchargements : les étapes d'installation en HowTo. */
export function installHowToLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'Installer BIRDY sur votre poste',
    description: "Installer le logiciel de gestion et comptabilité OHADA BIRDY sur Windows, macOS ou Linux.",
    totalTime: 'PT5M',
    estimatedCost: { '@type': 'MonetaryAmount', currency: 'XOF', value: '0' },
    step: [
      { '@type': 'HowToStep', position: 1, name: 'Télécharger', text: "Téléchargez le paquet correspondant à votre système depuis la page Téléchargements.", url: `${SITE.url}/telechargements` },
      { '@type': 'HowToStep', position: 2, name: 'Installer', text: "Lancez l'installeur et acceptez les autorisations demandées par le système." },
      { '@type': 'HowToStep', position: 3, name: 'Créer la société', text: 'Créez votre société : nom, devise, RCCM et identifiant fiscal.' },
      { '@type': 'HowToStep', position: 4, name: 'Paramétrer la comptabilité', text: 'Choisissez le plan comptable SYSCOHADA et le taux de TVA de votre pays.' },
      { '@type': 'HowToStep', position: 5, name: 'Créer un utilisateur', text: 'Créez votre premier utilisateur et activez la sauvegarde locale automatique.' },
    ],
  };
}

export function articleLd(post: { title: string; description: string; slug: string; date: string; updated?: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    inLanguage: 'fr',
    datePublished: post.date,
    dateModified: post.updated ?? post.date,
    author: { '@id': ORG_ID },
    publisher: { '@id': ORG_ID },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE.url}/blog/${post.slug}` },
  };
}

export function techArticleLd(doc: { title: string; description: string; slug: string; updated: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: doc.title,
    description: doc.description,
    inLanguage: 'fr',
    dateModified: doc.updated,
    author: { '@id': ORG_ID },
    publisher: { '@id': ORG_ID },
    proficiencyLevel: 'Beginner',
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE.url}/docs/${doc.slug}` },
  };
}
