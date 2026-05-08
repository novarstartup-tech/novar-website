import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function CtaBanner({
  title, description, primaryHref = '/contact', primaryLabel = 'Nous contacter',
  secondaryHref, secondaryLabel,
}: {
  title: string; description?: string;
  primaryHref?: string; primaryLabel?: string;
  secondaryHref?: string; secondaryLabel?: string;
}) {
  return (
    <section className="relative overflow-hidden rounded-2xl bg-novar-cosmic px-6 py-12 sm:px-10 sm:py-16">
      <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-novar-cyan/20 blur-3xl" />
      <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-novar-blue/20 blur-3xl" />
      <div className="relative flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">{title}</h2>
          {description && <p className="mt-2 text-slate-300">{description}</p>}
        </div>
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 flex-shrink-0">
          <Link href={primaryHref} className="inline-flex items-center justify-center gap-2 rounded-lg bg-novar-cyan px-5 py-3 text-sm font-semibold text-novar-cosmic hover:bg-novar-cyan-glow transition-colors">
            {primaryLabel} <ArrowRight className="h-4 w-4" />
          </Link>
          {secondaryHref && secondaryLabel && (
            <Link href={secondaryHref} className="inline-flex items-center justify-center rounded-lg border border-white/20 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors">
              {secondaryLabel}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
