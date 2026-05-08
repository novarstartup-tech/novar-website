export type BlogMeta = {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  readTime: number;
  tags?: string[];
};

export const BLOG_POSTS: BlogMeta[] = [
  {
    slug: 'saas-studio-vision',
    title: 'Manifeste NOVAR : pourquoi un SaaS Studio en Afrique',
    description:
      "Pourquoi nous croyons que le bon modèle pour moderniser les secteurs traditionnels africains n'est ni la pure agence, ni le pur SaaS, mais un SaaS Studio.",
    date: '2026-05-08',
    author: 'Djerno',
    readTime: 6,
    tags: ['NOVAR', 'Vision', 'SaaS Studio'],
  },
  {
    slug: 'feedora-formulation',
    title: 'FEEDORA : optimiser ses formules avicoles pour gagner sur le coût/tonne',
    description:
      "La formulation alimentaire est le poste qui pèse le plus sur la rentabilité d'une ferme avicole. Voici comment FEEDORA aide à reprendre le contrôle.",
    date: '2026-05-05',
    author: 'Djerno',
    readTime: 5,
    tags: ['FEEDORA', 'Aviculture', 'Formulation'],
  },
  {
    slug: 'pourquoi-erp-ohada',
    title: 'Pourquoi un ERP nativement OHADA change tout pour une PME guinéenne',
    description:
      "Les outils étrangers obligent à adapter votre comptabilité à leurs codes. Un ERP OHADA fait l'inverse.",
    date: '2026-04-15',
    author: 'Djerno',
    readTime: 6,
    tags: ['OHADA', 'ERP'],
  },
  {
    slug: 'liasse-fiscale-guide',
    title: 'Liasse fiscale OHADA : un guide en 7 étapes pour la PME guinéenne',
    description:
      "La liasse fiscale est l'aboutissement de l'année comptable. Voici une méthode pas à pas pour la produire sans stress.",
    date: '2026-02-10',
    author: 'Djerno',
    readTime: 7,
    tags: ['OHADA', 'Liasse fiscale', 'BIRDY'],
  },
];
