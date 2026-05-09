import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/content/**/*.{md,mdx}',
    './mdx-components.tsx',
  ],
  // Light-only — no dark mode for the public site (premium, sober)
  darkMode: 'class',
  // Safelist : couleurs contextuelles utilisees dynamiquement par ProductSpotlight
  // (BIRDY = cyan navy = confiance, FEEDORA = emerald = AgriTech).
  // Sans cette liste, Tailwind JIT pourrait les purger en prod.
  safelist: [
    'from-cyan-50', 'from-emerald-50',
    'ring-cyan-200', 'ring-emerald-200',
    'ring-cyan-500', 'ring-emerald-500',
    'text-cyan-700', 'text-emerald-700',
    'bg-cyan-600', 'bg-emerald-600',
  ],
  theme: {
    extend: {
      colors: {
        novar: {
          // Premium light tokens
          ink: '#0B1220',
          'ink-soft': '#1F2937',
          muted: '#64748B',
          line: '#E5E7EB',
          surface: '#FFFFFF',
          'surface-2': '#F8FAFC',
          'surface-3': '#F1F5F9',
          accent: '#0891B2',
          'accent-soft': '#ECFEFF',
          blue: '#1E40AF',

          // Legacy aliases — kept so old classes still resolve, mapped to light tokens
          cosmic: '#0B1220',
          'cosmic-2': '#F1F5F9',
          cyan: '#0891B2',
          'cyan-glow': '#0E7490',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', ...defaultTheme.fontFamily.sans],
        display: ['var(--font-bricolage)', ...defaultTheme.fontFamily.sans],
        mono: ['var(--font-jetbrains)', ...defaultTheme.fontFamily.mono],
      },
      boxShadow: {
        'soft': '0 1px 2px rgba(15,23,42,0.04), 0 4px 16px rgba(15,23,42,0.04)',
        'lifted': '0 1px 2px rgba(15,23,42,0.05), 0 12px 32px rgba(15,23,42,0.06)',
      },
    },
  },
  plugins: [],
};

export default config;
