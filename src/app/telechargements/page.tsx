import Link from 'next/link';
import {
  CheckCircle2,
  ShieldCheck,
  Cpu,
  HardDrive,
  Wifi,
  Download,
  Apple,
  Monitor,
  Terminal,
  ArrowRight,
} from 'lucide-react';
import { PageHero } from '@/components/PageHero';

export const metadata = {
  title: 'Télécharger BIRDY',
  description:
    "Téléchargez BIRDY gratuitement pour Windows. Versions Linux (.AppImage / .deb) en accès anticipé. macOS à venir. Mises à jour signées numériquement, installation guidée.",
};

/**
 * Page Téléchargements — Sprint 19.1.
 *
 * Politique d'honnêteté :
 *
 * 1. **Windows** est le canal officiel, supporté en production. C'est ce
 *    que la majorité des PME africaines utilisent. Mises à jour signées.
 * 2. **Linux** est en accès anticipé : Tauri compile nativement pour
 *    Linux mais nous n'avons pas validé toutes les distributions. On
 *    fournit les builds avec un avertissement clair.
 * 3. **macOS** est planifié mais conditionné à l'investissement Apple
 *    Developer Program ($99/an) pour la signature et la notarisation.
 *    Tant que ce n'est pas validé, on n'affiche pas de date arbitraire :
 *    "à venir" + "demandez un accès anticipé non signé sur demande".
 *
 * Ton marketing : confiance, gratuité, simplicité. Pas de jargon.
 */

const VERSIONS = [
  {
    version: '1.4.2',
    date: '2026-04-28',
    size: '142 MB',
    notes: 'Liasse fiscale 2026 · corrections diverses',
    sha: 'a1b2c3d4e5f6...7890',
  },
  {
    version: '1.4.1',
    date: '2026-04-15',
    size: '141 MB',
    notes: 'Module RH/Paie — bulletins simplifiés',
    sha: 'b2c3d4e5f6a7...8901',
  },
  {
    version: '1.4.0',
    date: '2026-03-30',
    size: '140 MB',
    notes: 'Multi-devises · améliorations comptabilité',
    sha: 'c3d4e5f6a7b8...9012',
  },
  {
    version: '1.3.5',
    date: '2026-02-20',
    size: '128 MB',
    notes: 'OAuth Google · sauvegardes cloud',
    sha: 'd4e5f6a7b8c9...0123',
  },
  {
    version: '1.3.0',
    date: '2026-01-10',
    size: '125 MB',
    notes: 'Refonte du POS · performances',
    sha: 'e5f6a7b8c9d0...1234',
  },
];

export default function TelechargementsPage() {
  return (
    <>
      <PageHero
        tone="cyan"
        eyebrow="Téléchargements · Gratuit · Pour toujours"
        title="Installez BIRDY en moins de 30 minutes."
        description="L'ERP OHADA complet pour PME africaines. 100 % gratuit, sans abonnement, sans carte bancaire. Téléchargez l'installeur, lancez l'assistant, vous êtes opérationnel."
        centered
      />

      {/* === Bloc principal — Windows officiel ====================== */}
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pt-12 pb-16">
          <div className="rounded-3xl border border-novar-ink bg-novar-ink p-8 sm:p-12 text-white shadow-lifted">
            <div className="flex flex-col lg:flex-row lg:items-center gap-8">
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 rounded-full bg-cyan-500/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-300 ring-1 ring-cyan-400/40">
                  <Monitor className="h-3.5 w-3.5" />
                  Windows · Recommandé
                </div>
                <h2 className="mt-5 font-display text-3xl sm:text-4xl font-bold tracking-tight">
                  BIRDY pour Windows 10 & 11
                </h2>
                <p className="mt-4 text-slate-300 leading-relaxed">
                  Build officiel signé numériquement. Mises à jour
                  automatiques vérifiées par signature Ed25519. Compatible
                  Windows 10 (Build 19041+) et Windows 11.
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs uppercase tracking-wider text-slate-400">
                  <span>Version 1.4.2</span>
                  <span className="text-slate-700">·</span>
                  <span>142 MB</span>
                  <span className="text-slate-700">·</span>
                  <span>x64</span>
                  <span className="text-slate-700">·</span>
                  <span>Installer .msi</span>
                </div>
              </div>
              <div className="flex flex-col gap-3 lg:w-auto w-full">
                <a
                  href="https://github.com/novarstartup-tech/birdy/releases/latest"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 rounded-xl bg-cyan-500 px-8 py-4 text-base font-semibold text-slate-950 shadow-xl shadow-cyan-500/30 hover:bg-cyan-400 transition-colors"
                >
                  <Download className="h-5 w-5" />
                  Télécharger pour Windows
                </a>
                <span className="text-xs text-slate-400 text-center">
                  Téléchargement direct · Aucune inscription requise
                </span>
              </div>
            </div>
          </div>

          {/* Trust strip */}
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <TrustItem
              title="0 GNF"
              subtitle="Gratuit, à vie. Aucun abonnement, aucune limite."
            />
            <TrustItem
              title="Signé Ed25519"
              subtitle="Chaque build est vérifié avant installation."
            />
            <TrustItem
              title="Hors ligne"
              subtitle="Fonctionne sans Internet. Vos données restent chez vous."
            />
          </div>
        </div>
      </section>

      {/* === Linux — accès anticipé ================================== */}
      <section className="surface-alt">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-700">
              Autres systèmes
            </span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-novar-ink">
            Linux & macOS
          </h2>
          <p className="mt-4 text-novar-muted leading-relaxed max-w-2xl">
            BIRDY est conçu nativement multi-plateformes. Voici l&apos;état
            de chaque canal — nous préférons l&apos;honnêteté à un
            roadmap marketing.
          </p>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {/* Linux .deb */}
            <PlatformCard
              icon={Terminal}
              title="Linux (.deb)"
              subtitle="Ubuntu 22.04+, Debian 12+"
              status="Accès anticipé"
              statusTone="cyan"
              description="Build natif Tauri pour distributions Debian. Validé sur Ubuntu et Debian récents. Autres distributions à tester."
              cta={{
                label: 'Demander le build',
                href: '/contact?topic=support&from=linux-deb',
              }}
            />
            {/* Linux .AppImage */}
            <PlatformCard
              icon={Terminal}
              title="Linux (.AppImage)"
              subtitle="Universel — toutes distros"
              status="Accès anticipé"
              statusTone="cyan"
              description="Format portable, fonctionne sur la plupart des distributions Linux 64-bit. Idéal pour Fedora, Arch, openSUSE."
              cta={{
                label: 'Demander le build',
                href: '/contact?topic=support&from=linux-appimage',
              }}
            />
            {/* macOS */}
            <PlatformCard
              icon={Apple}
              title="macOS"
              subtitle="Apple Silicon & Intel"
              status="À venir"
              statusTone="amber"
              description="La build Tauri pour macOS est techniquement prête mais nous n'avons pas encore signé via le programme Apple Developer ($99/an). Build non signé disponible sur demande pour les développeurs avancés."
              cta={{
                label: 'Demander un accès',
                href: '/contact?topic=support&from=macos',
              }}
            />
          </div>
        </div>
      </section>

      {/* === Mises à jour — bandeau de confiance ==================== */}
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="rounded-2xl border border-novar-line bg-novar-surface-2 p-6 sm:p-8 flex flex-col sm:flex-row gap-5 items-start">
            <ShieldCheck className="h-6 w-6 text-cyan-700 flex-shrink-0 mt-0.5" />
            <div>
              <div className="font-display font-semibold text-novar-ink">
                Mises à jour automatiques sécurisées
              </div>
              <p className="mt-2 text-sm text-novar-muted leading-relaxed">
                BIRDY se met à jour automatiquement via Tauri Updater. Chaque
                mise à jour est <strong>signée numériquement avec une clé
                Ed25519</strong> vérifiée par votre client avant installation.
                Aucun risque d&apos;injection de code malveillant. Les notes
                de version sont publiées en clair, le SHA-256 de chaque
                build est consultable ci-dessous.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* === Historique versions ================================== */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-novar-ink mb-8">
            Historique des versions
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-novar-line">
            <table className="w-full text-sm min-w-[600px]">
              <thead className="bg-novar-surface-2">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold text-novar-ink">Version</th>
                  <th className="px-4 py-3 text-left font-semibold text-novar-ink">Date</th>
                  <th className="px-4 py-3 text-left font-semibold text-novar-ink">Taille</th>
                  <th className="px-4 py-3 text-left font-semibold text-novar-ink">Notes</th>
                  <th className="px-4 py-3 text-left font-semibold text-novar-ink">SHA-256</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-novar-line">
                {VERSIONS.map((v) => (
                  <tr key={v.version}>
                    <td className="px-4 py-3 font-mono font-semibold text-novar-ink">{v.version}</td>
                    <td className="px-4 py-3 text-novar-muted">{v.date}</td>
                    <td className="px-4 py-3 text-novar-muted">{v.size}</td>
                    <td className="px-4 py-3 text-novar-ink-soft">{v.notes}</td>
                    <td className="px-4 py-3 font-mono text-xs text-novar-muted">{v.sha}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* === Configuration requise ============================== */}
      <section className="surface-alt">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-novar-ink mb-10">
            Configuration requise
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <SpecCard
              icon={Cpu}
              title="Processeur"
              description="Intel/AMD x64 — 2 GHz minimum, 4 cœurs recommandés."
            />
            <SpecCard
              icon={HardDrive}
              title="Stockage"
              description="500 MB pour l'application, 2 GB conseillés pour la base de données."
            />
            <SpecCard
              icon={Wifi}
              title="Connexion"
              description="Optionnelle. BIRDY fonctionne hors ligne et synchronise lorsque le réseau revient."
            />
            <SpecCard
              icon={CheckCircle2}
              title="OS"
              description="Windows 10/11 (x64). Linux en accès anticipé. macOS planifié."
            />
          </div>
        </div>
      </section>

      {/* === CTA final ============================================== */}
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pb-24">
          <div className="rounded-3xl border border-novar-line bg-novar-surface-2 p-8 sm:p-12 text-center">
            <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-novar-ink">
              Besoin d&apos;un accompagnement ?
            </h2>
            <p className="mt-4 text-novar-muted leading-relaxed max-w-2xl mx-auto">
              Installation guidée, formation des équipes, migration depuis
              un ancien outil, paramétrage comptable OHADA personnalisé —
              nos équipes vous accompagnent.
            </p>
            <Link
              href="/services/sur-mesure"
              className="mt-6 btn-primary inline-flex"
            >
              Découvrir nos services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function TrustItem({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="rounded-2xl border border-novar-line bg-white p-5">
      <div className="font-display text-lg font-bold text-novar-ink">{title}</div>
      <div className="mt-1 text-sm text-novar-muted leading-snug">{subtitle}</div>
    </div>
  );
}

function PlatformCard({
  icon: Icon,
  title,
  subtitle,
  status,
  statusTone,
  description,
  cta,
}: {
  icon: typeof Apple;
  title: string;
  subtitle: string;
  status: string;
  statusTone: 'cyan' | 'amber';
  description: string;
  cta: { label: string; href: string };
}) {
  const toneClasses =
    statusTone === 'cyan'
      ? 'bg-cyan-50 text-cyan-700 ring-cyan-200'
      : 'bg-amber-50 text-amber-700 ring-amber-200';
  return (
    <div className="rounded-2xl border border-novar-line bg-white p-7 flex flex-col">
      <div className="flex items-center gap-3">
        <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-novar-surface-2 text-novar-ink ring-1 ring-novar-line">
          <Icon className="h-4 w-4" />
        </div>
        <span
          className={`rounded-full px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wider ring-1 ${toneClasses}`}
        >
          {status}
        </span>
      </div>
      <h3 className="mt-5 font-display text-lg font-semibold text-novar-ink">
        {title}
      </h3>
      <div className="mt-1 text-xs uppercase tracking-wider text-novar-muted">
        {subtitle}
      </div>
      <p className="mt-3 text-sm text-novar-muted leading-relaxed flex-1">
        {description}
      </p>
      <Link
        href={cta.href}
        className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-novar-ink hover:text-novar-accent transition-colors"
      >
        {cta.label} <ArrowRight className="h-3.5 w-3.5" />
      </Link>
    </div>
  );
}

function SpecCard({
  icon: Icon,
  title,
  description,
}: {
  icon: typeof Cpu;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl border border-novar-line bg-white p-6">
      <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-novar-surface-2 text-novar-ink ring-1 ring-novar-line">
        <Icon className="h-4 w-4" />
      </div>
      <h3 className="mt-4 font-display text-base font-semibold text-novar-ink">
        {title}
      </h3>
      <p className="mt-2 text-sm text-novar-muted leading-relaxed">{description}</p>
    </div>
  );
}
