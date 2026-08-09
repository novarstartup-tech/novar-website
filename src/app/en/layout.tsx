import type { Metadata } from 'next';
import { SITE } from '@/lib/site';

export const metadata: Metadata = {
  title: { default: 'NOVAR: SaaS Studio', template: '%s | NOVAR' },
  description: 'NOVAR builds BIRDY and FEEDORA and designs tailored software for SMEs and organizations.',
  alternates: { canonical: '/en', languages: { 'fr-GN': '/', en: '/en', 'x-default': '/' } },
  openGraph: {
    title: 'NOVAR: SaaS Studio',
    description: 'Useful B2B SaaS products and tailored software solutions for SMEs and organizations.',
    url: `${SITE.url}/en`,
    siteName: SITE.name,
    locale: 'en_US',
    type: 'website',
  },
};

export default function EnglishLayout({ children }: { children: React.ReactNode }) {
  // The <html lang> is set by the root layout (statically `fr`). App Router only
  // allows the <html> element in the root layout, so we mark this subtree as
  // English and align document.documentElement.lang client-side for assistive
  // tech and JS-rendering crawlers. A fully SSR-correct per-locale <html lang>
  // requires the `[lang]` route refactor (tracked separately).
  return (
    <div lang="en">
      <script dangerouslySetInnerHTML={{ __html: "document.documentElement.lang='en'" }} />
      {children}
    </div>
  );
}
