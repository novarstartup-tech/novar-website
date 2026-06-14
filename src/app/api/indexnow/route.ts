import { NextResponse } from 'next/server';
import { flattenDocs } from '@/lib/docs';
import { BLOG_POSTS } from '@/lib/blog';
import { SITE } from '@/lib/site';

/**
 * IndexNow endpoint — pings Bing / Yandex / Naver / Seznam to recrawl
 * the site instantly. Trigger after each deploy (Vercel webhook or
 * GitHub Action) with: GET https://novar.gn/api/indexnow
 *
 * Optional: ?token=<SECRET> if INDEXNOW_TRIGGER_TOKEN is set in env to
 * prevent random visitors from spamming the endpoint.
 *
 * Endpoint protocol: https://www.indexnow.org/documentation
 *
 * The key file must exist at `/<KEY>.txt` at the root of the host —
 * see `public/f8c7265ef4602de25c3aae620b6f0319.txt`.
 */

const INDEXNOW_KEY = 'f8c7265ef4602de25c3aae620b6f0319';
const KEY_LOCATION = `${SITE.url}/${INDEXNOW_KEY}.txt`;

// Endpoints to notify. api.indexnow.org fan-outs to all participating
// search engines (Bing, Yandex, Naver, Seznam, Yep), so a single call
// is enough — listing bing.com explicitly is just belt-and-braces.
const ENDPOINTS = [
  'https://api.indexnow.org/indexnow',
  'https://www.bing.com/indexnow',
];

function buildUrlList(): string[] {
  const staticRoutes = [
    '',
    '/produits',
    '/produits/birdy-erp',
    '/produits/feedora',
    '/services/sur-mesure',
    '/services/conseil',
    '/securite',
    '/telechargements',
    '/tutoriels',
    '/docs',
    '/blog',
    '/a-propos',
    '/contact',
    '/faq',
    '/legal/cgv',
    '/legal/privacy',
    '/en',
    '/en/solutions',
    '/en/products/birdy',
    '/en/products/feedora',
    '/en/services/custom-software',
    '/en/services/advisory',
    '/en/resources',
    '/en/docs',
    '/en/guides',
    '/en/insights',
    '/en/about',
    '/en/contact',
    '/en/downloads',
    '/en/security',
    '/en/legal/privacy',
    '/en/legal/terms',
  ];
  const docRoutes = flattenDocs().map((d) => `/docs/${d.slug}`);
  const blogRoutes = BLOG_POSTS.map((p) => `/blog/${p.slug}`);
  return [...staticRoutes, ...docRoutes, ...blogRoutes].map(
    (path) => `${SITE.url}${path}`,
  );
}

export async function GET(request: Request) {
  // Optional token gate
  const expected = process.env.INDEXNOW_TRIGGER_TOKEN;
  if (expected) {
    const url = new URL(request.url);
    const token = url.searchParams.get('token');
    if (token !== expected) {
      return NextResponse.json({ error: 'unauthorized' }, { status: 401 });
    }
  }

  const urlList = buildUrlList();

  const body = {
    host: new URL(SITE.url).host,
    key: INDEXNOW_KEY,
    keyLocation: KEY_LOCATION,
    urlList,
  };

  const results = await Promise.allSettled(
    ENDPOINTS.map((endpoint) =>
      fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json; charset=utf-8' },
        body: JSON.stringify(body),
      }).then(async (res) => ({
        endpoint,
        status: res.status,
        body: await res.text().catch(() => ''),
      })),
    ),
  );

  return NextResponse.json({
    submitted: urlList.length,
    keyLocation: KEY_LOCATION,
    results: results.map((r) =>
      r.status === 'fulfilled' ? r.value : { error: String(r.reason) },
    ),
  });
}
