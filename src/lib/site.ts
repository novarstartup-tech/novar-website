export const SITE = {
  name: 'NOVAR',
  legalName: 'NOVAR',
  baseline: 'Solutions fintech pour startups et PME africaines',
  description:
    "NOVAR conçoit et déploie des solutions fintech B2B pour les startups et les PME africaines : intégrations Mobile Money, passerelles bancaires, plateformes de paiement marchand, et logiciels métiers verticaux. Nous transformons les besoins financiers des entreprises africaines en outils performants.",
  category: 'Entreprise de fintech B2B',
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
      { label: 'BIRDY', href: '/produits/birdy-erp', desc: 'Plateforme de gestion de stock' },
      { label: 'FEEDORA', href: '/produits/feedora', desc: 'Formulation alimentaire pour fermes avicoles' },
    ],
  },
  {
    label: 'Services',
    href: '/services/sur-mesure',
    children: [
      { label: 'Solutions fintech', href: '/services/sur-mesure', desc: 'Mobile Money · Passerelles bancaires · Plateformes paiement' },
      { label: 'Développement sur mesure', href: '/services/sur-mesure', desc: 'Logiciels B2B métiers spécifiques' },
      { label: 'Conseil & accompagnement', href: '/services/conseil', desc: 'Stratégie technologique et formation' },
    ],
  },
  { label: 'Tarifs', href: '/tarifs' },
  { label: 'Documentation', href: '/docs' },
  { label: 'Blog', href: '/blog' },
  { label: 'À propos', href: '/a-propos' },
  { label: 'Contact', href: '/contact' },
] as const;
