'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
import { ArrowRight, Layers, Wrench, Search, Code, Plug } from 'lucide-react';

const ICON_MAP = {
  layers: Layers,
  wrench: Wrench,
  search: Search,
  code: Code,
  plug: Plug,
} as const;

type Props = {
  icon: keyof typeof ICON_MAP;
  title: string;
  description: string;
  href: string;
  cta: string;
  index?: number;
};

/**
 * ApproachCard — card avec hover lift + arrow nudge.
 * Variante simple de ProductSpotlight pour les sections "modele" / "services".
 */
export function ApproachCard({ icon, title, description, href, cta, index = 0 }: Props) {
  const Icon = ICON_MAP[icon];
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.4, delay: index * 0.08, ease: 'easeOut' }}
    >
      <Link href={href} className="group block h-full">
        <motion.div
          whileHover={{ y: -4 }}
          transition={{ duration: 0.25 }}
          className="relative h-full overflow-hidden rounded-2xl border border-novar-line bg-white p-8 transition-all duration-300 group-hover:border-novar-ink/20 group-hover:shadow-lifted"
        >
          <div
            className="absolute inset-0 -z-10 bg-gradient-to-br from-novar-accent-soft/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            aria-hidden
          />
          <motion.div
            whileHover={{ rotate: -4, scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-novar-surface-2 text-novar-ink ring-1 ring-novar-line"
          >
            <Icon className="h-5 w-5" />
          </motion.div>
          <h3 className="mt-6 font-display text-xl font-semibold text-novar-ink">
            {title}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-novar-muted">
            {description}
          </p>
          <span className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-novar-ink transition-all group-hover:gap-2">
            {cta} <ArrowRight className="h-3.5 w-3.5" />
          </span>
        </motion.div>
      </Link>
    </motion.div>
  );
}
