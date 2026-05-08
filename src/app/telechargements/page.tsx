import { CheckCircle2, ShieldCheck, Cpu, HardDrive, Wifi } from 'lucide-react';
import { DownloadButton } from '@/components/DownloadButton';
import { FeatureCard } from '@/components/FeatureCard';

export const metadata = {
  title: 'Téléchargements',
  description: 'Téléchargez BIRDY pour Windows. Versions Mac et Linux bientôt disponibles. Mises à jour automatiques signées.',
};

const VERSIONS = [
  { version: '1.4.2', date: '2026-04-28', size: '142 MB', notes: 'Liasse fiscale 2026 · corrections diverses', sha: 'a1b2c3d4e5f6...7890' },
  { version: '1.4.1', date: '2026-04-15', size: '141 MB', notes: 'Module RH/Paie — bulletins simplifiés', sha: 'b2c3d4e5f6a7...8901' },
  { version: '1.4.0', date: '2026-03-30', size: '140 MB', notes: 'Mobile Money MTN · multi-devises', sha: 'c3d4e5f6a7b8...9012' },
  { version: '1.3.5', date: '2026-02-20', size: '128 MB', notes: 'OAuth Google · sauvegardes cloud', sha: 'd4e5f6a7b8c9...0123' },
  { version: '1.3.0', date: '2026-01-10', size: '125 MB', notes: 'Refonte du POS · performances', sha: 'e5f6a7b8c9d0...1234' },
];

export default function TelechargementsPage() {
  return (
    <>
      <section className="bg-novar-cosmic py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white">Téléchargements</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-300">
            Installez BIRDY (notre plateforme de gestion de stock) sur votre
            poste de travail. Mises à jour automatiques signées numériquement.
          </p>
          <div className="mt-10 flex justify-center">
            <DownloadButton />
          </div>
          <p className="mt-4 text-sm text-slate-400">Version 1.4.2 — 142 MB — Windows 10/11 (x64)</p>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-novar-cosmic">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-bold text-slate-900 dark:text-white mb-6">Autres systèmes</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              { os: 'macOS', desc: 'Apple Silicon & Intel', status: 'Q3 2026' },
              { os: 'Linux (deb)', desc: 'Ubuntu, Debian', status: 'Q3 2026' },
              { os: 'Linux (rpm)', desc: 'Fedora, RHEL', status: 'Q4 2026' },
            ].map((p) => (
              <div
                key={p.os}
                className="rounded-xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-novar-cosmic-2 opacity-60"
              >
                <div className="flex items-center justify-between">
                  <div className="font-display font-semibold text-slate-900 dark:text-white">{p.os}</div>
                  <span className="rounded-full bg-novar-cyan/10 px-2 py-0.5 text-xs font-medium text-novar-cyan">
                    Bientôt
                  </span>
                </div>
                <div className="mt-1 text-sm text-slate-600 dark:text-slate-400">{p.desc}</div>
                <div className="mt-4 text-xs text-slate-500">Disponible {p.status}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-slate-50 dark:bg-novar-cosmic-2/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-xl border border-novar-cyan/20 bg-novar-cyan/5 p-6 flex gap-4">
            <ShieldCheck className="h-6 w-6 text-novar-cyan flex-shrink-0 mt-0.5" />
            <div>
              <div className="font-semibold text-slate-900 dark:text-white">Mises à jour automatiques sécurisées</div>
              <p className="mt-1 text-sm text-slate-700 dark:text-slate-300">
                BIRDY se met à jour automatiquement via Tauri Updater. Chaque mise à jour est signée
                numériquement avec une clé Ed25519 vérifiée par le client avant installation. Aucun risque
                d&apos;injection de code malveillant.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-novar-cosmic">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-bold text-slate-900 dark:text-white mb-6">Historique des versions</h2>
          <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800">
            <table className="w-full text-sm min-w-[600px]">
              <thead className="bg-slate-50 dark:bg-slate-900">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold text-slate-900 dark:text-white">Version</th>
                  <th className="px-4 py-3 text-left font-semibold text-slate-900 dark:text-white">Date</th>
                  <th className="px-4 py-3 text-left font-semibold text-slate-900 dark:text-white">Taille</th>
                  <th className="px-4 py-3 text-left font-semibold text-slate-900 dark:text-white">Notes</th>
                  <th className="px-4 py-3 text-left font-semibold text-slate-900 dark:text-white">SHA-256</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                {VERSIONS.map((v) => (
                  <tr key={v.version}>
                    <td className="px-4 py-3 font-mono font-semibold text-novar-blue dark:text-novar-cyan">{v.version}</td>
                    <td className="px-4 py-3 text-slate-600 dark:text-slate-400">{v.date}</td>
                    <td className="px-4 py-3 text-slate-600 dark:text-slate-400">{v.size}</td>
                    <td className="px-4 py-3 text-slate-700 dark:text-slate-300">{v.notes}</td>
                    <td className="px-4 py-3 font-mono text-xs text-slate-500">{v.sha}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50 dark:bg-novar-cosmic-2/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-bold text-slate-900 dark:text-white mb-8">Configuration requise</h2>
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
