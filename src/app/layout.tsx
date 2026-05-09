import type { Metadata } from 'next';
import { Inter, Bricolage_Grotesque, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { OrganizationJsonLd, WebSiteJsonLd } from '@/components/JsonLd';
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
    locale: 'fr_GN',
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: `${SITE.name} — ${SITE.baseline}`, description: SITE.description },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${inter.variable} ${bricolage.variable} ${jetbrains.variable}`}>
      <body className="font-sans">
        {/* JSON-LD structured data: Organization + WebSite (SearchAction) */}
        <OrganizationJsonLd />
        <WebSiteJsonLd />
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
