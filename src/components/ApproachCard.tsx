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

type Tone = 'cyan' | 'amber' | 'violet' | 'emerald' | 'neutral';

const TONES: Record<Tone, {
  iconBg: string;
  iconText: string;
  ring: string;
  hoverBorder: string;
  wash: string;
}> = {
  cyan: {
    iconBg: 'bg-cyan-50',
    iconText: 'text-cyan-700',
    ring: 'ring-cyan-200',
    hoverBorder: 'group-hover:border-cyan-300',
    wash: 'from-cyan-50/60',
  },
  amber: {
    iconBg: 'bg-amber-50',
    iconText: 'text-amber-700',
    ring: 'ring-amber-200',
    hoverBorder: 'group-hover:border-amber-300',
    wash: 'from-amber-50/60',
  },
  violet: {
    iconBg: 'bg-violet-50',
    iconText: 'text-violet-700',
    ring: 'ring-violet-200',
    hoverBorder: 'group-hover:border-violet-300',
    wash: 'from-violet-50/60',
  },
  emerald: {
    iconBg: 'bg-emerald-50',
    iconText: 'text-emerald-700',
    ring: 'ring-emerald-200',
    hoverBorder: 'group-hover:border-emerald-300',
    wash: 'from-emerald-50/60',
  },
  neutral: {
    iconBg: 'bg-novar-surface-2',
    iconText: 'text-novar-ink',
    ring: 'ring-novar-line',
    hoverBorder: 'group-hover:border-novar-ink/20',
    wash: 'from-slate-50/60',
  },
};

type Props = {
  icon: keyof typeof ICON_MAP;
  title: string;
  description: string;
  href: string;
  cta: string;
  index?: number;
  tone?: Tone;
};

/**
 * ApproachCard : card avec hover lift + icone coloree par contexte.
 */
export function ApproachCard({ icon, title, description, href, cta, index = 0, tone = 'neutral' }: Props) {
  const Icon = ICON_MAP[icon];
  const t = TONES[tone];
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
          className={`relative h-full overflow-hidden rounded-2xl border border-novar-line bg-white p-8 transition-all duration-300 ${t.hoverBorder} group-hover:shadow-lifted`}
        >
          <div
            className={`absolute inset-0 -z-10 bg-gradient-to-br ${t.wash} via-white to-white opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
            aria-hidden
          />
          <motion.div
            whileHover={{ rotate: -4, scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className={`inline-flex h-12 w-12 items-center justify-center rounded-xl ${t.iconBg} ${t.iconText} ring-1 ${t.ring}`}
          >
            <Icon className="h-5 w-5" />
          </motion.div>
          <h3 className="mt-6 font-display text-xl font-semibold text-novar-ink">
            {title}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-novar-muted">
            {description}
          </p>
          <span className={`mt-6 inline-flex items-center gap-1 text-sm font-medium ${t.iconText} transition-all group-hover:gap-2`}>
            {cta} <ArrowRight className="h-3.5 w-3.5" />
          </span>
        </motion.div>
      </Link>
    </motion.div>
  );
}
