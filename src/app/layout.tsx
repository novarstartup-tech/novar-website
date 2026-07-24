import type { Metadata, Viewport } from 'next';
import { Bricolage_Grotesque, Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { OrganizationJsonLd, WebSiteJsonLd } from '@/components/JsonLd';
import { SITE } from '@/lib/site';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#ffffff',
};

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const bricolage = Bricolage_Grotesque({ subsets: ['latin'], variable: '--font-bricolage', display: 'swap' });
const jetbrains = JetBrains_Mono({ subsets: ['latin'], variable: '--font-jetbrains', display: 'swap' });

export const metadata: Metadata = {
  title: { default: 'NOVAR — SaaS Studio', template: `%s — ${SITE.name}` },
  description: 'NOVAR édite BIRDY et FEEDORA et conçoit des logiciels sur mesure pour les PME et organisations.',
  metadataBase: new URL(SITE.url),
  alternates: {
    canonical: '/',
    languages: { fr: '/', 'fr-GN': '/', en: '/en', 'x-default': '/' },
  },
  keywords: [
    'NOVAR',
    'SaaS Studio',
    'BIRDY',
    'FEEDORA',
    'logiciel sur mesure',
    'ERP OHADA',
    'PME Afrique',
    'Guinée',
  ],
  authors: [{ name: SITE.founder }],
  creator: SITE.name,
  publisher: SITE.legalName,
  applicationName: SITE.name,
  openGraph: {
    title: 'NOVAR — SaaS Studio',
    description: 'Produits SaaS utiles et solutions logicielles sur mesure pour les PME et organisations.',
    url: SITE.url,
    siteName: SITE.name,
    locale: 'fr_GN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NOVAR — SaaS Studio',
    description: 'Produits SaaS utiles et solutions logicielles sur mesure.',
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
    icon: [{ url: '/logos/novar.png', sizes: '512x512', type: 'image/png' }],
    apple: [{ url: '/logos/novar.png' }],
  },
  category: 'technology',
  formatDetection: { email: false, telephone: false, address: false },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${inter.variable} ${bricolage.variable} ${jetbrains.variable}`}>
      <body className="overflow-x-hidden font-sans">
        <OrganizationJsonLd />
        <WebSiteJsonLd />
        <a
          href="#main-content"
          className="fixed left-4 top-4 z-[100] -translate-y-24 rounded-lg bg-slate-950 px-4 py-3 text-sm font-semibold text-white transition-transform focus:translate-y-0"
        >
          Aller au contenu / Skip to content
        </a>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
