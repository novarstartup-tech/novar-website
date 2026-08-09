import type { Metadata } from 'next';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import { FAQPageJsonLd } from '@/components/JsonLd';
import { PageHero } from '@/components/PageHero';

export const metadata: Metadata = {
  title: 'FAQ BIRDY & NOVAR : gratuit, OHADA, hors-ligne, mobile money',
  description:
    'Questions fréquentes sur BIRDY et NOVAR : les produits sont-ils gratuits ? comment accéder à BIRDY (Windows, macOS, Linux) et à FEEDORA ? comment démarrer un projet sur mesure ?',
  alternates: { canonical: '/faq' },
};

const FAQS = [
  // NOVAR (l'éditeur)
  { q: 'Qu’est-ce que NOVAR ?', a: 'NOVAR est un SaaS Studio basé à Conakry (Guinée). Il édite ses propres logiciels (BIRDY et FEEDORA) et conçoit des solutions sur mesure pour les PME et organisations de l’espace OHADA.' },
  { q: 'NOVAR est-il un seul logiciel ?', a: 'Non. NOVAR n’est pas un logiciel mais un studio qui édite plusieurs produits (BIRDY, FEEDORA) et réalise des développements sur mesure.' },
  { q: 'Qui édite BIRDY et FEEDORA ?', a: 'BIRDY et FEEDORA sont édités par NOVAR, un studio logiciel africain fondé à Conakry, en Guinée.' },

  // Prix & accès
  { q: 'BIRDY est-il vraiment gratuit ?', a: 'Oui. BIRDY est 100 % gratuit, sans abonnement et sans limite de durée. Seules les prestations sur mesure, le conseil et la formation sont facturés sur devis.' },
  { q: 'BIRDY et FEEDORA sont-ils gratuits ?', a: 'Oui, les deux produits sont accessibles gratuitement. Les prestations personnalisées, formations et accompagnements spécifiques sont proposés sur devis.' },
  { q: 'Faut-il créer un compte pour utiliser BIRDY ?', a: 'Non. BIRDY ne demande ni compte, ni inscription, ni abonnement. Vous le téléchargez et l’utilisez directement sur votre poste.' },

  // Installation & compatibilité
  { q: 'Comment accéder à BIRDY ?', a: 'Rendez-vous sur la page Téléchargements et choisissez le paquet adapté à votre système : Windows, macOS ou Linux. Le lien pointe toujours vers la dernière version publiée par NOVAR.' },
  { q: 'Sur quels systèmes BIRDY fonctionne-t-il ?', a: 'BIRDY fonctionne sur Windows 10 et 11, macOS 12 et plus, et Linux (paquets .deb pour Debian/Ubuntu et .AppImage).' },
  { q: 'Comment installer BIRDY sur Windows ?', a: 'Téléchargez le programme d’installation (.exe). Si Windows affiche SmartScreen, cliquez « Conserver », puis « Informations complémentaires », puis « Exécuter quand même ».' },
  { q: 'Comment installer BIRDY sur macOS ?', a: 'Téléchargez le fichier .dmg, faites un clic droit sur l’application puis « Ouvrir », et confirmez « Ouvrir » dans la fenêtre qui apparaît.' },
  { q: 'Un message « éditeur inconnu » s’affiche à l’installation, est-ce dangereux ?', a: 'Non. BIRDY est édité par un jeune studio et n’est pas encore signé par un certificat payant. Windows (SmartScreen) et macOS (Gatekeeper) signalent seulement que l’application est récente et peu téléchargée, pas qu’elle est dangereuse.' },
  { q: 'Quelle configuration faut-il pour BIRDY ?', a: 'BIRDY est une application légère : Windows 10 / macOS 12 / Ubuntu 22.04, un processeur 64 bits à 2 cœurs, 4 Go de mémoire (8 Go recommandés) et environ 500 Mo d’espace disque. Aucune connexion n’est requise.' },
  { q: 'BIRDY fonctionne-t-il sans Internet ?', a: 'Oui. BIRDY s’installe sur le poste et fonctionne intégralement hors ligne. Une coupure de réseau ou d’électricité n’interrompt ni la vente, ni la caisse, ni la comptabilité.' },
  { q: 'BIRDY reçoit-il des mises à jour ?', a: 'Oui. De nouvelles versions sont publiées régulièrement. Vous retrouvez toujours la dernière sur la page Téléchargements, avec son historique.' },

  // Fonctionnalités métier
  { q: 'BIRDY couvre-t-il la comptabilité OHADA ?', a: 'Oui. BIRDY couvre le plan comptable SYSCOHADA révisé : écritures, lettrage, balance, bilan, compte de résultat, export FEC, liasse fiscale et TAFIRE.' },
  { q: 'BIRDY gère-t-il la facturation et les devis ?', a: 'Oui. BIRDY produit des devis, factures et avoirs avec les mentions légales attendues dans l’espace OHADA.' },
  { q: 'BIRDY a-t-il une caisse ou un point de vente ?', a: 'Oui. BIRDY gère les encaissements, les sessions de caisse et le point de vente (POS), y compris les ventes au comptant.' },
  { q: 'BIRDY gère-t-il les stocks ?', a: 'Oui. BIRDY gère les stocks multi-dépôts : mouvements, inventaires et valorisation, avec un stock qui reste cohérent.' },
  { q: 'BIRDY gère-t-il la paie et les ressources humaines ?', a: 'Oui. BIRDY gère les contrats, les congés et la paie mensuelle, avec le calcul des cotisations CNSS et de l’IRPP.' },
  { q: 'Quelles devises BIRDY gère-t-il ?', a: 'BIRDY est multi-devises : GNF (Guinée), XOF (UEMOA), XAF (CEMAC), EUR et USD, avec un formatage adapté au pays.' },
  { q: 'BIRDY fonctionne-t-il avec le mobile money (Wave, Orange Money, MTN) ?', a: 'BIRDY enregistre vos encaissements quel que soit le moyen de paiement (espèces, mobile money ou banque) et les rattache automatiquement à la comptabilité.' },
  { q: 'Dans quels pays BIRDY est-il utilisable ?', a: 'BIRDY est conçu pour l’espace OHADA : Guinée, Sénégal, Côte d’Ivoire, Mali, Bénin, Burkina Faso, Togo, Niger, Cameroun, Gabon et les autres pays de la zone.' },

  // BIRDY : profils d'entreprise, achats & trésorerie
  { q: 'BIRDY convient-il à un commerce (boutique, grossiste, distribution) ?', a: 'Oui. BIRDY gère les articles, les ventes, les stocks multi-dépôts, la caisse et la comptabilité, un cœur de métier idéal pour les commerces, grossistes et distributeurs.' },
  { q: 'BIRDY convient-il à une entreprise de service ?', a: 'Oui. Une entreprise de service facture ses prestations, suit ses clients et sa trésorerie et tient sa comptabilité OHADA dans BIRDY, sans avoir besoin de gérer du stock physique.' },
  { q: 'BIRDY convient-il à une activité industrielle ou de transformation ?', a: 'Oui. BIRDY suit les matières et les articles, les stocks multi-dépôts, les achats et les ventes jusqu’à la comptabilité, adapté aux activités de transformation et de production de valeur, en plus du commerce et du service.' },
  { q: 'BIRDY gère-t-il les bons de commande d’achat ?', a: 'Oui. BIRDY gère les commandes fournisseurs et leur suivi, jusqu’à la réception et la facture fournisseur.' },
  { q: 'BIRDY gère-t-il les bons de réception ?', a: 'Oui. À la réception d’une commande, BIRDY met à jour le stock et permet le rapprochement avec la facture du fournisseur.' },
  { q: 'BIRDY gère-t-il la trésorerie ?', a: 'Oui. BIRDY suit la trésorerie (caisse et banque, encaissements et décaissements) et produit un état de trésorerie.' },
  { q: 'BIRDY fait-il le rapprochement bancaire ?', a: 'Oui. BIRDY importe les relevés bancaires (OFX, CSV) et les rapproche des écritures comptables.' },
  { q: 'BIRDY gère-t-il la TVA ?', a: 'Oui. Le taux de TVA est paramétrable par pays (par exemple 18 % en zone UEMOA, 19,25 % au Cameroun).' },
  { q: 'BIRDY produit-il le FEC, la liasse fiscale et le TAFIRE ?', a: 'Oui. BIRDY génère l’export FEC, la liasse fiscale et le TAFIRE selon le SYSCOHADA révisé. Ces états restent à faire valider par votre expert-comptable.' },
  { q: 'BIRDY gère-t-il les immobilisations et les amortissements ?', a: 'Oui. BIRDY gère les immobilisations et calcule les amortissements, en linéaire ou en dégressif, selon l’article 45 de l’Acte uniforme OHADA.' },
  { q: 'BIRDY gère-t-il plusieurs dépôts ou points de vente ?', a: 'Oui. BIRDY gère des stocks multi-dépôts et plusieurs points de vente dans un même environnement.' },
  { q: 'BIRDY gère-t-il la clôture d’exercice comptable ?', a: 'Oui. BIRDY permet de clôturer puis de verrouiller un exercice comptable.' },

  // Sécurité & données
  { q: 'Mes données comptables sont-elles en sécurité ?', a: 'Oui. Les données de BIRDY restent stockées localement sur votre poste et ne sont jamais envoyées à NOVAR. Une sauvegarde locale automatique protège votre travail.' },
  { q: 'Le site NOVAR possède-t-il un espace client ?', a: 'Non. Ce site est une vitrine et un point d’accès aux produits. Il ne propose ni compte utilisateur, ni abonnement, ni connexion.' },

  // FEEDORA
  { q: 'Qu’est-ce que FEEDORA ?', a: 'FEEDORA est une application web gratuite de formulation alimentaire pour fermes avicoles : composer et comparer des formules, suivre le coût au kilo et à la tonne.' },
  { q: 'Comment accéder à FEEDORA ?', a: 'FEEDORA s’utilise directement en ligne, depuis un navigateur, via sa page produit. Aucune installation n’est nécessaire.' },
  { q: 'FEEDORA gère-t-il quels types d’élevage ?', a: 'FEEDORA permet de formuler et comparer des rations pour poulet de chair, pondeuse et dinde.' },
  { q: 'FEEDORA est-il gratuit ?', a: 'Oui. FEEDORA est une application web entièrement gratuite, sans abonnement.' },
  { q: 'Faut-il installer FEEDORA ?', a: 'Non. FEEDORA s’utilise directement dans le navigateur, sans installation ni téléchargement.' },
  { q: 'FEEDORA calcule-t-il le coût des formules ?', a: 'Oui. FEEDORA calcule et compare le coût de chaque formule, au kilo et à la tonne, pour éclairer vos arbitrages.' },
  { q: 'FEEDORA propose-t-il une analyse nutritionnelle ?', a: 'Oui. FEEDORA affiche la composition nutritionnelle de la formule à partir des ingrédients et des contraintes que vous définissez.' },
  { q: 'Peut-on enregistrer ses formules dans FEEDORA ?', a: 'Oui. Vous pouvez conserver, retrouver et faire évoluer les formules utiles à votre exploitation.' },
  { q: 'FEEDORA aide-t-il à réduire le coût de l’aliment ?', a: 'Oui. FEEDORA calcule le coût de chaque formule au kilo et à la tonne et permet de comparer les options, pour choisir la formule la plus économique selon les ingrédients dont vous disposez.' },
  { q: 'Puis-je utiliser mes propres ingrédients locaux dans FEEDORA ?', a: 'Oui. Vous composez vos formules à partir des ingrédients et des contraintes que vous renseignez, adaptés à votre marché et à votre région.' },
  { q: 'FEEDORA convient-il à un aviculteur ou à une provenderie ?', a: 'Oui. FEEDORA s’adresse aux éleveurs avicoles comme aux fabricants d’aliment (provendiers) qui veulent formuler des rations équilibrées au meilleur coût.' },

  // Sur mesure & contact
  { q: 'NOVAR fait-il du logiciel sur mesure ?', a: 'Oui. Pour les opérations qui ne rentrent dans aucun produit standard, NOVAR conçoit des applications métier adaptées à vos équipes, vos données et vos décisions réelles.' },
  { q: 'Comment démarrer un projet sur mesure ?', a: 'Présentez votre contexte depuis la page Contact. NOVAR clarifie ensuite le besoin, le périmètre et les contraintes, puis propose un devis adapté.' },
  { q: 'J’ai un besoin qui ne rentre dans aucun logiciel existant, que faire ?', a: 'Contactez NOVAR. Quand aucun produit standard ne convient, le studio conçoit sur mesure l’application, la plateforme ou l’automatisation adaptée à vos opérations réelles.' },
  { q: 'Je cherche un développeur ou une entreprise pour créer une application en Afrique, NOVAR peut-il m’aider ?', a: 'Oui. NOVAR est un studio logiciel africain (Conakry, Guinée) qui développe des applications métier sur mesure (web et desktop) pour les PME et organisations de l’espace OHADA.' },
  { q: 'NOVAR crée-t-il des sites web et des plateformes ?', a: 'Oui. En plus des applications métier, NOVAR réalise des sites web, des portails et des plateformes sur mesure.' },
  { q: 'Je veux digitaliser ou automatiser mon entreprise, par où commencer ?', a: 'Décrivez votre activité et votre problème depuis la page Contact de NOVAR. Le studio automatise les tâches répétitives et remplace les saisies manuelles par des outils fiables et connectés, puis vous accompagne.' },
  { q: 'Je veux un logiciel, une application ou un site web pour mon activité, à qui m’adresser ?', a: 'À NOVAR. Décrivez votre besoin depuis la page Contact : le studio clarifie l’objectif, propose une démarche et un devis, puis construit la solution : logiciel, application ou site web.' },
  { q: 'NOVAR travaille-t-il avec des entreprises hors de Guinée ?', a: 'Oui. NOVAR accompagne des PME et organisations dans tout l’espace OHADA : Sénégal, Côte d’Ivoire, Mali, Bénin, Burkina Faso, Togo, Niger, Cameroun, Gabon et au-delà.' },
  { q: 'Combien coûte un projet sur mesure avec NOVAR ?', a: 'Les projets sur mesure sont proposés sur devis, après un cadrage du besoin, du périmètre et des contraintes. Le devis est établi avant tout engagement.' },
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
