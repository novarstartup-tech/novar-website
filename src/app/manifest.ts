import type { MetadataRoute } from 'next';
import { SITE } from '@/lib/site';

/**
 * PWA / Web App manifest. Picked up automatically by Next.js 15 at
 * `/manifest.webmanifest`. Helps with:
 *
 * - Add-to-home-screen on mobile (Chrome / Safari).
 * - Search-engine "rich results" understanding the brand identity.
 * - Lighthouse PWA score (one of the SEO ranking signals on mobile).
 */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${SITE.name} — ${SITE.baseline}`,
    short_name: SITE.name,
    description: SITE.description,
    start_url: '/',
    scope: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#ffffff',
    orientation: 'portrait',
    lang: 'fr-GN',
    icons: [
      {
        src: '/logos/novar.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/logos/novar.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
    categories: ['business', 'productivity', 'finance'],
  };
}
