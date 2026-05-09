import { CheckCircle2, ShieldCheck, Cpu, HardDrive, Wifi } from 'lucide-react';
import { DownloadButton } from '@/components/DownloadButton';
import { FeatureCard } from '@/components/FeatureCard';
import { PageHero } from '@/components/PageHero';

export const metadata = {
  title: 'Téléchargements',
  description:
    "Téléchargez BIRDY pour Windows. Versions Mac et Linux bientôt. Mises à jour automatiques signées.",
};

const VERSIONS = [
  { version: '1.4.2', date: '2026-04-28', size: '142 MB', notes: 'Liasse fiscale 2026 · corrections diverses', sha: 'a1b2c3d4e5f6...7890' },
  { version: '1.4.1', date: '2026-04-15', size: '141 MB', notes: 'Module RH/Paie — bulletins simplifiés', sha: 'b2c3d4e5f6a7...8901' },
  { version: '1.4.0', date: '2026-03-30', size: '140 MB', notes: 'Multi-devises · améliorations comptabilité', sha: 'c3d4e5f6a7b8...9012' },
  { version: '1.3.5', date: '2026-02-20', size: '128 MB', notes: 'OAuth Google · sauvegardes cloud', sha: 'd4e5f6a7b8c9...0123' },
  { version: '1.3.0', date: '2026-01-10', size: '125 MB', notes: 'Refonte du POS · performances', sha: 'e5f6a7b8c9d0...1234' },
];

export default function TelechargementsPage() {
  return (
    <>
      <PageHero
        tone="cyan"
        eyebrow="Téléchargements"
        title="Installez BIRDY."
        description="BIRDY, notre ERP OHADA, s'installe sur votre poste de travail. Mises à jour automatiques signées numériquement."
        centered
      >
        <div className="flex flex-col items-center gap-3">
          <DownloadButton />
          <p className="text-sm text-novar-muted">Version 1.4.2 — 142 MB — Windows 10/11 (x64)</p>
        </div>
      </PageHero>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-20">
          <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-novar-ink mb-8">
            Autres systèmes
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              { os: 'macOS', desc: 'Apple Silicon & Intel', status: 'Q3 2026' },
              { os: 'Linux (deb)', desc: 'Ubuntu, Debian', status: 'Q3 2026' },
              { os: 'Linux (rpm)', desc: 'Fedora, RHEL', status: 'Q4 2026' },
            ].map((p) => (
              <div
                key={p.os}
                className="rounded-2xl border border-novar-line bg-novar-surface-2 p-6 opacity-80"
              >
                <div className="flex items-center justify-between">
                  <div className="font-display font-semibold text-novar-ink">{p.os}</div>
                  <span className="rounded-full bg-novar-accent-soft px-2 py-0.5 text-xs font-medium text-novar-accent">
                    Bientôt
                  </span>
                </div>
                <div className="mt-2 text-sm text-novar-muted">{p.desc}</div>
                <div className="mt-4 text-xs text-novar-muted uppercase tracking-wider">
                  Disponible {p.status}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="surface-alt">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-12">
          <div className="rounded-2xl border border-novar-line bg-white p-6 flex gap-4 shadow-soft">
            <ShieldCheck className="h-6 w-6 text-novar-accent flex-shrink-0 mt-0.5" />
            <div>
              <div className="font-semibold text-novar-ink">Mises à jour automatiques sécurisées</div>
              <p className="mt-1 text-sm text-novar-muted leading-relaxed">
                BIRDY se met à jour automatiquement via Tauri Updater. Chaque
                mise à jour est signée numériquement avec une clé Ed25519
                vérifiée par le client avant installation. Aucun risque
                d&apos;injection de code malveillant.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-20">
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

      <section className="surface-alt">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24">
          <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-novar-ink mb-10">
            Configuration requise
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <FeatureCard icon={Cpu} title="Processeur" description="Intel/AMD x64 — 2 GHz minimum, 4 cœurs recommandés." />
            <FeatureCard icon={HardDrive} title="Stockage" description="500 MB pour l'application, 2 GB conseillés pour la base de données." />
            <FeatureCard icon={Wifi} title="Connexion" description="Optionnelle. BIRDY fonctionne hors ligne et synchronise lorsque le réseau revient." />
            <FeatureCard icon={CheckCircle2} title="OS" description="Windows 10/11 (x64). Mac & Linux bientôt." />
          </div>
        </div>
      </section>
    </>
  );
}
