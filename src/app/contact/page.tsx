import type { Metadata } from 'next';
import { ContactView } from '@/components/MarketingPages';
import { LocalBusinessJsonLd } from '@/components/JsonLd';
import { CONTACT_TOPICS, type ContactTopic } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Contact & devis sur mesure',
  description: 'Contactez NOVAR (Conakry, Guinée) au sujet de BIRDY, FEEDORA, d’une démonstration ou d’un projet logiciel sur mesure : e-mail, WhatsApp ou formulaire. Devis sur demande.',
  alternates: { canonical: '/contact', languages: { 'fr-GN': '/contact', en: '/en/contact' } },
};

export default async function ContactPage({ searchParams }: { searchParams: Promise<{ topic?: string }> }) {
  const { topic } = await searchParams;
  const defaultTopic: ContactTopic = CONTACT_TOPICS.includes(topic as ContactTopic) ? (topic as ContactTopic) : 'autre';
  return (
    <>
      <LocalBusinessJsonLd />
      <ContactView locale="fr" defaultTopic={defaultTopic} />
    </>
  );
}
