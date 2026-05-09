export const SITE = {
  name: 'NOVAR',
  legalName: 'NOVAR',
  baseline: "SaaS Studio — Numériser, automatiser, optimiser",
  description:
    "NOVAR est un SaaS Studio. Nous numérisons, automatisons et optimisons les opérations des secteurs traditionnels — d'une part en créant nos propres produits SaaS B2B (BIRDY, FEEDORA), d'autre part en concevant des solutions d'automatisation sur mesure pour les entreprises.",
  category: 'SaaS Studio',
  city: 'Conakry',
  country: 'Guinée',
  email: 'novar.startup@gmail.com',
  facebook: 'https://www.facebook.com/profile.php?id=61587571164695',
  linkedin: 'https://www.linkedin.com/company/111847101/',
  url: 'https://novar.gn',
  founder: 'Djerno',
} as const;

export const NAV = [
  {
    label: 'Produits',
    href: '/produits',
    children: [
      { label: 'BIRDY', href: '/produits/birdy-erp', desc: 'ERP & gestion comptable OHADA pour PME africaines' },
      { label: 'FEEDORA', href: '/produits/feedora', desc: 'Formulation alimentaire pour fermes avicoles' },
    ],
  },
  {
    label: 'Services',
    href: '/services/sur-mesure',
    children: [
      { label: 'Développement sur mesure', href: '/services/sur-mesure', desc: 'Automatisation & logiciels métiers spécifiques' },
      { label: 'Conseil & accompagnement', href: '/services/conseil', desc: 'Stratégie technologique et formation' },
    ],
  },
  { label: 'Tarifs', href: '/tarifs' },
  { label: 'Documentation', href: '/docs' },
  { label: 'Blog', href: '/blog' },
  { label: 'À propos', href: '/a-propos' },
  { label: 'Contact', href: '/contact' },
] as const;
