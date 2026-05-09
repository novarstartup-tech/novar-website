'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'motion/react';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { useState } from 'react';

type Action = {
  label: string;
  href: string;
  external?: boolean;
  primary?: boolean;
};

type Props = {
  /** Logo variant — chooses the image to display. */
  logoVariant: 'birdy' | 'feedora';
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

const LOGO_SRC: Record<Props['logoVariant'], string> = {
  birdy: '/logos/birdy-icon-512.png',
  feedora: '/logos/feedora.png',
};

/**
 * ProductSpotlight — card produit avec hover reveal.
 * Au survol : la card s'eleve, le panneau detaille (description + bullets) se deploie,
 * les CTAs apparaissent. Mobile : tout est visible par defaut.
 */
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
        {/* Wash de fond subtil au hover */}
        <motion.div
          className="absolute inset-0 -z-10 bg-gradient-to-br from-novar-accent-soft to-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.4 }}
        />

        {/* Header — logo + badge */}
        <div className="flex items-start justify-between gap-4">
          <motion.div
            animate={{ scale: hovered ? 1.05 : 1 }}
            transition={{ duration: 0.3 }}
            className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-novar-surface-2 ring-1 ring-novar-line overflow-hidden"
          >
            <Image
              src={LOGO_SRC[logoVariant]}
              alt={name}
              width={48}
              height={48}
              style={{ objectFit: 'contain' }}
            />
          </motion.div>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-novar-line bg-white px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-novar-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-novar-accent" />
            {badge}
          </span>
        </div>

        {/* Name + tagline */}
        <h3 className="mt-7 font-display text-3xl sm:text-4xl font-bold tracking-tight text-novar-ink">
          {name}
        </h3>
        <p className="mt-2 text-base font-medium text-novar-accent">
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
              <span className="mt-1 h-1 w-1 flex-shrink-0 rounded-full bg-novar-accent" />
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

        {/* Bordure cyan qui s'illumine au hover */}
        <motion.div
          className="pointer-events-none absolute inset-0 rounded-3xl ring-2 ring-novar-accent"
          initial={{ opacity: 0 }}
          animate={{ opacity: hovered ? 0.25 : 0 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </motion.div>
  );
}
