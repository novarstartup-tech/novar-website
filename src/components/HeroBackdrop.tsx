'use client';

import { motion } from 'motion/react';

/**
 * HeroBackdrop — visuel cosmique/orbital anime en arriere-plan du Hero.
 * Evoque le mouvement, la transformation, la modernisation des secteurs
 * traditionnels. Subtle, premium, sans flashy.
 */
export function HeroBackdrop() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {/* Wash dégradé principal — cyan tres doux en haut */}
      <div className="absolute inset-x-0 top-0 h-[820px] bg-gradient-to-b from-cyan-50/70 via-white to-white" />

      {/* Cercle orbital large derrière le titre, gauche */}
      <svg
        className="absolute -left-40 top-20 h-[600px] w-[600px] opacity-50"
        viewBox="0 0 600 600"
        fill="none"
      >
        <motion.circle
          cx="300"
          cy="300"
          r="240"
          stroke="#0891B2"
          strokeWidth="1"
          fill="none"
          strokeDasharray="4 8"
          initial={{ rotate: 0, opacity: 0 }}
          animate={{ rotate: 360, opacity: 0.35 }}
          transition={{ rotate: { duration: 80, repeat: Infinity, ease: 'linear' }, opacity: { duration: 1.5 } }}
          style={{ transformOrigin: '300px 300px' }}
        />
        <motion.circle
          cx="300"
          cy="300"
          r="180"
          stroke="#10B981"
          strokeWidth="1"
          fill="none"
          strokeDasharray="2 6"
          initial={{ rotate: 0, opacity: 0 }}
          animate={{ rotate: -360, opacity: 0.3 }}
          transition={{ rotate: { duration: 60, repeat: Infinity, ease: 'linear' }, opacity: { duration: 1.5, delay: 0.3 } }}
          style={{ transformOrigin: '300px 300px' }}
        />
        <motion.circle
          cx="300"
          cy="300"
          r="120"
          stroke="#0E7490"
          strokeWidth="1.5"
          fill="none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 1.5, delay: 0.6 }}
        />
      </svg>

      {/* Globe stylise droite — represente l'Afrique/le monde modernise */}
      <svg
        className="absolute -right-32 top-32 h-[500px] w-[500px] opacity-40"
        viewBox="0 0 500 500"
        fill="none"
      >
        {/* Sphere */}
        <motion.circle
          cx="250"
          cy="250"
          r="180"
          fill="url(#hero-globe-grad)"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        />
        <defs>
          <radialGradient id="hero-globe-grad" cx="0.4" cy="0.35">
            <stop offset="0%" stopColor="#67E8F9" stopOpacity="0.4" />
            <stop offset="60%" stopColor="#0891B2" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#0E7490" stopOpacity="0.05" />
          </radialGradient>
        </defs>
        {/* Latitudes */}
        {[-60, -30, 0, 30, 60].map((lat, i) => (
          <motion.ellipse
            key={lat}
            cx="250"
            cy="250"
            rx="180"
            ry={Math.abs(180 * Math.cos((lat * Math.PI) / 180)) || 1}
            stroke="#0891B2"
            strokeWidth="0.8"
            fill="none"
            opacity={0.3}
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: i * 0.1 }}
          />
        ))}
        {/* Meridiens */}
        {[-60, -30, 0, 30, 60].map((lon, i) => {
          const rxMeridien = Math.abs(180 * Math.cos((lon * Math.PI) / 180)) || 1;
          return (
            <motion.ellipse
              key={lon}
              cx="250"
              cy="250"
              rx={rxMeridien}
              ry="180"
              stroke="#0891B2"
              strokeWidth="0.8"
              fill="none"
              opacity={0.3}
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.5 + i * 0.1 }}
            />
          );
        })}
      </svg>

      {/* Grain de bruit subtil (texture papier premium) */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' /%3E%3C/svg%3E\")",
        }}
      />

      {/* Particules flottantes */}
      {[
        { cx: 120, cy: 180, size: 3, delay: 0 },
        { cx: 880, cy: 120, size: 4, delay: 0.5 },
        { cx: 1080, cy: 400, size: 2, delay: 1 },
        { cx: 200, cy: 600, size: 3, delay: 1.5 },
        { cx: 950, cy: 700, size: 4, delay: 2 },
      ].map((p, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-cyan-500"
          style={{ left: p.cx, top: p.cy, width: p.size, height: p.size }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 0.6, 0.3, 0.6, 0],
            scale: [0, 1, 1.2, 1, 0],
            y: [0, -30, -60, -90, -120],
          }}
          transition={{ duration: 8, delay: p.delay, repeat: Infinity, ease: 'easeOut' }}
        />
      ))}
    </div>
  );
}
