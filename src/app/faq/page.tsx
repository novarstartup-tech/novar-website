import type { Metadata } from 'next';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import { FAQPageJsonLd } from '@/components/JsonLd';
import { PageHero } from '@/components/PageHero';

export const metadata: Metadata = {
  title: 'FAQ — BIRDY & NOVAR : gratuit, OHADA, hors-ligne, mobile money',
  description:
    'Questions fréquentes sur BIRDY et NOVAR : les produits sont-ils gratuits ? comment accéder à BIRDY (Windows, macOS, Linux) et à FEEDORA ? comment démarrer un projet sur mesure ?',
  alternates: { canonical: '/faq' },
};

const FAQS = [
  // — NOVAR (l'éditeur) —
  { q: 'Qu’est-ce que NOVAR ?', a: 'NOVAR est un SaaS Studio basé à Conakry (Guinée). Il édite ses propres logiciels — BIRDY et FEEDORA — et conçoit des solutions sur mesure pour les PME et organisations de l’espace OHADA.' },
  { q: 'NOVAR est-il un seul logiciel ?', a: 'Non. NOVAR n’est pas un logiciel mais un studio qui édite plusieurs produits (BIRDY, FEEDORA) et réalise des développements sur mesure.' },
  { q: 'Qui édite BIRDY et FEEDORA ?', a: 'BIRDY et FEEDORA sont édités par NOVAR, un studio logiciel africain fondé à Conakry, en Guinée.' },

  // — Prix & accès —
  { q: 'BIRDY est-il vraiment gratuit ?', a: 'Oui. BIRDY est 100 % gratuit, sans abonnement et sans limite de durée. Seules les prestations sur mesure, le conseil et la formation sont facturés sur devis.' },
  { q: 'BIRDY et FEEDORA sont-ils gratuits ?', a: 'Oui, les deux produits sont accessibles gratuitement. Les prestations personnalisées, formations et accompagnements spécifiques sont proposés sur devis.' },
  { q: 'Faut-il créer un compte pour utiliser BIRDY ?', a: 'Non. BIRDY ne demande ni compte, ni inscription, ni abonnement. Vous le téléchargez et l’utilisez directement sur votre poste.' },

  // — Installation & compatibilité —
  { q: 'Comment accéder à BIRDY ?', a: 'Rendez-vous sur la page Téléchargements et choisissez le paquet adapté à votre système : Windows, macOS ou Linux. Le lien pointe toujours vers la dernière version publiée par NOVAR.' },
  { q: 'Sur quels systèmes BIRDY fonctionne-t-il ?', a: 'BIRDY fonctionne sur Windows 10 et 11, macOS 12 et plus, et Linux (paquets .deb pour Debian/Ubuntu et .AppImage).' },
  { q: 'Comment installer BIRDY sur Windows ?', a: 'Téléchargez le programme d’installation (.exe). Si Windows affiche SmartScreen, cliquez « Conserver », puis « Informations complémentaires », puis « Exécuter quand même ».' },
  { q: 'Comment installer BIRDY sur macOS ?', a: 'Téléchargez le fichier .dmg, faites un clic droit sur l’application puis « Ouvrir », et confirmez « Ouvrir » dans la fenêtre qui apparaît.' },
  { q: 'Un message « éditeur inconnu » s’affiche à l’installation, est-ce dangereux ?', a: 'Non. BIRDY est édité par un jeune studio et n’est pas encore signé par un certificat payant. Windows (SmartScreen) et macOS (Gatekeeper) signalent seulement que l’application est récente et peu téléchargée, pas qu’elle est dangereuse.' },
  { q: 'Quelle configuration faut-il pour BIRDY ?', a: 'BIRDY est une application légère : Windows 10 / macOS 12 / Ubuntu 22.04, un processeur 64 bits à 2 cœurs, 4 Go de mémoire (8 Go recommandés) et environ 500 Mo d’espace disque. Aucune connexion n’est requise.' },
  { q: 'BIRDY fonctionne-t-il sans Internet ?', a: 'Oui. BIRDY s’installe sur le poste et fonctionne intégralement hors ligne. Une coupure de réseau ou d’électricité n’interrompt ni la vente, ni la caisse, ni la comptabilité.' },
  { q: 'BIRDY reçoit-il des mises à jour ?', a: 'Oui. De nouvelles versions sont publiées régulièrement. Vous retrouvez toujours la dernière sur la page Téléchargements, avec son historique.' },

  // — Fonctionnalités métier —
  { q: 'BIRDY couvre-t-il la comptabilité OHADA ?', a: 'Oui. BIRDY couvre le plan comptable SYSCOHADA révisé : écritures, lettrage, balance, bilan, compte de résultat, export FEC, liasse fiscale et TAFIRE.' },
  { q: 'BIRDY gère-t-il la facturation et les devis ?', a: 'Oui. BIRDY produit des devis, factures et avoirs avec les mentions légales attendues dans l’espace OHADA.' },
  { q: 'BIRDY a-t-il une caisse ou un point de vente ?', a: 'Oui. BIRDY gère les encaissements, les sessions de caisse et le point de vente (POS), y compris les ventes au comptant.' },
  { q: 'BIRDY gère-t-il les stocks ?', a: 'Oui. BIRDY gère les stocks multi-dépôts : mouvements, inventaires et valorisation, avec un stock qui reste cohérent.' },
  { q: 'BIRDY gère-t-il la paie et les ressources humaines ?', a: 'Oui. BIRDY gère les contrats, les congés et la paie mensuelle, avec le calcul des cotisations CNSS et de l’IRPP.' },
  { q: 'Quelles devises BIRDY gère-t-il ?', a: 'BIRDY est multi-devises : GNF (Guinée), XOF (UEMOA), XAF (CEMAC), EUR et USD, avec un formatage adapté au pays.' },
  { q: 'BIRDY fonctionne-t-il avec le mobile money (Wave, Orange Money, MTN) ?', a: 'BIRDY enregistre vos encaissements quel que soit le moyen de paiement — espèces, mobile money ou banque — et les rattache automatiquement à la comptabilité.' },
  { q: 'Dans quels pays BIRDY est-il utilisable ?', a: 'BIRDY est conçu pour l’espace OHADA : Guinée, Sénégal, Côte d’Ivoire, Mali, Bénin, Burkina Faso, Togo, Niger, Cameroun, Gabon et les autres pays de la zone.' },

  // — Sécurité & données —
  { q: 'Mes données comptables sont-elles en sécurité ?', a: 'Oui. Les données de BIRDY restent stockées localement sur votre poste et ne sont jamais envoyées à NOVAR. Une sauvegarde locale automatique protège votre travail.' },
  { q: 'Le site NOVAR possède-t-il un espace client ?', a: 'Non. Ce site est une vitrine et un point d’accès aux produits. Il ne propose ni compte utilisateur, ni abonnement, ni connexion.' },

  // — FEEDORA —
  { q: 'Qu’est-ce que FEEDORA ?', a: 'FEEDORA est une application web gratuite de formulation alimentaire pour fermes avicoles : composer et comparer des formules, suivre le coût au kilo et à la tonne.' },
  { q: 'Comment accéder à FEEDORA ?', a: 'FEEDORA s’utilise directement en ligne, depuis un navigateur, via sa page produit. Aucune installation n’est nécessaire.' },
  { q: 'FEEDORA gère-t-il quels types d’élevage ?', a: 'FEEDORA permet de formuler et comparer des rations pour poulet de chair, pondeuse et dinde.' },

  // — Sur mesure & contact —
  { q: 'NOVAR fait-il du logiciel sur mesure ?', a: 'Oui. Pour les opérations qui ne rentrent dans aucun produit standard, NOVAR conçoit des applications métier adaptées à vos équipes, vos données et vos décisions réelles.' },
  { q: 'Comment démarrer un projet sur mesure ?', a: 'Présentez votre contexte depuis la page Contact. NOVAR clarifie ensuite le besoin, le périmètre et les contraintes, puis propose un devis adapté.' },
  { q: 'Comment contacter NOVAR ?', a: 'Vous pouvez écrire à NOVAR par e-mail ou WhatsApp, ou remplir le formulaire de la page Contact. Le studio est basé à Conakry, en Guinée.' },
];

export default function FaqPage() {
  return (
    <>
      <FAQPageJsonLd items={FAQS} />
      <PageHero tone="emerald" eyebrow="Questions fréquentes" title="Des réponses claires sur NOVAR." description="Le fonctionnement actuel du studio, de ses produits et de ses services." />
      <section className="section-shell max-w-4xl">
        <div className="space-y-3">
          {FAQS.map((item) => (
            <details key={item.q} className="group rounded-2xl border border-slate-200 bg-white open:shadow-sm">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 font-display font-bold text-slate-950">
                {item.q}<ChevronDown className="h-4 w-4 shrink-0 transition-transform group-open:rotate-180" aria-hidden />
              </summary>
              <p className="px-5 pb-5 text-sm leading-relaxed text-slate-600">{item.a}</p>
            </details>
          ))}
        </div>
        <Link href="/contact" className="btn-primary mt-8">Poser une autre question</Link>
      </section>
    </>
  );
}
