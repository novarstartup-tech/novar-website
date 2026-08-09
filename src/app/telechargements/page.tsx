import type { Metadata } from 'next';
import { DownloadsView } from '@/components/MarketingPages';
import { HowToJsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Télécharger BIRDY : gratuit, Windows / macOS / Linux',
  description:
    'Téléchargez gratuitement la dernière version de BIRDY, le logiciel de gestion et de comptabilité OHADA de NOVAR : Windows, macOS et Linux, sans compte ni abonnement, fonctionnement hors ligne.',
  alternates: { canonical: '/telechargements', languages: { 'fr-GN': '/telechargements', en: '/en/downloads' } },
};

export default function DownloadsPage() {
  return (
    <>
      <HowToJsonLd
        name="Installer BIRDY sur votre poste"
        description="Télécharger et installer le logiciel de gestion et comptabilité OHADA BIRDY sur Windows, macOS ou Linux."
        steps={[
          { name: 'Télécharger', text: 'Téléchargez le paquet correspondant à votre système depuis la page Téléchargements.' },
          { name: 'Lancer l’installeur', text: 'Ouvrez le fichier téléchargé et lancez l’installation.' },
          { name: 'Autoriser l’exécution', text: 'Si un avertissement « éditeur inconnu » apparaît, autorisez l’exécution : « Conserver » puis « Exécuter quand même » sur Windows, clic droit puis « Ouvrir » sur macOS.' },
          { name: 'Créer votre société', text: 'Au premier lancement, créez votre société : nom, devise, RCCM et identifiant fiscal.' },
          { name: 'Paramétrer la comptabilité', text: 'Choisissez le plan comptable SYSCOHADA et le taux de TVA de votre pays, puis commencez à facturer.' },
        ]}
      />
      <DownloadsView locale="fr" />
    </>
  );
}
