'use client';

import { motion, useInView } from 'motion/react';
import { useRef, useState, useEffect } from 'react';
import { AppWindow, CircleDollarSign, MapPinned } from 'lucide-react';

/**
 * Inline SVG of the African continent silhouette. Lucide doesn't ship
 * a "continent" icon, so we draw a simplified shape that's
 * unmistakably Africa and color it via `currentColor` so it inherits
 * the tone color like any other Lucide icon.
 */
function AfricaIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="none"
      aria-hidden="true"
    >
      <path d="M14.6 2.2c-1.4-.5-3.5-.4-4.6.4-1 .7-2 .8-3 1.1-.9.3-1.7 1.1-1.8 2.1-.1.8.4 1.6 1 2.1.5.5.7 1.3.4 2-.4 1-.6 2-.4 3 .2.9.7 1.6 1 2.5.4.9.4 2 0 2.9-.3.7-.8 1.3-.9 2-.1.7.4 1.6 1.2 1.7.6.1 1.2-.3 1.7-.7.5-.5.9-1 1.5-1.4.7-.4 1.6-.5 2.4-.7.8-.2 1.6-.7 2-1.4.5-1 .2-2.1-.1-3.1-.3-1-.5-2.1-.2-3.1.4-1.3 1.3-2.4 1.6-3.7.3-1.1.1-2.4-.5-3.4-.4-.6-.9-1.1-1.3-1.7-.3-.4-.6-.9-.5-1.4.1-.5.7-.9 1.1-.5 0 0-.4-.4-1.1-.7Z" />
      <path d="M19.4 6.2c.4-.3.5-.9.2-1.3-.2-.4-.7-.6-1.1-.4-.4.2-.6.7-.4 1.1.2.4.5.7 1 .7.1 0 .2 0 .3-.1Z" opacity="0.85" />
    </svg>
  );
}

type Stat = {
  icon: React.ElementType;
  value: number | string;
  suffix?: string;
  label: string;
  tone: 'cyan' | 'emerald' | 'violet' | 'amber';
};

const STATS: Stat[] = [
  { icon: AppWindow, value: 2, label: 'Produits SaaS B2B en production', tone: 'cyan' },
  { icon: MapPinned, value: 17, label: 'Pays OHADA couverts', tone: 'violet' },
  { icon: CircleDollarSign, value: 50, suffix: '+', label: 'Devises supportées', tone: 'amber' },
  { icon: AfricaIcon, value: 100, suffix: '%', label: "Conçu pour l'Afrique", tone: 'emerald' },
];

const TONE_STYLES: Record<Stat['tone'], { bg: string; ring: string; text: string }> = {
  cyan:    { bg: 'bg-cyan-50',    ring: 'ring-cyan-200',    text: 'text-cyan-700' },
  emerald: { bg: 'bg-emerald-50', ring: 'ring-emerald-200', text: 'text-emerald-700' },
  violet:  { bg: 'bg-violet-50',  ring: 'ring-violet-200',  text: 'text-violet-700' },
  amber:   { bg: 'bg-amber-50',   ring: 'ring-amber-200',   text: 'text-amber-700' },
};

/** Counter from 0 to `value` with simple requestAnimationFrame interpolation. */
function AnimatedNumber({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1400;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - t, 3);
      setDisplay(Math.round(value * eased));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);

  return <span ref={ref}>{display}</span>;
}

export function StatsSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-20 md:py-24">
        <div className="grid grid-cols-2 gap-6 sm:gap-8 md:grid-cols-4">
          {STATS.map((s, i) => {
            const t = TONE_STYLES[s.tone];
            const Icon = s.icon;
            return (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="text-center sm:text-left"
              >
                <div className={`inline-flex h-11 w-11 items-center justify-center rounded-xl ${t.bg} ring-1 ${t.ring} ${t.text}`}>
                  <Icon className="h-5 w-5" />
                </div>
                <div className="mt-4 font-display text-4xl sm:text-5xl font-bold tracking-tight text-novar-ink tabular-nums">
                  {typeof s.value === 'number' ? <AnimatedNumber value={s.value} /> : s.value}
                  {s.suffix && <span className={t.text}>{s.suffix}</span>}
                </div>
                <div className="mt-2 text-sm leading-snug text-novar-muted">
                  {s.label}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
