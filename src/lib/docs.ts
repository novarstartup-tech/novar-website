export type DocCategory = {
  slug: string;
  title: string;
  pages: { slug: string; title: string; description?: string }[];
};

export const DOCS_TREE: DocCategory[] = [
  {
    slug: 'demarrage',
    title: 'Démarrage',
    pages: [
      { slug: 'installation', title: 'Installation', description: 'Installer BIRDY sur Windows' },
      { slug: 'premiere-utilisation', title: 'Première utilisation', description: 'Créer votre société' },
      { slug: 'onboarding', title: 'Parcours d’onboarding', description: 'Les 7 premières étapes' },
      { slug: 'interface', title: 'Tour de l’interface', description: 'Comprendre les écrans clés' },
    ],
  },
  {
    slug: 'modules',
    title: 'Modules métier',
    pages: [
      { slug: 'articles', title: 'Articles & catégories' },
      { slug: 'pos', title: 'POS / Ventes' },
      { slug: 'stock', title: 'Gestion du stock' },
      { slug: 'caisse', title: 'Caisse & encaissements' },
      { slug: 'tiers', title: 'Tiers (clients & fournisseurs)' },
      { slug: 'achats', title: 'Achats & approvisionnement' },
    ],
  },
  {
    slug: 'ohada',
    title: 'Comptabilité OHADA',
    pages: [
      { slug: 'plan-comptable', title: 'Plan comptable SYSCOHADA' },
      { slug: 'ecritures-manuelles', title: 'Écritures manuelles' },
      { slug: 'liasse-fiscale', title: 'Liasse fiscale' },
      { slug: 'tafire', title: 'TAFIRE' },
      { slug: 'fec-export', title: 'Export FEC' },
      { slug: 'tva', title: 'Déclaration de TVA' },
      { slug: 'lettrage', title: 'Lettrage' },
    ],
  },
  {
    slug: 'rh-paie',
    title: 'RH & Paie',
    pages: [
      { slug: 'employes', title: 'Gestion des employés' },
      { slug: 'contrats', title: 'Contrats & avenants' },
      { slug: 'paie-mensuelle', title: 'Paie mensuelle' },
      { slug: 'irpp-cnss', title: 'IRPP & CNSS Guinée' },
      { slug: 'conges', title: 'Congés & absences' },
    ],
  },
  {
    slug: 'securite',
    title: 'Sécurité',
    pages: [
      { slug: 'mfa', title: 'Authentification MFA' },
      { slug: 'oauth-google', title: 'Connexion Google' },
      { slug: 'sauvegardes', title: 'Sauvegardes' },
      { slug: 'audit-log', title: 'Journal d’audit' },
    ],
  },
  {
    slug: 'api',
    title: 'API',
    pages: [
      { slug: 'overview', title: 'Vue d’ensemble' },
      { slug: 'authentification', title: 'Authentification' },
    ],
  },
  {
    slug: '',
    title: 'Aide',
    pages: [{ slug: 'faq', title: 'FAQ' }],
  },
];

export function flattenDocs(): { slug: string; title: string; category: string }[] {
  const out: { slug: string; title: string; category: string }[] = [];
  for (const cat of DOCS_TREE) {
    for (const p of cat.pages) {
      const slug = cat.slug ? `${cat.slug}/${p.slug}` : p.slug;
      out.push({ slug, title: p.title, category: cat.title });
    }
  }
  return out;
}
