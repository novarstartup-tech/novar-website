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
    <section className="relative overflow-hidden rounded-3xl border border-novar-line bg-novar-surface-2 px-6 py-14 sm:px-12 sm:py-20">
      <div className="relative flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-novar-ink">
            {title}
          </h2>
          {description && <p className="mt-3 text-lg text-novar-muted">{description}</p>}
        </div>
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 flex-shrink-0">
          <Link href={primaryHref} className="btn-primary">
            {primaryLabel} <ArrowRight className="h-4 w-4" />
          </Link>
          {secondaryHref && secondaryLabel && (
            <Link href={secondaryHref} className="btn-ghost">
              {secondaryLabel}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
