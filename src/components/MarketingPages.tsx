import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  BookOpen,
  Boxes,
  CheckCircle2,
  Download,
  ExternalLink,
  FileText,
  Lightbulb,
  Mail,
  MapPin,
  MessageCircle,
  MonitorSmartphone,
  PackageCheck,
  PenTool,
  Search,
  ShieldCheck,
  Sparkles,
  Wrench,
} from 'lucide-react';
import { ContactForm } from '@/components/ContactForm';
import { PageHero } from '@/components/PageHero';
import { PRODUCTS, SERVICES, SITE_COPY, VERIFIED_LINKS, type ContactTopic, type Locale, type ProductId, type ServiceId } from '@/lib/content';
import { getBirdyDownloads } from '@/lib/releases';
import { SITE } from '@/lib/site';

const TEXT = {
  fr: {
    free: 'Gratuit',
    product: 'Produit édité par NOVAR',
    available: 'Disponible maintenant',
    access: 'Accéder au produit',
    download: 'Télécharger BIRDY',
    discuss: 'Parler à NOVAR',
    productsEyebrow: 'Produits NOVAR',
    productsTitle: 'Des produits spécialisés, conçus pour être réellement utiles.',
    productsIntro:
      'NOVAR édite actuellement BIRDY et FEEDORA. Les deux produits sont gratuits et répondent à des besoins métier distincts.',
    customTitle: 'Votre besoin ne rentre pas dans un produit existant ?',
    customBody:
      'NOVAR conçoit aussi des logiciels personnalisés pour les PME et organisations, sur la base de leurs opérations réelles.',
    approach: 'Notre approche',
    approachItems: [
      ['Comprendre', 'Observer les opérations, les contraintes et les décisions à améliorer.'],
      ['Concevoir', 'Définir une solution claire, utile et simple à faire évoluer.'],
      ['Construire', 'Livrer par étapes, vérifier avec les utilisateurs et documenter.'],
      ['Accompagner', 'Former les équipes et faire progresser la solution dans le temps.'],
    ],
  },
  en: {
    free: 'Free',
    product: 'A product built by NOVAR',
    available: 'Available now',
    access: 'Open product',
    download: 'Download BIRDY',
    discuss: 'Talk to NOVAR',
    productsEyebrow: 'NOVAR products',
    productsTitle: 'Specialized products designed to be genuinely useful.',
    productsIntro:
      'NOVAR currently builds BIRDY and FEEDORA. Both products are free and address distinct business needs.',
    customTitle: 'Your need does not fit an existing product?',
    customBody:
      'NOVAR also builds tailored software for SMEs and organizations, based on how their operations actually work.',
    approach: 'Our approach',
    approachItems: [
      ['Understand', 'Observe operations, constraints and the decisions that need improvement.'],
      ['Design', 'Define a clear, useful solution that can evolve over time.'],
      ['Build', 'Deliver in stages, validate with users and document the work.'],
      ['Enable', 'Train teams and help the solution progress over time.'],
    ],
  },
} as const;

export function ProductsOverview({ locale, embedded = false }: { locale: Locale; embedded?: boolean }) {
  const c = TEXT[locale];
  const custom = SERVICES.custom.copy[locale];
  return (
    <>
      {embedded ? (
        <section className="section-shell bg-cyan-50">
          <span className="eyebrow">{c.productsEyebrow}</span>
          <h2 className="section-heading mt-4 max-w-4xl">{c.productsTitle}</h2>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-600">{c.productsIntro}</p>
        </section>
      ) : (
        <PageHero tone="cyan" eyebrow={c.productsEyebrow} title={c.productsTitle} description={c.productsIntro} />
      )}
      <section className={`section-shell ${embedded ? 'pt-0' : ''}`}>
        <div className="grid gap-6 lg:grid-cols-2">
          {(['birdy', 'feedora'] as ProductId[]).map((id) => (
            <ProductCard key={id} id={id} locale={locale} />
          ))}
        </div>
      </section>
      <section className="section-shell pt-0">
        <div className="rounded-3xl border border-amber-200 bg-amber-50 p-7 sm:p-10 lg:p-12">
          <span className="eyebrow text-amber-800">{locale === 'fr' ? 'Solutions sur mesure' : 'Tailored software'}</span>
          <h2 className="section-heading mt-4 max-w-3xl">{c.customTitle}</h2>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-600">{c.customBody}</p>
          <Link href={locale === 'fr' ? SERVICES.custom.href : SERVICES.custom.englishHref} className="btn-primary mt-7">
            {custom.name} <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      </section>
    </>
  );
}

function ProductCard({ id, locale }: { id: ProductId; locale: Locale }) {
  const product = PRODUCTS[id];
  const copy = product.copy[locale];
  const href = locale === 'fr' ? product.href : product.englishHref;
  return (
    <article className={`product-listing ${id === 'birdy' ? 'product-listing-cyan' : 'product-listing-emerald'}`}>
      <Image src={id === 'birdy' ? '/products/birdy-dashboard-studio.png' : '/products/feedora-formulation.png'} alt={`${product.name} interface`} width={1440} height={900} className="w-full" />
      <div className="flex items-center justify-between gap-3">
        <span className={`badge ${id === 'birdy' ? 'badge-cyan' : 'badge-emerald'}`}>{TEXT[locale].free}</span>
        <span className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">{product.platforms.join(' · ')}</span>
      </div>
      <h2 className="mt-8 font-display text-4xl font-bold tracking-tight text-slate-950">{product.name}</h2>
      <p className={`mt-2 font-semibold ${id === 'birdy' ? 'text-cyan-800' : 'text-emerald-800'}`}>{copy.category}</p>
      <p className="mt-5 text-base leading-relaxed text-slate-600">{copy.summary}</p>
        <Link href={href} className="btn-ghost mt-7">
          {SITE_COPY[locale].learnMore} <ArrowRight className="h-4 w-4" aria-hidden />
        </Link>
    </article>
  );
}

export function ProductDetail({ locale, id }: { locale: Locale; id: ProductId }) {
  const product = PRODUCTS[id];
  const copy = product.copy[locale];
  const c = TEXT[locale];
  const isBirdy = id === 'birdy';
  const tone = isBirdy ? 'cyan' : 'emerald';
  const features = isBirdy
    ? locale === 'fr'
      ? [
          ['Tout au même endroit', 'Ventes, caisse, achats, stocks, comptabilité OHADA, paie et équipes dans un seul logiciel — fini les fichiers Excel éparpillés.'],
          ['Conforme OHADA/SYSCOHADA', 'Une comptabilité pensée pour les règles de l’espace OHADA, pour tenir vos comptes sans être comptable.'],
          ['Fonctionne sur votre ordinateur', 'Windows, macOS et Linux. Vos données restent chez vous et l’application marche même sans connexion internet stable.'],
          ['Gratuit, sans abonnement', 'BIRDY est 100 % gratuit : aucune carte bancaire, aucun abonnement, aucun frais caché.'],
        ]
      : [
          ['Everything in one place', 'Sales, cash, purchasing, inventory, OHADA accounting, payroll and teams in a single app — no more scattered spreadsheets.'],
          ['OHADA/SYSCOHADA compliant', 'Accounting designed around OHADA rules, so you can keep your books without being an accountant.'],
          ['Runs on your computer', 'Windows, macOS and Linux. Your data stays with you and the app works even without a stable internet connection.'],
          ['Free, no subscription', 'BIRDY is 100% free: no credit card, no subscription, no hidden fees.'],
        ]
    : locale === 'fr'
      ? [
          ['Construire des formules', 'Composer des formules alimentaires à partir des ingrédients et contraintes disponibles.'],
          ['Comparer les options', 'Observer la composition et le coût afin d’éclairer les arbitrages.'],
          ['Conserver son travail', 'Retrouver et faire évoluer les formules utiles à l’exploitation.'],
          ['Gratuit et accessible en ligne', 'FEEDORA est utilisable depuis le web sans abonnement sur ce site.'],
        ]
      : [
          ['Build formulas', 'Create feed formulas from available ingredients and constraints.'],
          ['Compare options', 'Review composition and cost to support better trade-offs.'],
          ['Keep your work', 'Find and improve the formulas used by the operation.'],
          ['Free and web-based', 'FEEDORA is available online with no subscription on this website.'],
        ];

  return (
    <>
      <section className={`relative overflow-hidden border-b ${isBirdy ? 'border-cyan-200 bg-cyan-50' : 'border-emerald-200 bg-emerald-50'}`}>
        <div className="absolute inset-0 bg-hero-grid opacity-50" aria-hidden />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-2 lg:items-center lg:px-8 lg:py-24">
          <div>
            <span className={`eyebrow ${isBirdy ? 'text-cyan-800' : 'text-emerald-800'}`}>{c.product} · {c.free}</span>
            <h1 className="mt-5 font-display text-5xl font-bold tracking-tight text-slate-950 sm:text-6xl">{product.name}</h1>
            <p className={`mt-3 text-xl font-semibold ${isBirdy ? 'text-cyan-800' : 'text-emerald-800'}`}>{copy.category}</p>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-650">{copy.summary}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              {isBirdy ? (
                <Link href={locale === 'fr' ? '/telechargements' : '/en/downloads'} className="btn-primary">
                  <Download className="h-4 w-4" aria-hidden /> {c.download}
                </Link>
              ) : (
                <a href={VERIFIED_LINKS.feedora} target="_blank" rel="noopener noreferrer" className="btn-primary">
                  {c.access} <ExternalLink className="h-4 w-4" aria-hidden />
                </a>
              )}
              <Link href={locale === 'fr' ? '/contact?topic=demo' : '/en/contact?topic=demo'} className="btn-ghost">{c.discuss}</Link>
            </div>
            {isBirdy && (
              <p className="mt-4 text-sm font-medium text-slate-500">
                {locale === 'fr' ? 'Gratuit · Sans abonnement · Sans carte bancaire · Windows, macOS, Linux' : 'Free · No subscription · No credit card · Windows, macOS, Linux'}
              </p>
            )}
          </div>
          {isBirdy ? (
            <div className="product-showcase">
              <Image src="/products/birdy-dashboard-studio.png" alt={locale === 'fr' ? 'Tableau de bord BIRDY' : 'BIRDY dashboard'} width={1280} height={800} className="h-auto w-full" priority />
            </div>
          ) : (
            <div className="product-showcase product-showcase-emerald">
              <Image src="/products/feedora-formulation.png" alt={locale === 'fr' ? 'Interface de formulation FEEDORA' : 'FEEDORA formulation interface'} width={1424} height={900} className="h-auto w-full" priority />
              <div className="hidden">
                {['Maïs', 'Soja', 'Calcium', locale === 'fr' ? 'Coût total' : 'Total cost'].map((item, index) => (
                  <div key={item} className="rounded-2xl border border-emerald-100 bg-emerald-50 p-5">
                    <div className="text-xs font-bold uppercase tracking-[0.15em] text-emerald-800">{item}</div>
                    <div className="mt-5 h-2 rounded-full bg-emerald-100"><div className="h-2 rounded-full bg-emerald-500" style={{ width: `${85 - index * 13}%` }} /></div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
      <section className="section-shell">
        <div className="max-w-3xl">
          <span className={`eyebrow ${isBirdy ? 'text-cyan-800' : 'text-emerald-800'}`}>{locale === 'fr' ? 'Ce que le produit apporte' : 'What the product brings'}</span>
          <h2 className="section-heading mt-4">{locale === 'fr' ? `Ce que ${product.name} change dans votre gestion.` : `What ${product.name} changes in how you operate.`}</h2>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {features.map(([title, body]) => (
            <div key={title} className="editorial-card">
              <CheckCircle2 className={`h-5 w-5 ${isBirdy ? 'text-cyan-700' : 'text-emerald-700'}`} aria-hidden />
              <h3 className="mt-4 font-display text-lg font-bold text-slate-950">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{body}</p>
            </div>
          ))}
        </div>
      </section>
      {isBirdy && (
        <section className="section-shell border-t border-slate-200">
          <div className="rounded-3xl border border-cyan-200 bg-cyan-50 p-7 sm:p-10 lg:p-12">
            <span className="eyebrow text-cyan-800">{locale === 'fr' ? 'Pourquoi c’est gratuit' : 'Why it’s free'}</span>
            <h2 className="section-heading mt-4 max-w-3xl">{locale === 'fr' ? 'Gratuit — et voici pourquoi.' : 'Free — and here’s why.'}</h2>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-600">
              {locale === 'fr'
                ? 'BIRDY est édité par NOVAR, un studio logiciel basé à Conakry. Nous finançons nos produits gratuits grâce à nos missions sur mesure et de conseil. Notre objectif : équiper le plus de PME africaines possible d’une gestion sérieuse, sans barrière de prix. BIRDY reste gratuit.'
                : 'BIRDY is built by NOVAR, a software studio based in Conakry. We fund our free products through our tailored and advisory work. Our goal: give as many African SMEs as possible access to serious management tools, with no price barrier. BIRDY stays free.'}
            </p>
          </div>
        </section>
      )}
      {isBirdy && (
        <section className="section-shell border-t border-slate-200 bg-slate-50">
          <div>
            <span className="eyebrow">{locale === 'fr' ? 'BIRDY en situation' : 'BIRDY in action'}</span>
            <h2 className="section-title max-w-4xl">{locale === 'fr' ? 'Des opérations reliées, dans un même environnement.' : 'Connected operations in one environment.'}</h2>
            <div className="product-gallery">
              {[
                ['/products/birdy-sales.png', locale === 'fr' ? 'Ventes et facturation' : 'Sales and invoicing'],
                ['/products/birdy-stock.png', locale === 'fr' ? 'Stocks multi-dépôts' : 'Multi-location inventory'],
                ['/products/birdy-partners.png', locale === 'fr' ? 'Clients et fournisseurs' : 'Customers and suppliers'],
              ].map(([src, label]) => (
                <figure key={src}>
                  <Image src={src} alt={label} width={1440} height={900} className="w-full" />
                  <figcaption>{label}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export function ServiceDetail({ locale, id }: { locale: Locale; id: ServiceId }) {
  const service = SERVICES[id];
  const copy = service.copy[locale];
  const isCustom = id === 'custom';
  const c = TEXT[locale];
  return (
    <>
      <PageHero
        tone={isCustom ? 'amber' : 'violet'}
        eyebrow={locale === 'fr' ? 'Services NOVAR' : 'NOVAR services'}
        title={copy.name}
        description={copy.summary}
      />
      <section className="section-shell">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {c.approachItems.map(([title, body], index) => {
            const Icon = [Search, PenTool, Wrench, Sparkles][index];
            return (
              <div key={title} className="rounded-2xl border border-slate-200 bg-white p-6">
                <Icon className={`h-5 w-5 ${isCustom ? 'text-amber-700' : 'text-violet-700'}`} aria-hidden />
                <div className="mt-5 text-xs font-bold uppercase tracking-[0.16em] text-slate-400">0{index + 1}</div>
                <h2 className="mt-2 font-display text-lg font-bold text-slate-950">{title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{body}</p>
              </div>
            );
          })}
        </div>
        <div className={`mt-10 rounded-3xl border p-8 sm:p-10 ${isCustom ? 'border-amber-200 bg-amber-50' : 'border-violet-200 bg-violet-50'}`}>
          <h2 className="section-heading">{locale === 'fr' ? 'Chaque mission commence par un échange clair.' : 'Every engagement starts with a clear conversation.'}</h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate-600">
            {locale === 'fr'
              ? 'Les prestations personnalisées sont proposées sur devis, après compréhension du besoin, du périmètre et des contraintes.'
              : 'Tailored engagements are quoted after we understand the need, scope and constraints.'}
          </p>
          <Link href={locale === 'fr' ? '/contact?topic=sur-mesure' : '/en/contact?topic=sur-mesure'} className="btn-primary mt-7">
            {locale === 'fr' ? 'Présenter votre besoin' : 'Tell us about your need'} <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      </section>
    </>
  );
}

export function ContactView({ locale, defaultTopic = 'autre' }: { locale: Locale; defaultTopic?: ContactTopic }) {
  const isFr = locale === 'fr';
  return (
    <>
      <PageHero
        tone="cyan"
        eyebrow={isFr ? 'Contact' : 'Contact'}
        title={isFr ? 'Parlons de ce que vous voulez améliorer.' : 'Let’s discuss what you want to improve.'}
        description={isFr ? 'Produit NOVAR, démonstration, projet sur mesure ou conseil : choisissez le sujet et donnez-nous le contexte utile.' : 'NOVAR product, demonstration, tailored project or advisory: choose a topic and share the useful context.'}
      />
      <section className="section-shell">
        <div className="grid gap-8 lg:grid-cols-[1.4fr_0.6fr]">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <ContactForm locale={locale} defaultTopic={defaultTopic} />
          </div>
          <aside className="space-y-4">
            <ContactCard icon={Mail} label="E-mail" value={SITE.email} href={`mailto:${SITE.email}`} />
            <ContactCard icon={MessageCircle} label="WhatsApp" value={SITE.whatsapp} href={SITE.whatsappHref} external />
            <ContactCard icon={MapPin} label={isFr ? 'Studio' : 'Studio'} value="Conakry, Guinée" />
          </aside>
        </div>
      </section>
    </>
  );
}

function ContactCard({ icon: Icon, label, value, href, external }: { icon: typeof Mail; label: string; value: string; href?: string; external?: boolean }) {
  const inner = (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
      <Icon className="h-5 w-5 text-cyan-700" aria-hidden />
      <div className="mt-4 text-xs font-bold uppercase tracking-[0.16em] text-slate-500">{label}</div>
      <div className="mt-1 break-all text-sm font-semibold text-slate-950">{value}</div>
    </div>
  );
  return href ? <a href={href} target={external ? '_blank' : undefined} rel={external ? 'noopener noreferrer' : undefined}>{inner}</a> : inner;
}

export function StudioView({ locale }: { locale: Locale }) {
  const isFr = locale === 'fr';
  const principles = isFr
    ? [['Produits', 'Nous éditons des logiciels spécialisés qui répondent à des besoins métier précis.'], ['Sur mesure', 'Nous concevons aussi des solutions personnalisées pour les PME et organisations.'], ['Ancrage terrain', 'Les décisions produit partent des opérations et des contraintes réelles.'], ['Clarté', 'Nous préférons une solution utile et maintenable à une promesse spectaculaire.']]
    : [['Products', 'We build specialized software for precise business needs.'], ['Tailored work', 'We also design custom solutions for SMEs and organizations.'], ['Grounded in operations', 'Product decisions start from real workflows and constraints.'], ['Clarity', 'We prefer useful, maintainable solutions over spectacular promises.']];
  return (
    <>
      <PageHero tone="violet" eyebrow={isFr ? 'Le studio' : 'The studio'} title={isFr ? 'NOVAR construit un portefeuille de produits utiles.' : 'NOVAR is building a portfolio of useful products.'} description={isFr ? 'BIRDY et FEEDORA sont nos deux produits actuels. Nos missions sur mesure nous permettent d’aider d’autres PME et organisations à transformer leurs opérations.' : 'BIRDY and FEEDORA are our current products. Our tailored work helps other SMEs and organizations transform their operations.'} />
      <section className="section-shell">
        <div className="grid gap-5 md:grid-cols-2">
          {principles.map(([title, body]) => (
            <div key={title} className="rounded-2xl border border-violet-100 bg-violet-50 p-7">
              <Lightbulb className="h-5 w-5 text-violet-700" aria-hidden />
              <h2 className="mt-4 font-display text-xl font-bold text-slate-950">{title}</h2>
              <p className="mt-2 leading-relaxed text-slate-600">{body}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export function ResourcesView({ locale, mode = 'resources' }: { locale: Locale; mode?: 'resources' | 'guides' | 'insights' }) {
  const isFr = locale === 'fr';
  const resources = [
    { icon: BookOpen, title: isFr ? 'Documentation BIRDY' : 'BIRDY documentation', body: isFr ? 'Installation et guides d’utilisation publiés.' : 'Published installation and usage guides.', href: isFr ? '/docs' : '/en/docs' },
    { icon: FileText, title: isFr ? 'Guides pratiques' : 'Practical guides', body: isFr ? 'Des parcours reliés à la documentation réellement disponible.' : 'Paths connected to documentation that is actually available.', href: isFr ? '/tutoriels' : '/en/guides' },
    { icon: Lightbulb, title: isFr ? 'Analyses du studio' : 'Studio insights', body: isFr ? 'Vision produit, retours terrain et sujets métier.' : 'Product thinking, field experience and business topics.', href: isFr ? '/blog' : '/en/insights' },
  ];
  const selected = mode === 'resources' ? resources : mode === 'guides' ? resources.slice(0, 2) : resources.slice(2);
  return (
    <>
      <PageHero tone="slate" eyebrow={isFr ? 'Ressources' : 'Resources'} title={mode === 'guides' ? (isFr ? 'Guides publiés.' : 'Published guides.') : mode === 'insights' ? (isFr ? 'Analyses et vision produit.' : 'Product insights and thinking.') : (isFr ? 'Comprendre, utiliser et suivre nos produits.' : 'Understand, use and follow our products.')} description={isFr ? 'Nous n’affichons ici que les contenus publics et réellement disponibles.' : 'Only public, genuinely available content is listed here.'} />
      <section className="section-shell">
        <div className="grid gap-5 md:grid-cols-3">
          {selected.map(({ icon: Icon, title, body, href }) => (
            <Link key={title} href={href} className="rounded-2xl border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:shadow-lg">
              <Icon className="h-5 w-5 text-cyan-700" aria-hidden />
              <h2 className="mt-5 font-display text-xl font-bold text-slate-950">{title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{body}</p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-slate-950">{isFr ? 'Consulter' : 'Open'} <ArrowRight className="h-4 w-4" aria-hidden /></span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}

export async function DownloadsView({ locale }: { locale: Locale }) {
  const isFr = locale === 'fr';
  // Liens résolus au build vers la dernière release BIRDY publiée
  // sur GitHub (cf. src/lib/releases.ts).
  const downloads = await getBirdyDownloads();
  const platforms = [
    ['Windows', '.exe', downloads.windows],
    ['macOS', '.dmg', downloads.mac],
    ['Linux Debian', '.deb', downloads.deb],
    ['Linux AppImage', '.AppImage', downloads.appimage],
  ];
  return (
    <>
      <PageHero tone="cyan" eyebrow="BIRDY" title={isFr ? 'Télécharger BIRDY gratuitement.' : 'Download BIRDY for free.'} description={isFr ? 'Choisissez le paquet adapté à votre système. Les liens pointent vers la dernière version publiée par NOVAR.' : 'Choose the package for your system. Links point to the latest release published by NOVAR.'} />
      <section className="section-shell">
        <div className="grid gap-5 sm:grid-cols-2">
          {platforms.map(([name, format, href]) => (
            <a key={name} href={href} className="rounded-2xl border border-cyan-200 bg-cyan-50 p-6 transition hover:-translate-y-1 hover:shadow-lg">
              <MonitorSmartphone className="h-5 w-5 text-cyan-800" aria-hidden />
              <h2 className="mt-5 font-display text-xl font-bold text-slate-950">{name}</h2>
              <p className="mt-2 text-sm text-slate-600">{format} · {isFr ? 'Dernière version publiée' : 'Latest published release'}</p>
              <span className="btn-primary mt-6"><Download className="h-4 w-4" aria-hidden />{isFr ? 'Télécharger' : 'Download'}</span>
            </a>
          ))}
        </div>
      </section>
      <section className="section-shell pt-0">
        <div className="rounded-2xl border border-amber-200 bg-amber-50 p-7">
          <div className="flex items-start gap-3">
            <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-amber-700" aria-hidden />
            <div>
              <h2 className="font-display text-xl font-bold text-slate-950">
                {isFr
                  ? 'À l’installation, un avertissement peut s’afficher — c’est normal'
                  : 'A warning may appear during install — this is normal'}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-700">
                {isFr
                  ? 'BIRDY est édité par un jeune studio et n’est pas encore signé par un certificat payant. Windows (SmartScreen) affiche donc un message « éditeur inconnu » : il signale seulement que l’application est récente et peu téléchargée, pas qu’elle est dangereuse.'
                  : 'BIRDY is published by a young studio and is not yet signed with a paid certificate. Windows (SmartScreen) therefore shows an “unknown publisher” message: it only means the app is new and rarely downloaded, not that it is unsafe.'}
              </p>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-amber-200 bg-white p-4">
                  <h3 className="font-display text-sm font-bold text-slate-950">Windows</h3>
                  <ol className="mt-2 list-decimal space-y-1 pl-4 text-sm leading-relaxed text-slate-700">
                    <li>{isFr ? 'Au téléchargement, cliquez « Conserver ».' : 'When downloading, click “Keep”.'}</li>
                    <li>{isFr ? 'Ouvrez le fichier, puis cliquez « Informations complémentaires ».' : 'Open the file, then click “More info”.'}</li>
                    <li>{isFr ? 'Cliquez « Exécuter quand même ».' : 'Click “Run anyway”.'}</li>
                  </ol>
                </div>
                <div className="rounded-xl border border-amber-200 bg-white p-4">
                  <h3 className="font-display text-sm font-bold text-slate-950">macOS</h3>
                  <ol className="mt-2 list-decimal space-y-1 pl-4 text-sm leading-relaxed text-slate-700">
                    <li>{isFr ? 'Faites un clic droit sur l’application, puis « Ouvrir ».' : 'Right-click the app, then “Open”.'}</li>
                    <li>{isFr ? 'Confirmez « Ouvrir » dans la fenêtre qui apparaît.' : 'Confirm “Open” in the dialog that appears.'}</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export function SecurityView({ locale }: { locale: Locale }) {
  const isFr = locale === 'fr';
  return (
    <>
      <PageHero tone="cyan" eyebrow={isFr ? 'Sécurité' : 'Security'} title={isFr ? 'Une surface publique simple et maîtrisée.' : 'A simple, controlled public surface.'} description={isFr ? 'Le site NOVAR ne propose ni compte client, ni authentification web, ni API publique. Le formulaire de contact est validé et limité côté serveur.' : 'The NOVAR website exposes no customer account, web authentication or public API. The contact form is validated and rate-limited server-side.'} />
      <section className="section-shell">
        <div className="grid gap-5 md:grid-cols-3">
          {[
            [ShieldCheck, isFr ? 'En-têtes de sécurité' : 'Security headers', isFr ? 'CSP, HSTS et politiques navigateur sont appliqués en production.' : 'CSP, HSTS and browser policies are applied in production.'],
            [PackageCheck, isFr ? 'Dépendances auditées' : 'Audited dependencies', isFr ? 'Les dépendances sont vérifiées lors de la validation du site.' : 'Dependencies are checked during website validation.'],
            [Mail, isFr ? 'Signalement responsable' : 'Responsible disclosure', isFr ? `Signalez un problème à ${SITE.email}.` : `Report an issue to ${SITE.email}.`],
          ].map(([Icon, title, body]) => {
            const CardIcon = Icon as typeof ShieldCheck;
            return <div key={title as string} className="rounded-2xl border border-slate-200 bg-white p-7"><CardIcon className="h-5 w-5 text-cyan-700" aria-hidden /><h2 className="mt-5 font-display text-xl font-bold text-slate-950">{title as string}</h2><p className="mt-2 text-sm leading-relaxed text-slate-600">{body as string}</p></div>;
          })}
        </div>
      </section>
    </>
  );
}

export function LegalView({ locale, kind }: { locale: Locale; kind: 'privacy' | 'terms' }) {
  const isFr = locale === 'fr';
  const privacy = kind === 'privacy';
  const sections = privacy
    ? isFr
      ? [
          ['Données collectées', 'Le site collecte uniquement les informations que vous transmettez dans le formulaire de contact, ainsi que les journaux techniques nécessaires à sa sécurité.'],
          ['Finalité', 'Ces informations servent à répondre à votre demande, assurer la sécurité du service et maintenir une trace raisonnable des échanges.'],
          ['Partage et conservation', 'NOVAR ne vend pas vos données. Elles peuvent être traitées par les prestataires techniques nécessaires au fonctionnement du site et sont conservées uniquement aussi longtemps que nécessaire.'],
          ['Vos droits', `Pour demander l’accès, la correction ou la suppression de vos informations, écrivez à ${SITE.email}.`],
        ]
      : [
          ['Data collected', 'The website only collects information you submit through the contact form and technical logs required for security.'],
          ['Purpose', 'This information is used to answer your request, secure the service and keep a reasonable record of exchanges.'],
          ['Sharing and retention', 'NOVAR does not sell your data. Technical providers may process it where required to operate the website, and it is retained only as long as necessary.'],
          ['Your rights', `To request access, correction or deletion, email ${SITE.email}.`],
        ]
    : isFr
      ? [
          ['Portée', 'BIRDY et FEEDORA sont proposés gratuitement. Les prestations sur mesure, de conseil, de formation ou de support spécifique font l’objet d’un devis ou contrat séparé.'],
          ['Propriété intellectuelle', 'Les marques, logiciels et contenus NOVAR restent protégés. Les droits relatifs à une solution sur mesure sont précisés dans le contrat du projet.'],
          ['Responsabilités', 'Chaque produit doit être utilisé conformément à sa documentation. Les décisions métier, comptables ou nutritionnelles restent sous la responsabilité de l’utilisateur et de ses professionnels compétents.'],
          ['Contact', `Toute question contractuelle peut être adressée à ${SITE.email}.`],
        ]
      : [
          ['Scope', 'BIRDY and FEEDORA are offered free of charge. Tailored software, advisory, training or dedicated support are covered by a separate quote or agreement.'],
          ['Intellectual property', 'NOVAR trademarks, software and content remain protected. Rights for tailored work are specified in the project agreement.'],
          ['Responsibilities', 'Each product must be used according to its documentation. Business, accounting or nutritional decisions remain the responsibility of the user and relevant professionals.'],
          ['Contact', `Contract questions can be sent to ${SITE.email}.`],
        ];
  return (
    <>
      <PageHero tone="slate" eyebrow={isFr ? 'Informations légales' : 'Legal information'} title={privacy ? (isFr ? 'Politique de confidentialité' : 'Privacy policy') : (isFr ? 'Conditions d’utilisation et de prestation' : 'Terms of use and services')} description={isFr ? 'Une présentation claire du fonctionnement actuel du site et des services NOVAR.' : 'A clear description of how the current NOVAR website and services operate.'} />
      <article className="section-shell max-w-4xl">
        <div className="space-y-8">
          {sections.map(([title, body]) => <section key={title}><h2 className="font-display text-2xl font-bold text-slate-950">{title}</h2><p className="mt-3 leading-7 text-slate-600">{body}</p></section>)}
        </div>
      </article>
    </>
  );
}
