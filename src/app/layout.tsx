import type { Metadata } from 'next';
import { Inter, Bricolage_Grotesque, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SITE } from '@/lib/site';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const bricolage = Bricolage_Grotesque({ subsets: ['latin'], variable: '--font-bricolage', display: 'swap' });
const jetbrains = JetBrains_Mono({ subsets: ['latin'], variable: '--font-jetbrains', display: 'swap' });

export const metadata: Metadata = {
  title: { default: `${SITE.name} — ${SITE.baseline}`, template: `%s — ${SITE.name}` },
  description: SITE.description,
  metadataBase: new URL(SITE.url),
  keywords: ['NOVAR', 'BIRDY ERP', 'OHADA', 'Guinée', 'Conakry', 'logiciel sur mesure', 'PME', 'startup'],
  authors: [{ name: SITE.founder }],
  creator: SITE.name,
  openGraph: {
    title: `${SITE.name} — ${SITE.baseline}`,
    description: SITE.description,
    url: SITE.url,
    siteName: SITE.name,
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: `${SITE.name} — ${SITE.baseline}`, description: SITE.description },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const orgJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE.legalName,
    url: SITE.url,
    logo: `${SITE.url}/og.png`,
    description: SITE.description,
    sameAs: [SITE.facebook],
    address: { '@type': 'PostalAddress', addressLocality: SITE.city, addressCountry: SITE.country },
    contactPoint: { '@type': 'ContactPoint', email: SITE.email, contactType: 'customer support', areaServed: 'GN', availableLanguage: ['fr'] },
  };
  return (
    <html lang="fr" className={`${inter.variable} ${bricolage.variable} ${jetbrains.variable}`}>
      <body className="font-sans">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
