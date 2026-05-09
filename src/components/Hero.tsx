'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Wash subtil derrière le hero */}
      <div className="absolute inset-x-0 top-0 h-[640px] bg-gradient-to-b from-novar-surface-2 to-white" aria-hidden />
      <div className="absolute inset-0 bg-dots opacity-60" aria-hidden />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 pt-28 pb-24 md:pt-36 md:pb-32 lg:pt-40 lg:pb-36">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.12 } },
          }}
        >
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-novar-line bg-white px-3 py-1 text-xs font-medium text-novar-muted shadow-soft"
          >
            <motion.span
              animate={{ scale: [1, 1.4, 1], opacity: [1, 0.6, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="h-1.5 w-1.5 rounded-full bg-novar-accent"
            />
            SaaS Studio · Conakry, Guinée
          </motion.div>

          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="mt-7 font-display text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-novar-ink leading-[1.05]"
          >
            Numériser, automatiser,
            <br />
            <span className="gradient-text-novar">optimiser les secteurs traditionnels.</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="mx-auto mt-7 max-w-2xl text-lg sm:text-xl text-novar-muted leading-relaxed"
          >
            NOVAR conçoit des produits SaaS B2B et des solutions logicielles
            sur mesure pour transformer la manière dont les entreprises
            africaines opèrent — sans douleur, sans friction.
          </motion.p>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3"
          >
            <Link href="/contact" className="btn-primary group">
              Discuter d&apos;un projet{' '}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link href="/produits" className="btn-ghost">
              Découvrir nos produits
            </Link>
          </motion.div>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs uppercase tracking-wider text-novar-muted"
          >
            <span>SaaS B2B</span>
            <span className="text-novar-line">·</span>
            <span>Développement sur mesure</span>
            <span className="text-novar-line">·</span>
            <span>OHADA · Multi-devises</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
