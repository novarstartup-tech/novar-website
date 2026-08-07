import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  BookOpen,
  Boxes,
  Download,
  ExternalLink,
  FileText,
  Lightbulb,
  Mail,
  MapPin,
  MessageCircle,
  PackageCheck,
  PenTool,
  Search,
  ShieldCheck,
  Sparkles,
  Wrench,
} from 'lucide-react';
import { ContactForm } from '@/components/ContactForm';
import { PageHero } from '@/components/PageHero';
import { DownloadPicker } from '@/components/DownloadPicker';
import { PRODUCTS, SERVICES, SITE_COPY, VERIFIED_LINKS, type ContactTopic, type Locale, type ProductId, type ServiceId } from '@/lib/content';
import { SITE } from '@/lib/site';
import { getLatestReleaseMeta, getReleaseHistory, RELEASES_ALL_URL } from '@/lib/releases';

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
  const fr = locale === 'fr';
  const isBirdy = id === 'birdy';

  const meta = isBirdy
    ? ['Windows · macOS · Linux', 'SYSCOHADA', 'GNF · XOF · EUR · USD']
    : fr
      ? ['Application web', 'Aviculture', 'Sans abonnement']
      : ['Web app', 'Poultry farming', 'No subscription'];

  const itemsEyebrow = isBirdy ? 'Modules' : fr ? 'Ce que le produit apporte' : 'What the product brings';
  const itemsTitle = isBirdy
    ? fr
      ? 'Des opérations reliées, dans un même environnement.'
      : 'Connected operations in one environment.'
    : fr
      ? 'Un outil spécialisé, sans promesse vague.'
      : 'A specialized tool, without vague promises.';

  const items: readonly (readonly [string, string, string])[] = isBirdy
    ? fr
      ? [
          ['01', 'Facturation', 'Devis, factures et avoirs avec les mentions légales attendues.'],
          ['02', 'Comptabilité OHADA', 'Plan SYSCOHADA, lettrage, FEC, liasse fiscale et TAFIRE.'],
          ['03', 'Stocks', 'Multi-dépôts, mouvements, inventaires et valorisation.'],
          ['04', 'Achats', 'Commandes, réceptions et suivi des fournisseurs.'],
          ['05', 'Caisse', 'Encaissements, sessions de caisse et point de vente.'],
          ['06', 'Paie & RH', 'Contrats, congés, paie mensuelle, CNSS et IRPP.'],
        ]
      : [
          ['01', 'Invoicing', 'Quotes, invoices and credit notes with the expected legal mentions.'],
          ['02', 'OHADA accounting', 'SYSCOHADA chart, reconciliation, FEC, tax bundle and TAFIRE.'],
          ['03', 'Inventory', 'Multi-location stock, movements, counts and valuation.'],
          ['04', 'Purchasing', 'Orders, receipts and supplier tracking.'],
          ['05', 'Cash', 'Payments, cash sessions and point of sale.'],
          ['06', 'Payroll & HR', 'Contracts, leave, monthly payroll, CNSS and IRPP.'],
        ]
    : fr
      ? [
          ['01', 'Construire des formules', 'Composer des formules alimentaires à partir des ingrédients et contraintes disponibles.'],
          ['02', 'Comparer les options', 'Observer la composition et le coût afin d’éclairer les arbitrages.'],
          ['03', 'Conserver son travail', 'Retrouver et faire évoluer les formules utiles à l’exploitation.'],
          ['04', 'Gratuit et accessible en ligne', 'FEEDORA est utilisable depuis le web, sans abonnement.'],
        ]
      : [
          ['01', 'Build formulas', 'Create feed formulas from available ingredients and constraints.'],
          ['02', 'Compare options', 'Review composition and cost to support better trade-offs.'],
          ['03', 'Keep your work', 'Find and improve the formulas the operation relies on.'],
          ['04', 'Free and web-based', 'FEEDORA runs from the web, with no subscription.'],
        ];

  const gallery: readonly (readonly [string, string])[] = isBirdy
    ? [
        ['/products/birdy-sales.png', fr ? 'Ventes et facturation' : 'Sales and invoicing'],
        ['/products/birdy-stock.png', fr ? 'Stocks multi-dépôts' : 'Multi-location inventory'],
        ['/products/birdy-dashboard-studio.png', fr ? 'Pilotage et rapports OHADA' : 'OHADA dashboards and reports'],
      ]
    : [];

  return (
    <>
      {/* Héros navy à horizon courbe (charte v1.0) */}
      <section className="novar-hero">
        <div className="novar-hero-bg" />
        <div className="novar-hero-glow" />
        <div className="novar-hero-horizon" />
        <div className="relative mx-auto grid max-w-[1200px] items-center gap-[68px] px-[clamp(20px,4vw,32px)] pb-[clamp(140px,20vw,210px)] pt-[clamp(56px,7vw,92px)] lg:grid-cols-2">
          <div>
            <span className="inline-flex items-center rounded-full border border-[#38B6FF]/30 bg-[#38B6FF]/15 px-[14px] py-1.5 font-display text-[10.5px] font-medium uppercase tracking-[0.12em] text-[#9AD6FF]">{c.product} · {c.free}</span>
            <h1 className="mt-7 text-[clamp(56px,7vw,92px)] font-bold leading-[0.9] tracking-[-0.055em] text-white">{product.name}</h1>
            <p className="mt-4 text-[20px] font-semibold text-[#9AD6FF]">{copy.category}</p>
            <p className="mt-5 max-w-[32em] text-[16.5px] leading-[1.7] text-[#B4C9DE]">{copy.summary}</p>
            <div className="mt-9 flex flex-wrap gap-3">
              {isBirdy ? (
                <Link href={fr ? '/telechargements' : '/en/downloads'} className="inline-flex items-center gap-2 rounded-[14px] bg-[#38B6FF] px-6 py-[15px] text-[14.5px] font-bold text-[#0D1B2A] shadow-[0_12px_34px_rgba(56,182,255,0.32)] transition-colors hover:bg-[#62C6FF]"><Download className="h-4 w-4" aria-hidden />{c.download}</Link>
              ) : (
                <a href={VERIFIED_LINKS.feedora} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-[14px] bg-[#38B6FF] px-6 py-[15px] text-[14.5px] font-bold text-[#0D1B2A] shadow-[0_12px_34px_rgba(56,182,255,0.32)] transition-colors hover:bg-[#62C6FF]">{c.access}<ExternalLink className="h-4 w-4" aria-hidden /></a>
              )}
              <Link href={fr ? '/contact' : '/en/contact'} className="inline-flex items-center rounded-[14px] border border-white/[0.18] bg-white/[0.06] px-6 py-[15px] text-[14.5px] font-semibold text-white backdrop-blur-[14px] transition-colors hover:bg-white/[0.12]">{c.discuss}</Link>
            </div>
            <div className="mt-9 flex flex-wrap gap-x-7 gap-y-3 border-t border-white/[0.12] pt-6 font-display text-[11.5px] text-[#8FAAC6]">
              {meta.map((m) => (
                <span key={m} className="whitespace-nowrap">{m}</span>
              ))}
            </div>
          </div>
          <div className="overflow-hidden rounded-[20px] border border-white/[0.16] bg-white/[0.06] shadow-[inset_0_1px_0_rgba(255,255,255,0.22),0_50px_110px_rgba(0,0,0,0.55)] backdrop-blur-[18px]">
            <Image src={isBirdy ? '/products/birdy-dashboard-studio.png' : '/products/feedora-formulation.png'} alt={product.name} width={1280} height={800} priority className="block aspect-[16/10] w-full object-cover object-top" />
          </div>
        </div>
      </section>

      {/* Modules / apports */}
      <section className="relative z-[1] mx-auto max-w-[1200px] px-[clamp(20px,4vw,32px)] py-[clamp(64px,8vw,96px)]">
        <div className="font-display text-[11px] font-medium uppercase tracking-[0.14em] text-[#6B7C93]">{itemsEyebrow}</div>
        <h2 className="mt-3.5 max-w-[24em] text-[clamp(24px,3.8vw,30px)] font-bold leading-[1.15] tracking-[-0.025em] text-[#0D1B2A]">{itemsTitle}</h2>
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(([num, title, body]) => (
            <div key={num} className="novar-glass rounded-[18px] p-7">
              <span className="font-display text-[11px] text-[#5B6E86]">{num}</span>
              <h3 className="mt-3 text-[17px] font-bold text-[#0D1B2A]">{title}</h3>
              <p className="mt-2 text-[14px] leading-[1.65] text-[#44546B]">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Galerie produit (BIRDY en situation) */}
      {gallery.length > 0 && (
        <section className="relative z-[1] bg-gradient-to-b from-white/0 via-white/50 to-white/[0.78] backdrop-blur-[20px]">
          <div className="mx-auto max-w-[1200px] px-[clamp(20px,4vw,32px)] py-[clamp(64px,8vw,96px)]">
            <div className="font-display text-[11px] uppercase tracking-[0.14em] text-[#6B7C93]">{fr ? 'BIRDY en situation' : 'BIRDY in action'}</div>
            <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {gallery.map(([src, label]) => (
                <figure key={src} className="novar-glass novar-lift m-0 overflow-hidden rounded-[18px]">
                  <Image src={src} alt={label} width={1280} height={800} className="block aspect-[16/10] w-full object-cover object-top" />
                  <figcaption className="border-t border-[#0D1B2A]/[0.08] px-3.5 py-3 text-[13px] font-semibold text-[#44546B]">{label}</figcaption>
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
  const fr = locale === 'fr';

  const items: readonly (readonly [string, string, string])[] = isCustom
    ? fr
      ? [
          ['01', 'Comprendre', 'Observer les opérations, les contraintes et les décisions à améliorer.'],
          ['02', 'Concevoir', 'Définir une solution claire, utile et simple à faire évoluer.'],
          ['03', 'Construire', 'Livrer par étapes, vérifier avec les utilisateurs et documenter.'],
          ['04', 'Accompagner', 'Former les équipes et faire progresser la solution dans le temps.'],
        ]
      : [
          ['01', 'Understand', 'Observe operations, constraints and the decisions to improve.'],
          ['02', 'Design', 'Define a clear, useful solution that is simple to evolve.'],
          ['03', 'Build', 'Deliver in stages, validate with users and document.'],
          ['04', 'Support', 'Train teams and improve the solution over time.'],
        ]
    : fr
      ? [
          ['01', 'Audit technique', 'État des lieux des outils, des données et des risques opérationnels.'],
          ['02', 'Architecture', 'Choix techniques, intégrations et trajectoire de mise en œuvre.'],
          ['03', 'Formation', 'Prise en main des outils par les équipes, en français.'],
          ['04', 'DSI externalisée', 'Un interlocuteur technique durable pour les organisations sans DSI.'],
        ]
      : [
          ['01', 'Technical audit', 'Assessment of tools, data and operational risks.'],
          ['02', 'Architecture', 'Technical choices, integrations and implementation path.'],
          ['03', 'Training', 'Team onboarding to the tools, in French.'],
          ['04', 'Outsourced IT', 'A durable technical partner for organizations without an in-house IT team.'],
        ];

  return (
    <>
      <PageHero eyebrow={fr ? 'Services NOVAR' : 'NOVAR services'} title={copy.name} description={copy.summary} />
      <section className="relative z-[1] mx-auto max-w-[1200px] px-[clamp(20px,4vw,32px)] pb-[clamp(48px,7vw,80px)]">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(([num, title, body]) => (
            <div key={num} className="novar-glass rounded-[18px] p-7">
              <span className="font-display text-[11px] text-[#5B6E86]">{num}</span>
              <h2 className="mt-3 text-[17px] font-bold text-[#0D1B2A]">{title}</h2>
              <p className="mt-2 text-[14px] leading-[1.65] text-[#44546B]">{body}</p>
            </div>
          ))}
        </div>
        <div className="novar-glass mt-8 rounded-[22px] p-8 sm:p-10">
          <h2 className="text-[clamp(22px,3.4vw,28px)] font-bold tracking-[-0.02em] text-[#0D1B2A]">{fr ? 'Chaque mission commence par un échange clair.' : 'Every engagement starts with a clear conversation.'}</h2>
          <p className="mt-4 max-w-2xl text-[15px] leading-[1.7] text-[#44546B]">{fr ? 'Les prestations personnalisées sont proposées sur devis, après compréhension du besoin, du périmètre et des contraintes.' : 'Tailored engagements are quoted after we understand the need, scope and constraints.'}</p>
          <Link href={fr ? '/contact?topic=sur-mesure' : '/en/contact?topic=sur-mesure'} className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[#0D1B2A] px-5 py-[13px] text-[14px] font-semibold text-white transition-colors hover:bg-[#16304A]">{fr ? 'Présenter votre besoin' : 'Tell us about your need'}<ArrowRight className="h-4 w-4" aria-hidden /></Link>
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
  const { version, datePublished } = await getLatestReleaseMeta();
  const history = await getReleaseHistory(4);
  const dateLabel = new Date(datePublished).toLocaleDateString(isFr ? 'fr-FR' : 'en-US', { day: 'numeric', month: 'long', year: 'numeric' });

  // Liens internes stables : l'endpoint /api/download/<os> résout la
  // dernière release BIRDY au clic (cf. src/app/api/download/[os]).
  const pickerPlatforms = [
    { os: 'windows' as const, name: 'Windows 10 & 11', file: isFr ? "Programme d'installation (.exe)" : 'Installer (.exe)', href: '/api/download/windows' },
    { os: 'mac' as const, name: 'macOS', file: '.dmg · Apple Silicon & Intel', href: '/api/download/mac' },
    { os: 'linux' as const, name: 'Linux — Debian / Ubuntu', file: '.deb · amd64', href: '/api/download/deb' },
    { os: 'linux' as const, name: 'Linux — AppImage', file: '.AppImage · amd64', href: '/api/download/appimage' },
  ];

  const infoCards: [string, string][] = [
    [isFr ? 'Version' : 'Version', version],
    [isFr ? 'Publiée le' : 'Published' , dateLabel],
    [isFr ? 'Licence' : 'License', isFr ? 'Gratuite, sans abonnement' : 'Free, no subscription'],
    [isFr ? 'Fonctionnement' : 'Runs', isFr ? 'Hors ligne, données locales' : 'Offline, local data'],
  ];

  const config: [string, string][] = [
    [isFr ? 'Système' : 'System', 'Windows 10 · macOS 12 · Ubuntu 22.04'],
    [isFr ? 'Processeur' : 'Processor', isFr ? '64 bits, 2 cœurs' : '64-bit, 2 cores'],
    [isFr ? 'Mémoire' : 'Memory', isFr ? '4 Go (8 Go recommandés)' : '4 GB (8 GB recommended)'],
    [isFr ? 'Espace disque' : 'Disk space', '500 Mo'],
    [isFr ? 'Connexion' : 'Connection', isFr ? 'Aucune requise' : 'None required'],
  ];

  return (
    <>
      {/* Héros navy + cartes info (version/date dynamiques depuis GitHub) */}
      <section className="novar-hero">
        <div className="novar-hero-bg" />
        <div className="novar-hero-glow" />
        <div className="novar-hero-horizon" />
        <div className="relative mx-auto max-w-[1200px] px-[clamp(20px,4vw,32px)] pb-[clamp(120px,16vw,180px)] pt-[clamp(56px,7vw,92px)]">
          <div className="font-display text-[11px] font-semibold uppercase tracking-[0.14em] text-[#9AD6FF]">BIRDY / {isFr ? 'Téléchargements' : 'Downloads'}</div>
          <h1 className="mt-4 text-[clamp(38px,6.5vw,72px)] font-bold leading-[0.98] tracking-[-0.045em] text-white [overflow-wrap:anywhere]">{isFr ? 'Télécharger BIRDY' : 'Download BIRDY'}</h1>
          <p className="mt-5 max-w-[42em] text-[16px] leading-[1.7] text-[#B4C9DE]">{isFr ? 'Choisissez le paquet adapté à votre système. Chaque lien pointe vers la dernière version publiée par NOVAR — aucun compte, aucun abonnement.' : 'Choose the package for your system. Each link points to the latest release published by NOVAR — no account, no subscription.'}</p>
          <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
            {infoCards.map(([label, value]) => (
              <div key={label} className="rounded-[16px] border border-white/[0.12] bg-white/[0.05] p-5 backdrop-blur-[10px]">
                <div className="font-display text-[10.5px] font-semibold uppercase tracking-[0.14em] text-[#8FAAC6]">{label}</div>
                <div className="mt-2.5 text-[17px] font-bold text-white">{value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Choix de la plateforme — systeme detecte automatiquement */}
      <section className="relative z-[1] mx-auto max-w-[1200px] px-[clamp(20px,4vw,32px)] py-[clamp(56px,7vw,88px)]">
        <DownloadPicker platforms={pickerPlatforms} labels={{ recommended: isFr ? 'Recommandé pour vous' : 'Recommended for you', others: isFr ? 'Autres systèmes' : 'Other systems', download: isFr ? 'Télécharger' : 'Download' }} />
      </section>

      {/* Avant d'installer */}
      <section className="relative z-[1] mx-auto max-w-[1200px] px-[clamp(20px,4vw,32px)] pb-[clamp(56px,7vw,88px)]">
        <div className="novar-glass rounded-[22px] p-7">
          <div className="flex items-start gap-3">
            <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-amber-600" aria-hidden />
            <div>
              <h2 className="text-xl font-bold text-[#0D1B2A]">
                {isFr ? 'À l’installation, un avertissement peut s’afficher — c’est normal' : 'A warning may appear during install — this is normal'}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-[#44546B]">
                {isFr
                  ? 'BIRDY est édité par un jeune studio et n’est pas encore signé par un certificat payant. Windows (SmartScreen) affiche donc un message « éditeur inconnu » : il signale seulement que l’application est récente et peu téléchargée, pas qu’elle est dangereuse.'
                  : 'BIRDY is published by a young studio and is not yet signed with a paid certificate. Windows (SmartScreen) therefore shows an “unknown publisher” message: it only means the app is new and rarely downloaded, not that it is unsafe.'}
              </p>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-[#0D1B2A]/10 bg-white p-4">
                  <h3 className="text-sm font-bold text-[#0D1B2A]">Windows — SmartScreen</h3>
                  <ol className="mt-2 list-decimal space-y-1 pl-4 text-sm leading-relaxed text-[#44546B]">
                    <li>{isFr ? 'Au téléchargement, cliquez « Conserver ».' : 'When downloading, click “Keep”.'}</li>
                    <li>{isFr ? 'Ouvrez le fichier, puis cliquez « Informations complémentaires ».' : 'Open the file, then click “More info”.'}</li>
                    <li>{isFr ? 'Cliquez « Exécuter quand même ».' : 'Click “Run anyway”.'}</li>
                  </ol>
                </div>
                <div className="rounded-xl border border-[#0D1B2A]/10 bg-white p-4">
                  <h3 className="text-sm font-bold text-[#0D1B2A]">macOS — Gatekeeper</h3>
                  <ol className="mt-2 list-decimal space-y-1 pl-4 text-sm leading-relaxed text-[#44546B]">
                    <li>{isFr ? 'Faites un clic droit sur l’application, puis « Ouvrir ».' : 'Right-click the app, then “Open”.'}</li>
                    <li>{isFr ? 'Confirmez « Ouvrir » dans la fenêtre qui apparaît.' : 'Confirm “Open” in the dialog that appears.'}</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Configuration requise */}
      <section className="relative z-[1] mx-auto max-w-[1200px] px-[clamp(20px,4vw,32px)] pb-[clamp(56px,7vw,88px)]">
        <div className="font-display text-[11px] font-semibold uppercase tracking-[0.14em] text-[#6B7C93]">{isFr ? 'Configuration requise' : 'System requirements'}</div>
        <h2 className="mt-3 text-[clamp(24px,3.8vw,30px)] font-bold tracking-[-0.025em] text-[#0D1B2A]">{isFr ? 'Ce qu’il faut sur le poste.' : 'What you need on the machine.'}</h2>
        <div className="novar-glass mt-6 overflow-hidden rounded-[18px]">
          <dl className="divide-y divide-[#0D1B2A]/8">
            {config.map(([label, value]) => (
              <div key={label} className="grid grid-cols-1 gap-1 px-6 py-4 sm:grid-cols-[220px_1fr] sm:gap-4">
                <dt className="text-[13px] font-semibold uppercase tracking-[0.08em] text-[#5B6E86]">{label}</dt>
                <dd className="text-[15px] font-medium text-[#0D1B2A]">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Historique des versions (réel, depuis GitHub) */}
      {history.length > 0 && (
        <section className="relative z-[1] mx-auto max-w-[1200px] px-[clamp(20px,4vw,32px)] pb-[clamp(64px,8vw,96px)]">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <div className="font-display text-[11px] font-semibold uppercase tracking-[0.14em] text-[#6B7C93]">{isFr ? 'Historique' : 'History'}</div>
              <h2 className="mt-3 text-[clamp(24px,3.8vw,30px)] font-bold tracking-[-0.025em] text-[#0D1B2A]">{isFr ? 'Versions publiées.' : 'Published releases.'}</h2>
            </div>
            <a href={RELEASES_ALL_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm font-bold text-[#1E3A8A] transition-colors hover:text-[#0D1B2A]">{isFr ? 'Voir toutes les releases' : 'See all releases'}<ArrowRight className="h-3.5 w-3.5" aria-hidden /></a>
          </div>
          <div className="novar-glass mt-6 overflow-hidden rounded-[18px]">
            <ul className="divide-y divide-[#0D1B2A]/8">
              {history.map((r, i) => (
                <li key={r.version} className="grid grid-cols-[auto_1fr] items-center gap-4 px-6 py-4 sm:grid-cols-[120px_160px_1fr]">
                  <span className="font-display text-[16px] font-bold text-[#0D1B2A]">{r.version}</span>
                  <span className="font-display text-[13px] text-[#6B7C93]">{r.datePublished ? new Date(r.datePublished).toLocaleDateString(isFr ? 'fr-FR' : 'en-US', { day: 'numeric', month: 'short', year: 'numeric' }) : ''}</span>
                  <span className="hidden text-[14px] text-[#44546B] sm:block">{i === 0 ? (isFr ? 'Dernière version publiée.' : 'Latest published release.') : (isFr ? 'Correctifs et améliorations.' : 'Fixes and improvements.')}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
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
            return <div key={title as string} className="novar-glass rounded-[18px] p-7"><CardIcon className="h-5 w-5 text-[#1E3A8A]" aria-hidden /><h2 className="mt-5 text-xl font-bold text-[#0D1B2A]">{title as string}</h2><p className="mt-2 text-sm leading-relaxed text-[#44546B]">{body as string}</p></div>;
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
