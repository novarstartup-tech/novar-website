'use client';

import { motion } from 'motion/react';

type Tone = 'cyan' | 'amber' | 'violet' | 'emerald' | 'slate';

const TONES: Record<Tone, {
  washFrom: string;
  blob: string;
  blob2: string;
  accentText: string;
  dot: string;
}> = {
  cyan: {
    washFrom: 'from-cyan-50/70',
    blob: 'bg-cyan-200/30',
    blob2: 'bg-cyan-100/40',
    accentText: 'text-cyan-700',
    dot: 'bg-cyan-500',
  },
  amber: {
    washFrom: 'from-amber-50/70',
    blob: 'bg-amber-200/30',
    blob2: 'bg-amber-100/40',
    accentText: 'text-amber-700',
    dot: 'bg-amber-500',
  },
  violet: {
    washFrom: 'from-violet-50/70',
    blob: 'bg-violet-200/30',
    blob2: 'bg-violet-100/40',
    accentText: 'text-violet-700',
    dot: 'bg-violet-500',
  },
  emerald: {
    washFrom: 'from-emerald-50/70',
    blob: 'bg-emerald-200/30',
    blob2: 'bg-emerald-100/40',
    accentText: 'text-emerald-700',
    dot: 'bg-emerald-500',
  },
  slate: {
    washFrom: 'from-slate-100/70',
    blob: 'bg-slate-200/30',
    blob2: 'bg-slate-100/40',
    accentText: 'text-slate-700',
    dot: 'bg-slate-500',
  },
};

type Props = {
  /** Couleur thématique de la page (contexte) */
  tone?: Tone;
  /** Petit eyebrow uppercase au-dessus du titre */
  eyebrow?: string;
  /** Titre principal H1 */
  title: string;
  /** Description sous le titre */
  description?: string;
  /** Centré ou aligné à gauche */
  centered?: boolean;
  /** Slot enfants (CTA buttons par exemple) */
  children?: React.ReactNode;
};

/**
 * PageHero — hero générique animé pour toutes les pages secondaires.
 * Wash dégradé teinté + 2 blobs colorés flous + grille subtile + dot pattern.
 * Stagger fade-up pour les éléments. Couleur contextuelle par section.
 */
export function PageHero({
  tone = 'cyan',
  eyebrow,
  title,
  description,
  centered = false,
  children,
}: Props) {
  const t = TONES[tone];
  return (
    <section className="relative overflow-hidden border-b border-novar-line bg-white">
      {/* Wash de fond */}
      <div className={`absolute inset-0 bg-gradient-to-b ${t.washFrom} via-white to-white`} aria-hidden />
      {/* Dot pattern subtil */}
      <div className="absolute inset-0 bg-dots opacity-30" aria-hidden />
      {/* Blobs animés */}
      <motion.div
        className={`absolute -top-20 -left-20 h-80 w-80 rounded-full ${t.blob} blur-3xl`}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
        aria-hidden
      />
      <motion.div
        className={`absolute -bottom-32 -right-20 h-96 w-96 rounded-full ${t.blob2} blur-3xl`}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut', delay: 0.2 }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-20 md:py-28">
        <motion.div
          className={centered ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.1 } },
          }}
        >
          {eyebrow && (
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 12 },
                show: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.4 }}
              className={`inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] ${t.accentText}`}
            >
              <span className={`h-1.5 w-1.5 rounded-full ${t.dot}`} />
              {eyebrow}
            </motion.div>
          )}

          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 16 },
              show: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5 }}
            className="mt-4 font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-novar-ink leading-[1.1] break-words"
          >
            {title}
          </motion.h1>

          {description && (
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 12 },
                show: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5 }}
              className="mt-5 text-base sm:text-lg md:text-xl text-novar-muted leading-relaxed"
            >
              {description}
            </motion.p>
          )}

          {children && (
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 12 },
                show: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5 }}
              className="mt-10"
            >
              {children}
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
