import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import type { Locale } from '@/lib/content';

const COPY = {
  fr: {
    eyebrow: 'SaaS Studio africain',
    title: 'Nous créons des produits numériques qui font avancer les entreprises.',
    body: 'NOVAR édite plusieurs logiciels spécialisés et conçoit des solutions sur mesure pour les PME et organisations.',
    primary: 'Explorer nos solutions',
    secondary: 'Parler à NOVAR',
    benefits: ['BIRDY et FEEDORA, produits par NOVAR', 'Solutions personnalisées pour vos opérations', 'Produits accessibles gratuitement'],
    birdy: 'Gestion, comptabilité et pilotage',
    feedora: 'Formulation alimentaire avicole',
  },
  en: {
    eyebrow: 'African SaaS Studio',
    title: 'We create digital products that move businesses forward.',
    body: 'NOVAR builds several specialized software products and tailored solutions for SMEs and organizations.',
    primary: 'Explore our solutions',
    secondary: 'Talk to NOVAR',
    benefits: ['BIRDY and FEEDORA, built by NOVAR', 'Tailored software for your operations', 'Products available free of charge'],
    birdy: 'Management, accounting and operations',
    feedora: 'Poultry feed formulation',
  },
} as const;

export function Hero({ locale }: { locale: Locale }) {
  const c = COPY[locale];
  const route = (fr: string, en: string) => locale === 'fr' ? fr : en;

  return (
    <section className="hero-studio">
      <div className="hero-orbit hero-orbit-left" aria-hidden />
      <div className="hero-orbit hero-orbit-right" aria-hidden />
      <div className="home-container relative grid gap-16 py-20 sm:py-24 lg:grid-cols-[0.86fr_1.14fr] lg:items-center lg:py-28">
        <div>
          <div className="eyebrow"><span className="status-dot" />{c.eyebrow}</div>
          <h1 className="mt-7 max-w-3xl font-display text-5xl font-bold leading-[0.98] tracking-[-0.055em] text-slate-950 sm:text-6xl lg:text-7xl">{c.title}</h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">{c.body}</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link href={route('/produits', '/en/solutions')} className="btn-primary group">{c.primary}<ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" /></Link>
            <Link href={route('/contact', '/en/contact')} className="btn-ghost">{c.secondary}</Link>
          </div>
          <ul className="mt-10 grid gap-3 text-sm text-slate-600">
            {c.benefits.map((benefit) => <li key={benefit} className="flex items-start gap-2.5"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-700" aria-hidden />{benefit}</li>)}
          </ul>
        </div>

        <div className="hero-products" aria-label={locale === 'fr' ? 'Aperçus de BIRDY et FEEDORA' : 'BIRDY and FEEDORA previews'}>
          <Link href={route('/produits/birdy-erp', '/en/products/birdy')} className="hero-product hero-product-main">
            <div className="hero-product-label"><strong>BIRDY</strong><span>{c.birdy}</span></div>
            <Image src="/products/birdy-dashboard-studio.png" alt={locale === 'fr' ? 'Tableau de bord BIRDY' : 'BIRDY dashboard'} width={1440} height={900} className="w-full" priority />
          </Link>
          <Link href={route('/produits/feedora', '/en/products/feedora')} className="hero-product hero-product-secondary">
            <div className="hero-product-label"><strong>FEEDORA</strong><span>{c.feedora}</span></div>
            <Image src="/products/feedora-formulation.png" alt={locale === 'fr' ? 'Formulation FEEDORA' : 'FEEDORA formulation'} width={1424} height={900} className="w-full" priority />
          </Link>
          <div className="hero-studio-note"><span>{locale === 'fr' ? 'Et aussi' : 'And also'}</span><strong>{locale === 'fr' ? 'des solutions sur mesure' : 'tailored software'}</strong></div>
        </div>
      </div>
    </section>
  );
}
