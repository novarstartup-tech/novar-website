'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'motion/react';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { useState } from 'react';
import { ProductBackdrop } from './ProductBackdrop';

type Action = {
  label: string;
  href: string;
  external?: boolean;
  primary?: boolean;
};

type LogoVariant = 'birdy' | 'feedora';

type Props = {
  /** Logo variant — chooses image + color theme. */
  logoVariant: LogoVariant;
  /** Product name (BIRDY, FEEDORA, ...) */
  name: string;
  /** Tagline (1 line) */
  tagline: string;
  /** Long description shown after hover */
  description: string;
  /** 4-6 short bullet points displayed in a grid */
  bullets: string[];
  /** CTAs (1-2) */
  actions: Action[];
  /** Status badge (En production, etc.) */
  badge?: string;
  /** Index for stagger animation */
  index?: number;
};

/**
 * Theme par produit — neuropsychologie contextuelle :
 * - BIRDY (compta OHADA, ERP) : navy + cyan profond → confiance, expertise, serieux financier
 * - FEEDORA (AgriTech avicole) : emeraude + lime doux → croissance, vitalite, naturel
 */
const THEMES: Record<LogoVariant, {
  src: string;
  ring: string;
  accent: string;       // tailwind text-* class for tagline + bullet dots
  badgeDot: string;     // bg-* for badge pulse dot
  washFrom: string;     // gradient-from-*
  hoverBorder: string;  // ring color on hover
  bulletDot: string;    // bg color for bullets
}> = {
  birdy: {
    src: '/logos/birdy-icon-512.png',
    ring: 'ring-cyan-200',
    accent: 'text-cyan-700',
    badgeDot: 'bg-cyan-600',
    washFrom: 'from-cyan-50',
    hoverBorder: 'ring-cyan-500',
    bulletDot: 'bg-cyan-600',
  },
  feedora: {
    src: '/logos/feedora.png',
    ring: 'ring-emerald-200',
    accent: 'text-emerald-700',
    badgeDot: 'bg-emerald-600',
    washFrom: 'from-emerald-50',
    hoverBorder: 'ring-emerald-500',
    bulletDot: 'bg-emerald-600',
  },
};

export function ProductSpotlight({
  logoVariant,
  name,
  tagline,
  description,
  bullets,
  actions,
  badge = 'En production',
  index = 0,
}: Props) {
  const [hovered, setHovered] = useState(false);
  const theme = THEMES[logoVariant];

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="group relative h-full"
    >
      <motion.div
        animate={{
          y: hovered ? -6 : 0,
          boxShadow: hovered
            ? '0 1px 2px rgba(15,23,42,0.05), 0 24px 48px rgba(15,23,42,0.10)'
            : '0 1px 2px rgba(15,23,42,0.04), 0 4px 16px rgba(15,23,42,0.04)',
        }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="relative h-full overflow-hidden rounded-3xl border border-novar-line bg-white p-8 sm:p-10"
      >
        {/* Wash de fond contextuel — couleur theme produit */}
        <motion.div
          className={`absolute inset-0 -z-10 bg-gradient-to-br ${theme.washFrom} via-white to-white`}
          initial={{ opacity: 0.3 }}
          animate={{ opacity: hovered ? 1 : 0.4 }}
          transition={{ duration: 0.4 }}
        />

        {/* Backdrop visuel contextuel (volaille pour FEEDORA, finance pour BIRDY) */}
        <motion.div
          className="pointer-events-none absolute inset-0 -z-10"
          initial={{ opacity: 0.5 }}
          animate={{ opacity: hovered ? 0.9 : 0.55 }}
          transition={{ duration: 0.4 }}
        >
          <ProductBackdrop variant={logoVariant} />
        </motion.div>

        {/* Header — logo + badge */}
        <div className="flex items-start justify-between gap-4">
          <motion.div
            animate={{ scale: hovered ? 1.05 : 1 }}
            transition={{ duration: 0.3 }}
            className={`relative flex h-12 w-12 items-center justify-center rounded-xl bg-white ring-1 ${theme.ring} overflow-hidden shadow-soft`}
          >
            <Image
              src={theme.src}
              alt={name}
              width={36}
              height={36}
              style={{ objectFit: 'contain' }}
            />
          </motion.div>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-novar-line bg-white px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-novar-muted">
            <span className={`h-1.5 w-1.5 rounded-full ${theme.badgeDot}`} />
            {badge}
          </span>
        </div>

        {/* Name + tagline */}
        <h3 className="mt-7 font-display text-3xl sm:text-4xl font-bold tracking-tight text-novar-ink">
          {name}
        </h3>
        <p className={`mt-2 text-base font-medium ${theme.accent}`}>
          {tagline}
        </p>

        {/* Description */}
        <p className="mt-5 text-novar-muted leading-relaxed">{description}</p>

        {/* Bullets — fade-in stagger au hover */}
        <motion.ul
          className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 text-sm text-novar-ink-soft"
          initial="rest"
          animate={hovered ? 'hover' : 'rest'}
        >
          {bullets.map((b, i) => (
            <motion.li
              key={b}
              variants={{
                rest: { opacity: 0.7, x: 0 },
                hover: { opacity: 1, x: 4 },
              }}
              transition={{ duration: 0.25, delay: i * 0.04 }}
              className="flex items-start gap-2"
            >
              <span className={`mt-1 h-1 w-1 flex-shrink-0 rounded-full ${theme.bulletDot}`} />
              <span>{b}</span>
            </motion.li>
          ))}
        </motion.ul>

        {/* CTAs */}
        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          {actions.map((a) =>
            a.external ? (
              <a
                key={a.label}
                href={a.href}
                target="_blank"
                rel="noopener"
                className={a.primary ? 'btn-primary' : 'btn-ghost'}
              >
                {a.label} <ExternalLink className="h-4 w-4" />
              </a>
            ) : (
              <Link
                key={a.label}
                href={a.href}
                className={a.primary ? 'btn-primary' : 'btn-ghost'}
              >
                {a.label} <ArrowRight className="h-4 w-4" />
              </Link>
            ),
          )}
        </div>

        {/* Bordure colorée qui s'illumine au hover (couleur produit) */}
        <motion.div
          className={`pointer-events-none absolute inset-0 rounded-3xl ring-2 ${theme.hoverBorder}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: hovered ? 0.3 : 0 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </motion.div>
  );
}
