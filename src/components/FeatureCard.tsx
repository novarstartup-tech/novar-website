import Link from 'next/link';
import { ArrowRight, type LucideIcon } from 'lucide-react';

type Props = { icon?: LucideIcon; title: string; description: string; href?: string; badge?: string };

export function FeatureCard({ icon: Icon, title, description, href, badge }: Props) {
  const inner = (
    <div className="group relative h-full rounded-2xl border border-novar-line bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-novar-ink/20 hover:shadow-lifted">
      {badge && (
        <span className="absolute right-5 top-5 rounded-full bg-novar-accent-soft px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-novar-accent">
          {badge}
        </span>
      )}
      {Icon && (
        <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-novar-surface-2 text-novar-ink ring-1 ring-novar-line transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-105">
          <Icon className="h-5 w-5" />
        </div>
      )}
      <h3 className="font-display text-lg font-semibold text-novar-ink">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-novar-muted">{description}</p>
      {href && (
        <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-novar-ink transition-all group-hover:gap-2">
          En savoir plus <ArrowRight className="h-3.5 w-3.5" />
        </span>
      )}
    </div>
  );
  if (href) return <Link href={href} className="block h-full">{inner}</Link>;
  return inner;
}
