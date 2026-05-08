import { FaqAccordion } from '@/components/FaqAccordion';

export const metadata = { title: 'Foire aux questions' };

const FAQS = [
  { q: "Qu'est-ce que NOVAR ?", a: "NOVAR est une entreprise de logiciels basée à Conakry qui conçoit des solutions sur mesure pour les startups et PME africaines, et édite l'ERP BIRDY." },
  { q: "Qu'est-ce que BIRDY ERP ?", a: "BIRDY est un ERP complet pour PME guinéennes : POS, stock, achats, comptabilité OHADA, RH/paie, mobile money. Il fonctionne hors ligne et reste conforme à la réglementation locale." },
  { q: "Faut-il une connexion Internet ?", a: "Non, BIRDY fonctionne intégralement hors ligne. Internet n'est requis que pour les mises à jour, les sauvegardes cloud et certaines intégrations Mobile Money." },
  { q: 'BIRDY est-il disponible sur Mac et Linux ?', a: 'Pour le moment, BIRDY est disponible sur Windows 10 et 11. Les versions macOS et Linux sont prévues pour 2026.' },
  { q: 'Combien coûte BIRDY ?', a: 'Trois plans : Solo à 50 000 GNF/mois, Pro à 150 000 GNF/mois, Enterprise à 400 000 GNF/mois. Tous les détails sur la page tarifs.' },
  { q: "Y a-t-il un essai gratuit ?", a: "Oui, 30 jours d'essai gratuit sur tous les plans, sans carte bancaire. À la fin de la période, vous décidez de continuer ou non." },
  { q: 'Y a-t-il un engagement ?', a: 'Aucun. Vous pouvez résilier votre abonnement à tout moment. La licence reste active jusqu\'à la fin de la période payée.' },
  { q: 'Comment payer depuis la Guinée ?', a: 'Virement bancaire local, Mobile Money (Orange, MTN), bientôt cartes via CinetPay (disponible Sprint 17B).' },
  { q: 'Mes données restent-elles en Guinée ?', a: 'Par défaut oui : les données restent sur votre poste. Les sauvegardes cloud peuvent être hébergées chez NOVAR Conakry, AWS Africa ou OVH selon votre plan et préférence.' },
  { q: 'Qui peut accéder à mes données ?', a: 'Personne en dehors des utilisateurs que vous autorisez. Même les ingénieurs NOVAR n\'ont aucun accès à votre base sans votre permission explicite.' },
  { q: 'Quelle est la politique de sauvegarde ?', a: 'Sauvegardes locales quotidiennes automatiques chiffrées AES-256, sauvegardes cloud hebdomadaires (Pro et Enterprise). Stratégie 3-2-1 documentée.' },
  { q: 'BIRDY est-il conforme OHADA ?', a: 'Oui, intégralement. Plan comptable SYSCOHADA révisé, liasse fiscale, TAFIRE, FEC au format réglementaire, IRPP et CNSS Guinée.' },
  { q: 'Puis-je utiliser BIRDY pour ma déclaration de TVA ?', a: 'Oui, BIRDY génère automatiquement les éléments de votre déclaration mensuelle ou trimestrielle conformément aux exigences DGI Guinée.' },
  { q: 'Que se passe-t-il en cas de contrôle fiscal ?', a: 'Vous fournissez le FEC (généré en moins d\'une minute) et la liasse fiscale. Tous les justificatifs sont attachés aux écritures et accessibles immédiatement.' },
  { q: 'BIRDY se connecte-t-il aux Mobile Money ?', a: 'Oui, Orange Money et MTN MoMo Guinée sont supportés nativement, avec rapprochement automatique des transactions.' },
  { q: 'Puis-je intégrer BIRDY à mon site e-commerce ?', a: 'Oui, en plan Enterprise via l\'API REST documentée. Connecteurs WooCommerce et Shopify prévus pour Q4 2026.' },
  { q: 'BIRDY se connecte-t-il à ma banque ?', a: 'L\'import de relevés bancaires (CSV) est supporté. Les connecteurs API banques guinéennes sont en cours de négociation.' },
  { q: "Comment obtenir de l'aide ?", a: "E-mail djernomahamoudoudiallo@gmail.com, documentation en ligne, tutoriels vidéo. Support prioritaire en plans Pro et Enterprise." },
  { q: 'Proposez-vous de la formation ?', a: 'Oui, formations sur site à Conakry ou en visio, individuelles ou en groupe. Voir notre offre de conseil et accompagnement.' },
  { q: 'Combien de temps pour mettre BIRDY en production ?', a: 'Une PME typique met BIRDY en production en 1 à 2 semaines avec notre méthode d\'onboarding en 7 étapes.' },
  { q: 'BIRDY ne couvre pas mon métier, que faire ?', a: 'Nous proposons des solutions sur mesure pour développer des modules ou des applications spécifiques à votre activité. Premier échange gratuit.' },
  { q: 'Puis-je modifier le code source ?', a: "BIRDY n'est pas open source. Pour des personnalisations, nous intervenons via notre offre de développement sur mesure." },
  { q: 'Avez-vous une roadmap publique ?', a: 'Oui, voir la page Produits qui présente notre roadmap trimestrielle.' },
  { q: 'Comment fonctionne la double authentification ?', a: 'BIRDY supporte TOTP (Google Authenticator, Authy), SMS et clés FIDO2. La 2FA est obligatoire pour les comptes administrateurs.' },
  { q: "Que se passe-t-il si j'oublie mon mot de passe ?", a: "Réinitialisation par e-mail. Si vous avez activé la 2FA, conservez vos codes de récupération dans un endroit sûr." },
  { q: 'BIRDY peut-il gérer plusieurs sociétés ?', a: 'Oui, en plan Enterprise. Chaque société a sa propre base, son plan comptable et ses utilisateurs. Bascule rapide via un sélecteur.' },
  { q: 'Existe-t-il une application mobile ?', a: 'Application mobile BIRDY Pocket prévue pour Q4 2026. Pour l\'instant, l\'interface web est responsive et fonctionne sur tablette.' },
  { q: 'Quel est le délai de support ?', a: 'Réponse sous 24 h ouvrées en plan Solo, sous 4 h en Pro, sous 1 h en Enterprise. Support en français.' },
  { q: 'Comment migrer depuis un autre logiciel ?', a: "Nous accompagnons la migration : export de votre ancien logiciel, mapping des données, import dans BIRDY, validation. Service inclus en Enterprise, en option en Pro." },
  { q: 'Quelles formations proposez-vous ?', a: "Formations administrateur (1 jour), comptable (2 jours), utilisateur final (demi-journée). Sur site Conakry ou visio. Devis sur demande." },
];

export default function FaqPage() {
  return (
    <>
      <section className="bg-novar-cosmic py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white">Foire aux questions</h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-300">
            Les 30 questions les plus fréquentes sur NOVAR et BIRDY ERP.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-novar-cosmic">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <FaqAccordion items={FAQS} />
        </div>
      </section>
    </>
  );
}
