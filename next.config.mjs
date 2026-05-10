import createMDX from '@next/mdx';

const withMDX = createMDX({ extension: /\.mdx?$/ });

/**
 * Security + caching headers.
 *
 * - HSTS         : forces HTTPS for 2 years on every subdomain.
 * - X-Frame-Options DENY : prevents clickjacking via iframe embedding.
 * - X-Content-Type-Options nosniff : disables MIME sniffing.
 * - Referrer-Policy strict-origin-when-cross-origin : leaks no path
 *   on cross-origin navigation.
 * - Permissions-Policy : disables camera / mic / geo by default.
 * - X-DNS-Prefetch-Control on : speeds up outbound link clicks.
 *
 * CSP (Content-Security-Policy) is intentionally NOT set here — it
 * needs per-route nonces (Server Components + inline scripts), which
 * is a separate concern. Add it in middleware.ts when ready.
 */
const securityHeaders = [
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload',
  },
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
  },
  { key: 'X-DNS-Prefetch-Control', value: 'on' },
];

const isDev = process.env.NODE_ENV !== 'production';

/**
 * Force aucun cache HTTP en mode dev — empêche Edge / Chrome de
 * servir un vieux HTML après un redéploiement local. C'est ce qui
 * causait les hydration mismatches récurrents : le navigateur gardait
 * l'ancien Header en cache disque tandis que le bundle JS hydratait
 * la nouvelle version.
 */
const devNoCacheHeaders = [
  { key: 'Cache-Control', value: 'no-store, no-cache, must-revalidate, proxy-revalidate' },
  { key: 'Pragma', value: 'no-cache' },
  { key: 'Expires', value: '0' },
  { key: 'Surrogate-Control', value: 'no-store' },
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'mdx'],
  reactStrictMode: true,
  // Trailing slashes off — Google treats /a and /a/ as the same canonical
  // page when the homepage uses absolute canonical tags, but consistent
  // is better than guessed.
  trailingSlash: false,
  async headers() {
    if (isDev) {
      // Dev : zéro cache navigateur sur tout. Évite les hydration
      // mismatches après un nuke .next ou un changement de composant.
      return [
        {
          source: '/:path*',
          headers: [...securityHeaders, ...devNoCacheHeaders],
        },
      ];
    }
    return [
      {
        source: '/:path*',
        headers: securityHeaders,
      },
      {
        // Long-cache static assets — they have content-hashed names.
        source: '/(_next/static|fonts|logos|favicons)/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
    ];
  },
};

export default withMDX(nextConfig);
