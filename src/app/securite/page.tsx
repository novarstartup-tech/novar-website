import Link from 'next/link';
import { ShieldCheck, Lock, FileSearch, Mail, KeyRound, ServerCog } from 'lucide-react';
import { PageHero } from '@/components/PageHero';

export const metadata = {
  title: 'Sécurité',
  description:
    "Politique de sécurité de NOVAR : durcissement du site, des produits BIRDY et FEEDORA, divulgation responsable des vulnérabilités, contact sécurité.",
};

export default function SecuritePage() {
  return (
    <>
      <PageHero
        tone="cyan"
        eyebrow="Sécurité"
        title="La sécurité, prise au sérieux."
        description="NOVAR applique des standards d'ingénierie reconnus — chiffrement au repos, durcissement réseau, audits CVE continus, programme de divulgation responsable. Voici comment nous protégeons nos produits et nos utilisateurs."
        centered
      />

      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16 md:py-20">
          <div className="grid gap-6 sm:grid-cols-2">
            <Card
              icon={ShieldCheck}
              title="Durcissement HTTP"
              body="HSTS preload (2 ans), Content-Security-Policy avec nonce par requête, X-Frame-Options DENY, X-Content-Type-Options nosniff, Permissions-Policy restrictive, Referrer-Policy strict-origin. Chaque réponse passe par notre middleware de sécurité."
            />
            <Card
              icon={Lock}
              title="Chiffrement des secrets"
              body="Dans BIRDY, tous les secrets sensibles (mots de passe SMTP, clés API, secrets MFA) sont chiffrés AES-256-GCM avec une clé maître stockée dans le coffre-fort de l'OS (Windows Credential Manager, macOS Keychain, Linux Secret Service). Aucun secret en clair sur le disque."
            />
            <Card
              icon={KeyRound}
              title="Authentification"
              body="Mots de passe hashés avec Argon2id (paramètres OWASP). Sessions tokens 30 jours révocables. MFA TOTP optionnel. OAuth Google supporté. Verrouillage automatique après tentatives échouées."
            />
            <Card
              icon={FileSearch}
              title="Audits continus"
              body="cargo audit (Rust) et pnpm audit (Node) tournent en CI à chaque commit. Les CVE de sévérité moderate ou supérieure bloquent le déploiement. gitleaks scanne automatiquement les commits pour détecter les fuites de secrets."
            />
            <Card
              icon={ServerCog}
              title="Données utilisateur"
              body="BIRDY tourne en local sur votre poste, dans une base SQLite chiffrée. Aucune télémétrie, aucune remontée de données. FEEDORA stocke les formulations sur un infra dédiée Vercel/Postgres avec sauvegardes chiffrées."
            />
            <Card
              icon={Mail}
              title="Divulgation responsable"
              body="Un programme de coordination est en place. Si vous avez identifié une vulnérabilité, écrivez-nous. Accusé de réception sous 48 h ouvrées. Nous nous engageons à ne pas poursuivre les chercheurs agissant en bonne foi."
            />
          </div>
        </div>
      </section>

      <section className="surface-alt">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16 md:py-20">
          <h2 className="font-display text-3xl font-bold tracking-tight text-novar-ink">
            Signaler une vulnérabilité
          </h2>
          <p className="mt-4 text-novar-muted leading-relaxed">
            Nous accueillons les contributions de la communauté sécurité.
            Avant de divulguer publiquement, merci de nous laisser un délai
            raisonnable pour corriger.
          </p>
          <div className="mt-8 rounded-2xl border border-novar-line bg-white p-6 sm:p-8 shadow-soft">
            <div className="space-y-4 text-sm">
              <Row label="Email" value="novar.startup@gmail.com" />
              <Row label="security.txt" value="/.well-known/security.txt" link="/.well-known/security.txt" />
              <Row label="Délai d'accusé de réception" value="48 h ouvrées" />
              <Row label="Délai cible de correction" value="30 à 90 jours selon sévérité" />
              <Row label="Langues acceptées" value="Français, anglais" />
            </div>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact?topic=support" className="btn-primary">
              Nous contacter
            </Link>
            <a
              href="/.well-known/security.txt"
              className="btn-ghost"
            >
              Voir le security.txt
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

function Card({
  icon: Icon,
  title,
  body,
}: {
  icon: typeof ShieldCheck;
  title: string;
  body: string;
}) {
  return (
    <div className="rounded-2xl border border-novar-line bg-white p-7 transition-all hover:shadow-lifted hover:border-novar-ink/20">
      <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-novar-surface-2 text-novar-ink ring-1 ring-novar-line">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="mt-5 font-display text-lg font-semibold text-novar-ink">
        {title}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-novar-muted">{body}</p>
    </div>
  );
}

function Row({
  label,
  value,
  link,
}: {
  label: string;
  value: string;
  link?: string;
}) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
      <span className="text-xs font-semibold uppercase tracking-wider text-novar-muted sm:w-48 flex-shrink-0">
        {label}
      </span>
      {link ? (
        <a
          href={link}
          className="font-mono text-novar-ink hover:text-novar-accent transition-colors"
        >
          {value}
        </a>
      ) : (
        <span className="font-mono text-novar-ink">{value}</span>
      )}
    </div>
  );
}
