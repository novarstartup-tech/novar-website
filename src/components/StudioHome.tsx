import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Download, Boxes } from 'lucide-react';
import type { Locale } from '@/lib/content';

const COPY = {
  fr: {
    heroEyebrow: 'SaaS Studio · Conakry',
    heroTitle: 'Votre moteur logiciel',
    heroBody: "NOVAR édite ses propres produits (BIRDY et FEEDORA) et conçoit des solutions sur mesure pour les PME et organisations de l'espace OHADA.",
    heroPrimary: 'Explorer nos solutions',
    heroSecondary: 'Parler à NOVAR',
    tagline: 'Engineering African Innovation',
    dashboard: 'Tableau de bord',
    heroBirdyCaption: 'Gestion, comptabilité et pilotage',
    productsEyebrow: 'Produits édités par NOVAR',
    productsTitle: 'Deux produits spécialisés, une même exigence.',
    free: 'Gratuit',
    birdyTitle: 'ERP & gestion comptable OHADA',
    birdyBody: "Facturer, tenir la comptabilité SYSCOHADA, suivre les stocks, la caisse, les achats et la paie, dans une seule application desktop qui fonctionne hors ligne.",
    discoverBirdy: 'Découvrir BIRDY',
    download: 'Télécharger',
    feedoraTitle: 'Formulation alimentaire avicole',
    feedoraBody: 'Composer et comparer des formules, suivre le coût au kilo et à la tonne.',
    discoverFeedora: 'Découvrir FEEDORA',
    customBadge: 'Sur mesure',
    customCardTitle: 'Le logiciel qui vous manque',
    customCardBody: 'Pour les opérations qui ne rentrent dans aucun produit standard.',
    customEyebrow: 'Solutions sur mesure',
    customTitle: 'Nous construisons aussi le logiciel qui vous manque.',
    customBody: "Pour les organisations dont les opérations ne rentrent pas dans un produit standard.",
    customCta: 'Présenter votre besoin',
    steps: [
      ['01', 'Comprendre', 'Observer les opérations et définir le problème utile à résoudre.'],
      ['02', 'Concevoir', 'Transformer les besoins en parcours simples et en architecture durable.'],
      ['03', 'Déployer', 'Livrer, former les équipes et améliorer le produit dans le temps.'],
    ],
  },
  en: {
    heroEyebrow: 'SaaS Studio · Conakry',
    heroTitle: 'Your software engine',
    heroBody: 'NOVAR builds its own products (BIRDY and FEEDORA) and designs tailored software for SMEs and organizations across the OHADA region.',
    heroPrimary: 'Explore our solutions',
    heroSecondary: 'Talk to NOVAR',
    tagline: 'Engineering African Innovation',
    dashboard: 'Dashboard',
    heroBirdyCaption: 'Management, accounting & control',
    productsEyebrow: 'Products built by NOVAR',
    productsTitle: 'Two specialized products, one standard.',
    free: 'Free',
    birdyTitle: 'OHADA ERP & accounting',
    birdyBody: 'Invoicing, SYSCOHADA accounting, inventory, cash, purchasing and payroll, in a single desktop app that works offline.',
    discoverBirdy: 'Explore BIRDY',
    download: 'Download',
    feedoraTitle: 'Poultry feed formulation',
    feedoraBody: 'Build and compare formulas, track cost per kilo and per tonne.',
    discoverFeedora: 'Explore FEEDORA',
    customBadge: 'Tailored',
    customCardTitle: 'The software you are missing',
    customCardBody: 'For operations that fit no standard product.',
    customEyebrow: 'Tailored software',
    customTitle: 'We also build the software you are missing.',
    customBody: 'For organizations whose operations do not fit a standard product.',
    customCta: 'Tell us about your need',
    steps: [
      ['01', 'Understand', 'Observe operations and define the useful problem to solve.'],
      ['02', 'Design', 'Turn needs into simple journeys and a durable architecture.'],
      ['03', 'Deploy', 'Deliver, train teams and improve the product over time.'],
    ],
  },
} as const;

export function StudioHome({ locale }: { locale: Locale }) {
  const c = COPY[locale];
  const route = (fr: string, en: string) => (locale === 'fr' ? fr : en);

  return (
    <>
      {/* Héros navy à horizon courbe */}
      <section className="novar-hero">
        <div className="novar-hero-bg" />
        <div className="novar-hero-glow" />
        <div className="novar-hero-horizon" />
        <div className="relative mx-auto grid max-w-[1200px] items-center gap-12 px-[clamp(20px,4vw,32px)] pb-[clamp(140px,20vw,210px)] pt-[clamp(56px,7vw,92px)] lg:grid-cols-2 lg:gap-[72px]">
          <div className="min-w-0">
            <h1 className="text-[clamp(34px,7.5vw,64px)] font-bold leading-[1.02] tracking-[-0.04em] text-white [overflow-wrap:anywhere] [text-wrap:balance]">{c.heroTitle}</h1>
            <p className="mt-6 max-w-[34em] text-[15px] leading-[1.7] text-[#B4C9DE]">{c.heroBody}</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href={route('/produits', '/en/solutions')} className="inline-flex items-center gap-2 rounded-xl bg-[#38B6FF] px-6 py-[15px] text-[14.5px] font-bold text-[#0D1B2A] shadow-[0_12px_34px_rgba(56,182,255,0.32)] transition-colors hover:bg-[#62C6FF]">{c.heroPrimary}<ArrowRight className="h-4 w-4" aria-hidden /></Link>
              <Link href={route('/contact', '/en/contact')} className="inline-flex items-center rounded-xl border border-white/[0.18] bg-white/[0.06] px-6 py-[15px] text-[14.5px] font-semibold text-white backdrop-blur-[14px] transition-colors hover:bg-white/[0.12]">{c.heroSecondary}</Link>
            </div>
          </div>
          {/* Composition produits : 3 cartes cliquables (BIRDY · FEEDORA · sur-mesure), relief 3D */}
          <div className="relative mx-auto w-full min-w-0 max-w-[560px] pb-[clamp(44px,9vw,80px)] lg:mx-0">
            {/* BIRDY : carte principale, inclinée vers la gauche */}
            <Link
              href={route('/produits/birdy-erp', '/en/products/birdy')}
              aria-label={route('Découvrir BIRDY', 'Explore BIRDY')}
              style={{ transform: 'perspective(1500px) rotateY(-18deg) rotateX(6deg)' }}
              className="block w-[74%] overflow-hidden rounded-[18px] border border-white/70 bg-white shadow-[0_40px_90px_rgba(0,0,0,0.5)] transition-[filter,box-shadow] duration-300 hover:brightness-[1.03] hover:shadow-[0_46px_100px_rgba(56,182,255,0.28)]"
            >
              <div className="flex items-center justify-between border-b border-[#0D1B2A]/10 px-[16px] py-[12px]">
                <strong className="text-[13px] font-bold tracking-[0.02em] text-[#0D1B2A]">BIRDY</strong>
                <span className="hidden font-display text-[10.5px] text-[#6B7C93] sm:inline">{c.heroBirdyCaption}</span>
              </div>
              <Image src="/products/birdy-dashboard-studio.png" alt="Tableau de bord BIRDY" width={1280} height={800} priority className="block aspect-[16/10] w-full object-cover object-top" />
            </Link>

            {/* FEEDORA : décalée bas-droite, inclinée vers la droite */}
            <Link
              href={route('/produits/feedora', '/en/products/feedora')}
              aria-label={route('Découvrir FEEDORA', 'Explore FEEDORA')}
              style={{ transform: 'perspective(1500px) rotateY(18deg) rotateX(6deg)' }}
              className="absolute right-0 top-[34%] block w-[50%] overflow-hidden rounded-[15px] border-2 border-white bg-white shadow-[0_28px_64px_rgba(0,0,0,0.58)] transition-[filter,box-shadow] duration-300 hover:brightness-[1.03] hover:shadow-[0_34px_74px_rgba(56,182,255,0.30)]"
            >
              <div className="flex items-center justify-between gap-2 border-b border-[#0D1B2A]/10 px-[13px] py-[9px]">
                <strong className="text-[11.5px] font-bold tracking-[0.02em] text-[#0D1B2A]">FEEDORA</strong>
                <span className="hidden truncate font-display text-[9.5px] text-[#6B7C93] lg:inline">{c.feedoraTitle}</span>
              </div>
              <Image src="/products/feedora-formulation.png" alt="Formulation FEEDORA" width={1280} height={800} className="block aspect-[16/11] w-full object-cover object-top" />
            </Link>

            {/* Sur-mesure : 3e carte de la même famille, navy, inclinée vers la gauche */}
            <Link
              href={route('/services/sur-mesure', '/en/services/custom-software')}
              aria-label={route('Découvrir les solutions sur mesure', 'Explore custom software')}
              style={{ transform: 'perspective(1500px) rotateY(-15deg) rotateX(6deg)' }}
              className="group absolute left-0 top-[58%] block w-[47%] overflow-hidden rounded-[15px] border border-white/[0.14] bg-[#0D1B2A] shadow-[0_28px_64px_rgba(0,0,0,0.6)] transition-[box-shadow] duration-300 hover:shadow-[0_34px_74px_rgba(56,182,255,0.34)]"
            >
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_100%_at_86%_10%,rgba(56,182,255,0.30),transparent_70%)]" />
              <div className="relative p-[15px]">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-[#38B6FF]/[0.16] text-[#7FC7F5]"><Boxes className="h-4 w-4" aria-hidden /></span>
                <div className="mt-3 font-display text-[10px] font-semibold uppercase tracking-[0.14em] text-[#7FC7F5]">{c.customBadge}</div>
                <div className="mt-1 text-[13.5px] font-bold leading-snug text-white">{c.customCardTitle}</div>
                <span className="mt-3 inline-flex items-center gap-1.5 text-[12px] font-semibold text-[#8FC4EC] transition-transform group-hover:translate-x-0.5">{route('Découvrir', 'Explore')}<ArrowRight className="h-3.5 w-3.5" aria-hidden /></span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Produits : bento verre */}
      <section className="relative z-[1] mx-auto max-w-[1200px] px-[clamp(20px,4vw,32px)] py-[clamp(64px,8vw,96px)]">
        <h2 className="max-w-[20em] text-[clamp(28px,3.4vw,42px)] font-bold leading-[1.08] tracking-[-0.035em] text-[#0D1B2A]">{c.productsTitle}</h2>
        <div className="mt-11 grid grid-cols-1 gap-[18px] lg:grid-cols-3">
          <article className="novar-glass novar-lift overflow-hidden rounded-[22px] lg:col-span-2">
            <Image src="/products/birdy-sales.png" alt={route('Ventes et facturation dans BIRDY', 'Sales and invoicing in BIRDY')} width={1280} height={720} className="block aspect-[16/9] w-full object-cover object-top" />
            <div className="px-8 pb-[34px] pt-[30px]">
              <div className="font-display text-[11px] uppercase tracking-[0.12em] text-[#1E3A8A]">BIRDY · {c.free}</div>
              <h3 className="mt-3.5 text-[clamp(23px,3.6vw,28px)] font-bold tracking-[-0.03em] text-[#0D1B2A]">{c.birdyTitle}</h3>
              <p className="mt-3.5 max-w-[40em] text-[15.5px] leading-[1.7] text-[#44546B]">{c.birdyBody}</p>
              <div className="mt-6 flex flex-wrap gap-2.5">
                <Link href={route('/produits/birdy-erp', '/en/products/birdy')} className="inline-flex items-center rounded-xl bg-[#0D1B2A] px-5 py-[13px] text-[14px] font-semibold text-white transition-colors hover:bg-[#16304A]">{c.discoverBirdy}</Link>
                <Link href={route('/telechargements', '/en/downloads')} className="inline-flex items-center gap-2 rounded-xl border border-[#0D1B2A]/[0.16] bg-white px-5 py-[13px] text-[14px] font-semibold text-[#0D1B2A] transition-colors hover:bg-[#F4F7FB]"><Download className="h-4 w-4" aria-hidden />{c.download}</Link>
              </div>
            </div>
          </article>

          <div className="grid gap-[18px]">
            <article className="novar-glass novar-lift overflow-hidden rounded-[22px]">
              <Image src="/products/feedora-formulation.png" alt={route('Formulation FEEDORA', 'FEEDORA formulation')} width={1280} height={800} className="block aspect-[16/10] w-full object-cover object-top" />
              <div className="px-[26px] pb-7 pt-6">
                <div className="font-display text-[11px] uppercase tracking-[0.12em] text-[#6B7C93]">FEEDORA · {c.free}</div>
                <h3 className="mt-3 text-[22px] font-bold tracking-[-0.025em] text-[#0D1B2A]">{c.feedoraTitle}</h3>
                <p className="mt-2.5 text-[14.5px] leading-[1.65] text-[#44546B]">{c.feedoraBody}</p>
                <Link href={route('/produits/feedora', '/en/products/feedora')} className="mt-[18px] inline-flex items-center gap-1.5 text-[14px] font-bold text-[#1E3A8A] transition-colors hover:text-[#0D1B2A]">{c.discoverFeedora}<ArrowRight className="h-3.5 w-3.5" aria-hidden /></Link>
              </div>
            </article>
            <Link href={route('/services/sur-mesure', '/en/services/custom-software')} className="novar-lift relative block overflow-hidden rounded-[22px] bg-[#0D1B2A] p-7 text-white">
              <span className="pointer-events-none absolute inset-0" style={{ background: 'radial-gradient(70% 90% at 90% 10%, rgba(56,182,255,0.30), transparent 70%)' }} />
              <span className="relative block">
                <span className="block font-display text-[11px] uppercase tracking-[0.12em] text-[#7FC7F5]">{c.customBadge}</span>
                <span className="mt-3 block text-[22px] font-bold tracking-[-0.025em]">{c.customCardTitle}</span>
                <span className="mt-2.5 block text-[14.5px] leading-[1.65] text-[#B4C9DE]">{c.customCardBody}</span>
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Solutions sur mesure : démarche */}
      <section className="relative z-[1] bg-gradient-to-b from-white/0 via-white/50 to-white/[0.78] backdrop-blur-[20px]">
        <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-start gap-14 px-[clamp(20px,4vw,32px)] py-[clamp(64px,8vw,96px)] lg:grid-cols-2">
          <div>
            <h2 className="text-[clamp(24px,3.8vw,30px)] font-bold leading-[1.15] tracking-[-0.025em] text-[#0D1B2A]">{c.customTitle}</h2>
            <p className="mt-4 text-[15px] leading-[1.7] text-[#44546B]">{c.customBody}</p>
            <Link href={route('/services/sur-mesure', '/en/services/custom-software')} className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#0D1B2A] px-5 py-[13px] text-[14px] font-semibold text-white transition-colors hover:bg-[#16304A]">{c.customCta}<ArrowRight className="h-4 w-4" aria-hidden /></Link>
          </div>
          <ol className="m-0 list-none border-t border-[#0D1B2A]/[0.12] p-0">
            {c.steps.map(([number, title, body]) => (
              <li key={number} className="grid grid-cols-[64px_1fr] gap-5 border-b border-[#0D1B2A]/[0.12] py-[26px]">
                <span className="font-display text-[13px] font-semibold text-[#5B6E86]">{number}</span>
                <div>
                  <h3 className="text-[19px] font-bold text-[#0D1B2A]">{title}</h3>
                  <p className="mt-1.5 text-[14.5px] leading-[1.7] text-[#44546B]">{body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
