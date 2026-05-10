'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { HeroBackdrop } from './HeroBackdrop';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <HeroBackdrop />

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
            className="inline-flex items-center gap-2 rounded-full border border-novar-line bg-white/85 backdrop-blur-sm px-3.5 py-1.5 text-xs font-medium text-novar-muted shadow-soft"
          >
            <Sparkles className="h-3.5 w-3.5 text-novar-accent" />
            <motion.span
              animate={{ scale: [1, 1.3, 1], opacity: [1, 0.7, 1] }}
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
            Le logiciel qui propulse
            <br />
            <span className="gradient-text-novar">les entreprises africaines.</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="mx-auto mt-7 max-w-2xl text-lg sm:text-xl text-novar-muted leading-relaxed"
          >
            ERP OHADA, AgriTech avicole, développements sur mesure. NOVAR
            édite trois propositions complémentaires pour que chaque
            organisation africaine — du commerçant à l&apos;exploitation
            agro-industrielle — trouve l&apos;outil qui lui correspond.
          </motion.p>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3"
          >
            <Link href="/produits" className="btn-primary group">
              Découvrir nos produits{' '}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link href="/services/sur-mesure" className="btn-ghost">
              Lancer un projet sur mesure
            </Link>
          </motion.div>

          {/* Stats / Pills sous CTA */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="mt-14 grid grid-cols-3 gap-6 max-w-2xl mx-auto"
          >
            <Stat value="3" label="Offres complémentaires" />
            <Stat value="OHADA" label="Conformité native" />
            <Stat value="100%" label="Conçu en Afrique" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center">
      <div className="font-display text-2xl sm:text-3xl font-bold text-novar-ink tabular-nums">
        {value}
      </div>
      <div className="mt-1 text-xs uppercase tracking-wider text-novar-muted">
        {label}
      </div>
    </div>
  );
}
