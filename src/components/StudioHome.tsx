import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Check, Compass, Layers3, ShieldCheck, Workflow } from 'lucide-react';
import { Hero } from '@/components/Hero';
import { BirdyLogo, FeedoraLogo } from '@/components/ProductLogo';
import { PRODUCTS, type Locale } from '@/lib/content';

const COPY = {
  fr: {
    productsEyebrow: 'Produits édités par NOVAR',
    productsTitle: 'Deux produits spécialisés. Une même exigence produit.',
    productsBody: 'BIRDY et FEEDORA répondent à des métiers différents, mais partagent la même ambition : rendre les opérations plus claires, plus fiables et plus simples à piloter.',
    birdyFeatures: ['Ventes, achats et stocks', 'Comptabilité adaptée à l’OHADA', 'Caisse, tiers, paie et reporting'],
    feedoraFeatures: ['Formulation alimentaire avicole', 'Analyse nutritionnelle détaillée', 'Comparaison des coûts et besoins'],
    discover: 'Découvrir le produit',
    free: 'Gratuit',
    customEyebrow: 'Solutions sur mesure',
    customTitle: 'Nous construisons aussi le logiciel qui manque à votre entreprise.',
    customBody: 'Pour les PME et organisations dont les opérations ne rentrent pas dans un produit standard, NOVAR conçoit des applications métier adaptées aux équipes, aux données et aux décisions réelles.',
    customSteps: [
      ['01', 'Comprendre', 'Observer les opérations et définir le problème utile à résoudre.'],
      ['02', 'Concevoir', 'Transformer les besoins en parcours simples et en architecture durable.'],
      ['03', 'Déployer', 'Livrer, former les équipes et améliorer le produit dans le temps.'],
    ],
    customCta: 'Présenter votre besoin',
    principlesEyebrow: 'Le studio',
    principlesTitle: 'Une équipe produit, pas seulement un prestataire technique.',
    principles: [
      ['Ancrage métier', 'Chaque décision part du travail réel des utilisateurs.', Compass],
      ['Construction durable', 'Des produits maintenables, documentés et prêts à évoluer.', Layers3],
      ['Exigence et fiabilité', 'Clarté, sécurité et qualité guident chaque livraison.', ShieldCheck],
    ],
    finalTitle: 'Un produit NOVAR ou une solution pensée pour vous.',
    finalBody: 'Parlons de vos opérations, de vos contraintes et du prochain progrès utile.',
    finalPrimary: 'Parler à NOVAR',
    finalSecondary: 'Explorer les solutions',
  },
  en: {
    productsEyebrow: 'Products built by NOVAR',
    productsTitle: 'Two specialized products. One product standard.',
    productsBody: 'BIRDY and FEEDORA serve different industries, but share the same ambition: making operations clearer, more reliable and easier to manage.',
    birdyFeatures: ['Sales, purchasing and inventory', 'Accounting designed for OHADA', 'Cash, partners, payroll and reporting'],
    feedoraFeatures: ['Poultry feed formulation', 'Detailed nutritional analysis', 'Cost and requirement comparison'],
    discover: 'Explore the product',
    free: 'Free',
    customEyebrow: 'Tailored software',
    customTitle: 'We also build the software your organization is missing.',
    customBody: 'For SMEs and organizations whose operations do not fit a standard product, NOVAR designs business applications around real teams, data and decisions.',
    customSteps: [
      ['01', 'Understand', 'Observe operations and define the useful problem to solve.'],
      ['02', 'Design', 'Turn needs into simple journeys and a durable architecture.'],
      ['03', 'Deploy', 'Deliver, train teams and improve the product over time.'],
    ],
    customCta: 'Tell us about your need',
    principlesEyebrow: 'The studio',
    principlesTitle: 'A product team, not only a technical provider.',
    principles: [
      ['Business first', 'Every decision starts from the work users actually do.', Compass],
      ['Built to last', 'Maintainable, documented products that are ready to evolve.', Layers3],
      ['Quality and trust', 'Clarity, security and quality guide every delivery.', ShieldCheck],
    ],
    finalTitle: 'A NOVAR product or a solution designed for you.',
    finalBody: 'Let’s discuss your operations, constraints and the next useful improvement.',
    finalPrimary: 'Talk to NOVAR',
    finalSecondary: 'Explore solutions',
  },
} as const;

export function StudioHome({ locale }: { locale: Locale }) {
  const c = COPY[locale];
  const route = (fr: string, en: string) => locale === 'fr' ? fr : en;

  return (
    <>
      <Hero locale={locale} />

      <section className="home-section bg-white">
        <div className="home-container">
          <div className="max-w-4xl">
            <span className="eyebrow">{c.productsEyebrow}</span>
            <h2 className="home-heading">{c.productsTitle}</h2>
            <p className="home-lead">{c.productsBody}</p>
          </div>

          <article className="product-editorial product-editorial-birdy">
            <div className="product-editorial-visual">
              <Image src="/products/birdy-dashboard-studio.png" alt={locale === 'fr' ? 'Tableau de bord réel de BIRDY' : 'Real BIRDY dashboard'} width={1440} height={900} className="w-full" />
            </div>
            <div className="product-editorial-copy">
              <div className="flex items-center gap-4">
                <BirdyLogo size={48} className="rounded-xl" />
                <div><div className="product-kicker">BIRDY · {c.free}</div><h3>BIRDY</h3></div>
              </div>
              <p className="product-category">{PRODUCTS.birdy.copy[locale].category}</p>
              <p className="product-description">{PRODUCTS.birdy.copy[locale].summary}</p>
              <FeatureList items={c.birdyFeatures} />
              <Link href={route('/produits/birdy-erp', '/en/products/birdy')} className="text-link">{c.discover}<ArrowRight className="h-4 w-4" aria-hidden /></Link>
            </div>
          </article>

          <article className="product-editorial product-editorial-feedora">
            <div className="product-editorial-copy">
              <div className="flex items-center gap-4">
                <FeedoraLogo size={52} className="rounded-lg" />
                <div><div className="product-kicker product-kicker-emerald">FEEDORA · {c.free}</div><h3>FEEDORA</h3></div>
              </div>
              <p className="product-category text-emerald-800">{PRODUCTS.feedora.copy[locale].category}</p>
              <p className="product-description">{PRODUCTS.feedora.copy[locale].summary}</p>
              <FeatureList items={c.feedoraFeatures} tone="emerald" />
              <Link href={route('/produits/feedora', '/en/products/feedora')} className="text-link text-link-emerald">{c.discover}<ArrowRight className="h-4 w-4" aria-hidden /></Link>
            </div>
            <div className="product-editorial-visual">
              <Image src="/products/feedora-formulation.png" alt={locale === 'fr' ? 'Interface réelle de formulation FEEDORA' : 'Real FEEDORA formulation interface'} width={1424} height={900} className="w-full" />
            </div>
          </article>
        </div>
      </section>

      <section className="home-section bg-amber-50/70">
        <div className="home-container grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <span className="eyebrow eyebrow-amber">{c.customEyebrow}</span>
            <h2 className="home-heading">{c.customTitle}</h2>
            <p className="home-lead">{c.customBody}</p>
            <Link href={route('/contact?topic=sur-mesure', '/en/contact?topic=sur-mesure')} className="btn-primary mt-8">{c.customCta}<ArrowRight className="h-4 w-4" aria-hidden /></Link>
          </div>
          <ol className="process-list">
            {c.customSteps.map(([number, title, body]) => <li key={number}><span>{number}</span><div><h3>{title}</h3><p>{body}</p></div></li>)}
          </ol>
        </div>
      </section>

      <section className="home-section bg-white">
        <div className="home-container">
          <span className="eyebrow eyebrow-violet">{c.principlesEyebrow}</span>
          <h2 className="home-heading max-w-4xl">{c.principlesTitle}</h2>
          <div className="principles-grid">
            {c.principles.map(([title, body, Icon]) => <article key={title}><Icon className="h-6 w-6 text-violet-700" aria-hidden /><h3>{title}</h3><p>{body}</p></article>)}
          </div>
        </div>
      </section>

      <section className="bg-slate-950">
        <div className="home-container flex flex-col gap-8 py-16 sm:py-20 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-cyan-300"><Workflow className="h-4 w-4" aria-hidden />NOVAR SaaS Studio</div>
            <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-white sm:text-5xl">{c.finalTitle}</h2>
            <p className="mt-4 text-lg leading-8 text-slate-300">{c.finalBody}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href={route('/contact', '/en/contact')} className="btn-primary btn-cyan">{c.finalPrimary}<ArrowRight className="h-4 w-4" /></Link>
            <Link href={route('/produits', '/en/solutions')} className="btn-dark-ghost">{c.finalSecondary}</Link>
          </div>
        </div>
      </section>
    </>
  );
}

function FeatureList({ items, tone = 'cyan' }: { items: readonly string[]; tone?: 'cyan' | 'emerald' }) {
  return <ul className="product-feature-list">{items.map((item) => <li key={item}><Check className={`h-4 w-4 ${tone === 'emerald' ? 'text-emerald-700' : 'text-cyan-700'}`} aria-hidden />{item}</li>)}</ul>;
}
