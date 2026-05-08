import Link from 'next/link';
import { ArrowRight, type LucideIcon } from 'lucide-react';

type Props = { icon?: LucideIcon; title: string; description: string; href?: string; badge?: string };

export function FeatureCard({ icon: Icon, title, description, href, badge }: Props) {
  const inner = (
    <div className="group relative h-full rounded-xl border border-slate-200 bg-white p-6 transition-all hover:border-novar-cyan/40 hover:shadow-lg dark:border-slate-800 dark:bg-novar-cosmic-2 dark:hover:border-novar-cyan/40">
      {badge && (
        <span className="absolute right-4 top-4 rounded-full bg-novar-cyan/10 px-2 py-0.5 text-xs font-medium text-novar-cyan">{badge}</span>
      )}
      {Icon && (
        <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-novar-cyan/10 text-novar-cyan">
          <Icon className="h-5 w-5" />
        </div>
      )}
      <h3 className="font-display text-lg font-semibold text-slate-900 dark:text-white">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{description}</p>
      {href && (
        <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-novar-blue dark:text-novar-cyan group-hover:gap-2 transition-all">
          En savoir plus <ArrowRight className="h-3.5 w-3.5" />
        </span>
      )}
    </div>
  );
  if (href) return <Link href={href} className="block h-full">{inner}</Link>;
  return inner;
}
