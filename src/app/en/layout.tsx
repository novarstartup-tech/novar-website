import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: { default: 'NOVAR — SaaS Studio', template: '%s — NOVAR' },
  description: 'NOVAR builds BIRDY and FEEDORA and designs tailored software for SMEs and organizations.',
  alternates: { canonical: '/en', languages: { 'fr-GN': '/', en: '/en' } },
  openGraph: { locale: 'en_US' },
};

export default function EnglishLayout({ children }: { children: React.ReactNode }) {
  return <div lang="en">{children}</div>;
}
