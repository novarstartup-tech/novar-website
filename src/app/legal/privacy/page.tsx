import Link from 'next/link';
import { PageHero } from '@/components/PageHero';
import { SITE } from '@/lib/site';

export const metadata = {
  title: 'Politique de confidentialité',
  description:
    'Politique de confidentialité NOVAR — données collectées, finalités, durée, sous-traitants, droits des utilisateurs et contact DPO.',
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        tone="slate"
        eyebrow="Légal"
        title="Politique de confidentialité"
        description="Dernière mise à jour : 9 mai 2026 · Version 1.1"
      />

      <article className="mx-auto max-w-3xl px-6 lg:px-8 pb-20">
        <div className="prose prose-slate max-w-none prose-headings:font-display prose-headings:tracking-tight prose-h2:text-novar-ink prose-h2:mt-10 prose-h2:text-2xl prose-p:text-novar-ink-soft prose-p:leading-relaxed prose-li:text-novar-ink-soft prose-strong:text-novar-ink prose-a:text-novar-accent">
          <p>
            NOVAR attache une grande importance à la protection des données
            personnelles. Cette politique décrit les données que nous
            collectons, pourquoi, combien de temps, et les droits dont vous
            disposez. Elle s&apos;applique au site novar.gn ainsi qu&apos;aux
            produits BIRDY et FEEDORA.
          </p>

          <h2>1. Données collectées</h2>
          <ul>
            <li>
              <strong>Site web</strong> : statistiques anonymisées (pages
              vues, navigateur, pays), formulaire de contact (nom, e-mail,
              entreprise, message).
            </li>
            <li>
              <strong>Compte client</strong> : nom, e-mail, mot de passe
              haché, rôle, raison sociale.
            </li>
            <li>
              <strong>Données métier</strong> (clients, factures, écritures
              comptables, formules avicoles, etc.) : restent stockées chez
              vous ou dans votre espace dédié, ne sont jamais transmises sans
              votre consentement.
            </li>
            <li>
              <strong>Logs techniques</strong> : journal des connexions et
              actions sensibles, à des fins de sécurité.
            </li>
          </ul>

          <h2>2. Finalités</h2>
          <ul>
            <li>Fournir le service souscrit (BIRDY, FEEDORA, sur mesure).</li>
            <li>Assurer le support technique et améliorer le produit.</li>
            <li>Émettre les factures et gérer la relation contractuelle.</li>
            <li>Communiquer sur les évolutions du produit (avec consentement explicite).</li>
            <li>Détecter et prévenir les abus ou incidents de sécurité.</li>
          </ul>

          <h2>3. Base légale</h2>
          <p>
            Les traitements reposent selon le cas sur l&apos;exécution du
            contrat de service, sur l&apos;intérêt légitime de NOVAR
            (sécurité, support, prévention de la fraude), ou sur votre
            consentement explicite (communications marketing, cookies non
            essentiels).
          </p>

          <h2>4. Durée de conservation</h2>
          <ul>
            <li>Données de compte : durée de l&apos;abonnement + 5 ans.</li>
            <li>Logs techniques : 12 mois.</li>
            <li>Factures : 10 ans (obligation légale).</li>
            <li>
              Données métier dans BIRDY ou FEEDORA : sous votre contrôle.
              Vous pouvez les exporter ou les supprimer à tout moment.
            </li>
          </ul>

          <h2>5. Sous-traitants</h2>
          <p>
            Pour fournir le service, NOVAR fait appel à des sous-traitants
            techniques sélectionnés pour leurs garanties de sécurité :
          </p>
          <ul>
            <li>
              <strong>Vercel</strong> — hébergement du site novar.gn et des
              applications web.
            </li>
            <li>
              <strong>Resend</strong> — envoi des e-mails transactionnels
              (création de compte, notifications).
            </li>
            <li>
              <strong>OVH ou AWS Africa</strong> — stockage des sauvegardes
              cloud chiffrées (option payante).
            </li>
          </ul>
          <p>
            Tous nos sous-traitants sont engagés contractuellement à respecter
            la même politique de confidentialité et à n&apos;utiliser vos
            données que pour exécuter leur prestation.
          </p>

          <h2>6. Cookies</h2>
          <p>
            Le site novar.gn utilise un strict minimum de cookies, uniquement
            essentiels au fonctionnement (session, préférences de langue).
            Aucun cookie publicitaire ni tracking tiers n&apos;est posé sans
            consentement explicite.
          </p>

          <h2>7. Vos droits</h2>
          <p>
            Conformément aux meilleures pratiques internationales (RGPD),
            vous disposez des droits suivants sur vos données personnelles :
          </p>
          <ul>
            <li><strong>Accès</strong> : obtenir copie des données vous concernant.</li>
            <li><strong>Rectification</strong> : corriger une donnée inexacte.</li>
            <li><strong>Suppression</strong> : effacer vos données (sous réserve d&apos;obligations légales de conservation).</li>
            <li><strong>Portabilité</strong> : récupérer vos données dans un format structuré.</li>
            <li><strong>Opposition</strong> : refuser certains traitements (notamment marketing).</li>
          </ul>
          <p>
            Pour exercer ces droits, écrivez-nous à{' '}
            <a href={`mailto:${SITE.email}`}>{SITE.email}</a>. Nous répondons
            sous 30 jours maximum.
          </p>

          <h2>8. Sécurité</h2>
          <p>
            Toutes les communications avec nos services sont chiffrées en
            TLS 1.3. Les sauvegardes cloud sont chiffrées en AES-256 avec une
            clé que vous contrôlez. Les mots de passe sont hachés avec
            Argon2. L&apos;authentification à deux facteurs est disponible et
            obligatoire pour les comptes administrateurs.
          </p>

          <h2>9. Contact DPO</h2>
          <p>
            Pour toute question relative à cette politique ou à l&apos;exercice
            de vos droits, écrivez à <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.
            Le responsable du traitement est NOVAR ({SITE.city}, {SITE.country}),
            représenté par son fondateur Djerno Mahamoudou Diallo.
          </p>

          <h2>10. Modifications</h2>
          <p>
            NOVAR se réserve le droit de mettre à jour cette politique pour
            refléter l&apos;évolution du produit ou de la réglementation. Les
            modifications substantielles sont notifiées par e-mail aux
            clients actifs avec un préavis minimum de 30 jours.
          </p>

          <p className="mt-10 text-sm">
            Voir aussi :{' '}
            <Link href="/legal/cgv">
              Conditions générales de vente
            </Link>
            .
          </p>
        </div>
      </article>
    </>
  );
}
