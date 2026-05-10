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
  alternates: { canonical: '/' },
  keywords: [
    'NOVAR',
    'BIRDY ERP',
    'FEEDORA',
    'OHADA',
    'Guinée',
    'Conakry',
    'comptabilité OHADA',
    'logiciel sur mesure',
    'SaaS Studio',
    'PME',
    'startup',
    'SYSCOHADA',
    'liasse fiscale',
  ],
  authors: [{ name: SITE.founder }],
  creator: SITE.name,
  publisher: SITE.legalName,
  applicationName: SITE.name,
  generator: 'Next.js',
  openGraph: {
    title: `${SITE.name} — ${SITE.baseline}`,
    description: SITE.description,
    url: SITE.url,
    siteName: SITE.name,
    locale: 'fr_GN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE.name} — ${SITE.baseline}`,
    description: SITE.description,
    creator: '@novar_startup',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  icons: {
    icon: [
      { url: '/logos/novar.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [{ url: '/logos/novar.png' }],
  },
  category: 'technology',
  formatDetection: { email: false, telephone: false, address: false },
  verification: {
    // À remplir quand Djerno aura récupéré les codes :
    // google: 'XXXXXXXXXXXXXXXXXX',
    // other: { 'msvalidate.01': 'XXXXXXXX' },
  },
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
