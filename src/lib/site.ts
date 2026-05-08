export const SITE = {
  name: 'NOVAR',
  legalName: 'NOVAR',
  baseline: 'Solutions technologiques pour startups et PME',
  description:
    "NOVAR accompagne les startups et les PME dans la conception de solutions technologiques sur mesure. Nous transformons les idées en outils performants pour accélérer la croissance et soutenir une transformation durable.",
  category: 'Entreprise de logiciels',
  city: 'Conakry',
  country: 'Guinée',
  email: 'djernomahamoudoudiallo@gmail.com',
  facebook: 'https://www.facebook.com/profile.php?id=61587571164695',
  url: 'https://novar.gn',
  founder: 'Djerno',
} as const;

export const NAV = [
  {
    label: 'Produits',
    href: '/produits',
    children: [
      { label: 'BIRDY ERP', href: '/produits/birdy-erp', desc: 'Gestion complète OHADA pour PME' },
      { label: 'Solutions sur mesure', href: '/services/sur-mesure', desc: 'Logiciels conçus pour vos besoins' },
      { label: 'Roadmap', href: '/produits', desc: 'Notre catalogue à venir' },
    ],
  },
  {
    label: 'Services',
    href: '/services/sur-mesure',
    children: [
      { label: 'Développement sur mesure', href: '/services/sur-mesure', desc: 'Audit · Architecture · Dev · Intégration' },
      { label: 'Conseil & accompagnement', href: '/services/conseil', desc: 'Stratégie technologique et formation' },
    ],
  },
  { label: 'Tarifs', href: '/tarifs' },
  { label: 'Téléchargements', href: '/telechargements' },
  { label: 'Tutoriels', href: '/tutoriels' },
  { label: 'Documentation', href: '/docs' },
  { label: 'Blog', href: '/blog' },
  { label: 'À propos', href: '/a-propos' },
  { label: 'Contact', href: '/contact' },
] as const;
