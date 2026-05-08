export type BlogMeta = {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  readTime: number;
};

export const BLOG_POSTS: BlogMeta[] = [
  {
    slug: 'pourquoi-erp-ohada',
    title: 'Pourquoi un ERP nativement OHADA change tout pour une PME guinéenne',
    description:
      "Les outils étrangers obligent à adapter votre comptabilité à leurs codes. Un ERP OHADA fait l'inverse.",
    date: '2026-04-15',
    author: 'Djerno',
    readTime: 6,
  },
  {
    slug: 'liasse-fiscale-guide',
    title: 'Liasse fiscale OHADA : un guide en 7 étapes pour la PME guinéenne',
    description:
      "La liasse fiscale est l'aboutissement de l'année comptable. Voici une méthode pas à pas pour la produire sans stress.",
    date: '2026-02-10',
    author: 'Djerno',
    readTime: 7,
  },
];
