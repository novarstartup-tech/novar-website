import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { StarField } from './StarField';
import { SITE } from '@/lib/site';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-novar-cosmic dark:bg-novar-cosmic">
      <StarField />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-novar-cosmic/80" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-[600px] w-[1000px] rounded-full bg-novar-cyan/10 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-novar-cyan/30 bg-novar-cyan/10 px-3 py-1 text-xs font-medium text-novar-cyan mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-novar-cyan animate-pulse" />
            Conakry, Guinée — Entreprise de logiciels
          </div>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white">
            Solutions technologiques
            <br />
            <span className="gradient-text-cyan">pour startups et PME</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg sm:text-xl text-slate-300 leading-relaxed">{SITE.description}</p>
          <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <Link href="/produits" className="inline-flex items-center justify-center gap-2 rounded-lg bg-novar-cyan px-6 py-3 text-sm font-semibold text-novar-cosmic shadow-lg shadow-novar-cyan/20 hover:bg-novar-cyan-glow transition-colors">
              Découvrir nos produits <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-lg border border-novar-cyan/40 bg-transparent px-6 py-3 text-sm font-semibold text-novar-cyan hover:bg-novar-cyan/10 transition-colors">
              Discuter d&apos;un projet B2B
            </Link>
          </div>
          <div className="mt-8 flex flex-wrap gap-x-3 gap-y-2 text-xs text-slate-400">
            <span className="inline-flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />BIRDY ERP en production</span>
            <span className="text-slate-600">·</span>
            <span className="inline-flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />FEEDORA en production</span>
            <span className="text-slate-600">·</span>
            <span>Solutions sur mesure</span>
            <span className="text-slate-600">·</span>
            <span>Fintech B2B</span>
          </div>
        </div>
      </div>
    </section>
  );
}
