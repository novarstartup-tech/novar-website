import { NextResponse, type NextRequest } from 'next/server';

/**
 * Middleware NOVAR — Tier 1 cybersécurité site marketing.
 *
 * Rôle : poser une Content-Security-Policy (CSP) avec un nonce
 * cryptographiquement aléatoire à chaque requête HTML, pour les inline
 * scripts générés par Next.js (RSC streaming, hydration). Sans nonce, on
 * serait obligé d'autoriser `unsafe-inline` qui ouvre la porte au XSS.
 *
 * Stratégie :
 *   - Génère un nonce base64 (16 octets) par requête HTML
 *   - Pose le header `Content-Security-Policy` côté navigateur
 *   - Forward le nonce dans `x-nonce` côté request (lisible côté
 *     Server Component via `headers()` si on en a besoin un jour)
 *   - Skip pour les fichiers statiques (`/_next/static`, fonts, images,
 *     favicons) qui n'exécutent pas de JS — pas de CSP nécessaire
 *
 * Choix CSP :
 *   - default-src 'self'             : tout vient de notre origine par défaut
 *   - script-src 'self' 'nonce-X' 'strict-dynamic' : Next.js inline scripts
 *     + scripts dynamiquement chargés (suffisant en production grâce à
 *     'strict-dynamic' qui rend les host-source obsolètes)
 *   - style-src 'self' 'unsafe-inline' : Tailwind 4 + Next.js streaming
 *     styles inlinent du CSS critique. C'est le seul compromis Tier 1
 *     acceptable — Tier 2/3 utiliserait des hashes par stylesheet.
 *   - img-src 'self' data: blob: https: : on sert nos images depuis
 *     /public + on autorise les data: URIs pour les SVG inline + https
 *     pour les images optimisées par Vercel
 *   - font-src 'self' data:          : Google Fonts est self-hosted
 *   - connect-src 'self'             : seul notre back-end (API contact)
 *     est appelé en fetch. Resend tape côté serveur, pas client.
 *   - frame-ancestors 'none'         : double-rideau anti-clickjacking
 *     (en plus du X-Frame-Options DENY)
 *   - base-uri 'self'                : empêche un attaquant XSS d'injecter
 *     <base href> pour rediriger les liens relatifs
 *   - form-action 'self'             : seuls nos endpoints reçoivent les
 *     formulaires (le contact form POST sur /api/contact)
 *   - object-src 'none'              : pas de Flash / Java / plugin
 *   - upgrade-insecure-requests      : force HTTPS sur toutes les sous-
 *     ressources, même si un lien http:// traîne quelque part
 *
 * En développement, on relâche `script-src` pour autoriser le HMR
 * (eval, websocket dev server) — sinon Next.js ne se recharge pas.
 */
export function middleware(request: NextRequest) {
  // Skip the static asset paths — pas de CSP nécessaire et ça évite des
  // headers inutiles sur des centaines de requêtes par page
  const pathname = request.nextUrl.pathname;
  if (
    pathname.startsWith('/_next/static') ||
    pathname.startsWith('/_next/image') ||
    pathname.startsWith('/fonts') ||
    pathname.startsWith('/logos') ||
    pathname.startsWith('/icons') ||
    pathname.startsWith('/favicons') ||
    pathname.startsWith('/products') ||
    pathname === '/favicon.ico' ||
    pathname === '/robots.txt' ||
    pathname === '/sitemap.xml' ||
    pathname.startsWith('/.well-known')
  ) {
    return NextResponse.next();
  }

  const isDev = process.env.NODE_ENV !== 'production';

  // Nonce 16 bytes -> base64 (~24 chars)
  const nonceBytes = new Uint8Array(16);
  crypto.getRandomValues(nonceBytes);
  const nonce = btoa(String.fromCharCode(...nonceBytes));

  const scriptSrc = isDev
    ? `'self' 'nonce-${nonce}' 'unsafe-eval' 'unsafe-inline'`
    : `'self' 'nonce-${nonce}' 'strict-dynamic'`;

  const csp = [
    `default-src 'self'`,
    `script-src ${scriptSrc}`,
    `style-src 'self' 'unsafe-inline'`,
    `img-src 'self' data: blob: https:`,
    `font-src 'self' data:`,
    `connect-src 'self'${isDev ? ' ws: wss:' : ''}`,
    `frame-ancestors 'none'`,
    `base-uri 'self'`,
    `form-action 'self'`,
    `object-src 'none'`,
    `upgrade-insecure-requests`,
  ].join('; ');

  // Forward le nonce sur la request — accessible côté Server Components
  // via `headers().get('x-nonce')` si on en a besoin
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-nonce', nonce);

  const response = NextResponse.next({
    request: { headers: requestHeaders },
  });
  response.headers.set('Content-Security-Policy', csp);
  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except those handled by the explicit skip-list
     * inside the middleware (faster than running middleware then bailing).
     * We still match `/api/*` because POST endpoints benefit from CSP-aware
     * Origin/Referrer hardening on rare error pages.
     */
    {
      source:
        '/((?!_next/static|_next/image|fonts|logos|icons|favicons|products|favicon.ico|robots.txt|sitemap.xml|.well-known).*)',
    },
  ],
};
