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
 * - Content-Security-Policy : posée en prod uniquement (cf. plus bas).
 *   On utilise 'self' + 'unsafe-inline' au lieu de nonce + strict-dynamic
 *   parce que les pages sont 100 % statiques (SSG) — Next.js ne peut
 *   pas injecter un nonce dynamique sur du HTML pré-rendu, ce qui
 *   ferait bloquer tous les chunks _next/static au runtime.
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

const csp = [
  `default-src 'self'`,
  `script-src 'self' 'unsafe-inline'`,
  `style-src 'self' 'unsafe-inline'`,
  `img-src 'self' data: blob: https:`,
  `font-src 'self' data:`,
  `connect-src 'self'`,
  `frame-ancestors 'none'`,
  `base-uri 'self'`,
  `form-action 'self'`,
  `object-src 'none'`,
  `upgrade-insecure-requests`,
].join('; ');

const prodSecurityHeaders = [
  ...securityHeaders,
  { key: 'Content-Security-Policy', value: csp },
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
  // The team section moved from its own `/equipe` page to a section
  // inside `/a-propos`. Permanent redirect (308) so old bookmarks +
  // backlinks land on the anchor instead of a 404.
  async redirects() {
    return [
      {
        source: '/equipe',
        destination: '/a-propos#equipe',
        permanent: true,
      },
    ];
  },
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
        headers: prodSecurityHeaders,
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
