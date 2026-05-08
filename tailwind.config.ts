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
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        novar: {
          cosmic: '#0B1220',
          'cosmic-2': '#101a2e',
          cyan: '#1FD4E2',
          'cyan-glow': '#22E5F4',
          blue: '#3B82F6',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', ...defaultTheme.fontFamily.sans],
        display: ['var(--font-bricolage)', ...defaultTheme.fontFamily.sans],
        mono: ['var(--font-jetbrains)', ...defaultTheme.fontFamily.mono],
      },
    },
  },
  plugins: [],
};

export default config;
