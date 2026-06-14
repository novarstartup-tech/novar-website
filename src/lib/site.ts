/**
 * Site URL resolution order:
 *   1. NEXT_PUBLIC_SITE_URL — explicit override (e.g. when a custom
 *      domain like novar.gn is configured later, set this in Vercel
 *      Settings → Environment Variables).
 *   2. VERCEL_PROJECT_PRODUCTION_URL — Vercel's auto-assigned
 *      production sub-domain (`novar-website-xxx.vercel.app`).
 *   3. Hardcoded fallback for local development.
 *
 * The `https://` prefix is added when missing — Vercel exposes the
 * bare hostname without scheme.
 */
function resolveSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) {
    return explicit.startsWith('http') ? explicit : `https://${explicit}`;
  }
  const vercelProd = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (vercelProd) {
    return `https://${vercelProd}`;
  }
  return 'http://localhost:3000';
}

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
  // Telephone affiche (format international avec espaces)
  phone: '+82 10 3410 9515',
  // Lien tel: (sans espaces, sans le +)
  phoneHref: 'tel:+821034109515',
  // WhatsApp : numero Guinée pour discussions rapides
  whatsapp: '+224 629 55 95 15',
  whatsappHref: 'https://wa.me/224629559515',
  facebook: 'https://www.facebook.com/profile.php?id=61587571164695',
  linkedin: 'https://www.linkedin.com/company/111847101/',
  url: resolveSiteUrl(),
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
  { label: 'Documentation', href: '/docs' },
  { label: 'Blog', href: '/blog' },
  { label: 'À propos', href: '/a-propos' },
  { label: 'Contact', href: '/contact' },
] as const;
