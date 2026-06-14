import { ContactView } from '@/components/MarketingPages';
import { CONTACT_TOPICS, type ContactTopic } from '@/lib/content';
export const metadata = { title: 'Contact', alternates: { canonical: '/en/contact', languages: { 'fr-GN': '/contact', en: '/en/contact' } } };

export default async function Page({ searchParams }: { searchParams: Promise<{ topic?: string }> }) {
  const { topic } = await searchParams;
  const defaultTopic: ContactTopic = CONTACT_TOPICS.includes(topic as ContactTopic) ? (topic as ContactTopic) : 'autre';
  return <ContactView locale="en" defaultTopic={defaultTopic} />;
}
