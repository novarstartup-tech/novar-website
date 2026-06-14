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
      { slug: 'installation', title: 'Installation', description: 'Installer BIRDY' },
      { slug: 'premiere-utilisation', title: 'Première utilisation', description: 'Créer votre société' },
      { slug: 'onboarding', title: 'Parcours d’onboarding', description: 'Les premières étapes' },
      { slug: 'interface', title: 'Tour de l’interface', description: 'Comprendre les écrans clés' },
    ],
  },
  {
    slug: 'modules',
    title: 'Modules métier',
    pages: [
      { slug: 'articles', title: 'Articles et catégories' },
      { slug: 'pos', title: 'POS et ventes' },
      { slug: 'stock', title: 'Gestion du stock' },
      { slug: 'caisse', title: 'Caisse et encaissements' },
      { slug: 'tiers', title: 'Clients et fournisseurs' },
      { slug: 'achats', title: 'Achats et approvisionnement' },
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
    title: 'RH et paie',
    pages: [
      { slug: 'employes', title: 'Gestion des employés' },
      { slug: 'contrats', title: 'Contrats et avenants' },
      { slug: 'paie-mensuelle', title: 'Paie mensuelle' },
      { slug: 'irpp-cnss', title: 'IRPP et CNSS Guinée' },
      { slug: 'conges', title: 'Congés et absences' },
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
    slug: '',
    title: 'Aide',
    pages: [{ slug: 'faq', title: 'FAQ' }],
  },
];

export function flattenDocs(): { slug: string; title: string; category: string }[] {
  return DOCS_TREE.flatMap((category) =>
    category.pages.map((page) => ({
      slug: category.slug ? `${category.slug}/${page.slug}` : page.slug,
      title: page.title,
      category: category.title,
    })),
  );
}
