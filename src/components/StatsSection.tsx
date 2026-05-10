'use client';

import { motion, useInView } from 'motion/react';
import { useRef, useState, useEffect } from 'react';
import { AppWindow, CircleDollarSign, MapPinned } from 'lucide-react';

/**
 * Inline SVG of the African continent silhouette. Lucide doesn't ship
 * a "continent" icon. The path below traces a recognizable Africa :
 *
 * - Wide top  : Maghreb + Sahara horn extending east toward Egypt /
 *               Sinai (peak around x≈17 / y≈3.5).
 * - Bulge SW  : West-Africa coast (Senegal -> Gulf of Guinea), the
 *               iconic widening.
 * - Sharp E.  : Horn of Africa pinched between Ethiopia and Somalia
 *               (point near x≈18 / y≈10).
 * - Pointed S : Cape of Good Hope tapering to a single vertex
 *               (x≈12.5 / y≈21.5).
 * - Madagascar: tiny island offset SE (separate sub-path).
 *
 * Drawn at viewBox 24×24 to match the lucide grid, fills via
 * `currentColor` so it tints with the parent's text color.
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
      {/* Mainland Africa */}
      <path
        d="M9 2.6
           C10.6 2.4 12.4 2.5 14 2.9
           L15.7 3.4
           L17.2 4.5
           L17.7 6
           L16.9 7.4
           L16.2 8.6
           L17.1 9.4
           L17.6 10.6
           C 17.7 11.3 17.4 11.9 16.8 12.2
           L 16.0 12.6
           L 15.6 13.8
           L 15.1 15.1
           L 14.5 16.5
           L 13.9 18
           L 13.2 19.6
           L 12.5 21.4
           L 11.7 20.4
           L 10.9 19
           L 10.2 17.4
           L 9.6 15.8
           L 9.1 14.2
           L 8.5 12.5
           L 7.9 10.9
           L 7.3 9.3
           L 6.7 7.7
           L 6.5 6.3
           L 7.1 5
           L 8 4
           Z"
      />
      {/* Madagascar */}
      <ellipse cx="19.6" cy="14.8" rx="0.7" ry="1.7" opacity="0.85" />
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
