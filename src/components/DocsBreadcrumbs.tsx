import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

export function DocsBreadcrumbs({ trail }: { trail: { label: string; href?: string }[] }) {
  return (
    <nav className="flex items-center gap-1.5 text-sm text-slate-500 dark:text-slate-400 mb-4" aria-label="Fil d'Ariane">
      <Link href="/" className="hover:text-slate-900 dark:hover:text-white">
        <Home className="h-3.5 w-3.5" />
      </Link>
      {trail.map((b, i) => (
        <span key={i} className="flex items-center gap-1.5">
          <ChevronRight className="h-3.5 w-3.5" />
          {b.href ? (
            <Link href={b.href} className="hover:text-slate-900 dark:hover:text-white">
              {b.label}
            </Link>
          ) : (
            <span className="text-slate-900 dark:text-white">{b.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
