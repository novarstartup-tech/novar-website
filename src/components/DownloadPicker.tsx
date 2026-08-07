'use client';

import { useEffect, useState } from 'react';
import { Download } from 'lucide-react';

type Os = 'windows' | 'mac' | 'linux';
type Platform = { os: Os; name: string; file: string; href: string };
type Labels = { recommended: string; others: string; download: string };

function detectOs(): Os | null {
  if (typeof navigator === 'undefined') return null;
  const ua = navigator.userAgent.toLowerCase();
  const uaData = (navigator as unknown as { userAgentData?: { platform?: string } }).userAgentData;
  const platform = (uaData?.platform || navigator.platform || '').toLowerCase();
  if (platform.includes('win') || ua.includes('windows')) return 'windows';
  if (platform.includes('mac') || ua.includes('mac os') || ua.includes('macintosh')) return 'mac';
  if (platform.includes('linux') || ua.includes('linux') || ua.includes('x11')) return 'linux';
  return null;
}

/**
 * Sélecteur de téléchargement — détecte automatiquement le système du
 * visiteur et met en avant l'installeur adapté (« Recommandé pour vous »),
 * les autres systèmes restant listés à côté. Défaut Windows au rendu serveur
 * (le plus courant), corrigé au montage côté client.
 */
export function DownloadPicker({ platforms, labels }: { platforms: Platform[]; labels: Labels }) {
  const [os, setOs] = useState<Os>('windows');
  useEffect(() => {
    // Détection client-only après montage : le serveur rend « windows »
    // (défaut), corrigé ici sans provoquer de mismatch d'hydratation.
    const detected = detectOs();
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (detected) setOs(detected);
  }, []);

  const recommended = platforms.find((p) => p.os === os) ?? platforms[0];
  const others = platforms.filter((p) => p !== recommended);

  return (
    <div className="grid gap-5 lg:grid-cols-[1.5fr_1fr]">
      <a href={recommended.href} className="novar-glass novar-lift relative block overflow-hidden rounded-[22px] p-8">
        <div className="font-display text-[11px] font-semibold uppercase tracking-[0.14em] text-[#1E3A8A]">{labels.recommended}</div>
        <h3 className="mt-3 text-[clamp(24px,3.6vw,30px)] font-bold tracking-[-0.025em] text-[#0D1B2A]">{recommended.name}</h3>
        <p className="mt-2 text-sm text-[#44546B]">{recommended.file}</p>
        <span className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[#38B6FF] px-6 py-3.5 text-[15px] font-bold text-[#0D1B2A] shadow-[0_12px_34px_rgba(56,182,255,0.32)]">
          <Download className="h-4 w-4" aria-hidden />
          {labels.download}
        </span>
      </a>

      <div className="novar-glass rounded-[22px] p-6">
        <div className="font-display text-[11px] font-semibold uppercase tracking-[0.14em] text-[#6B7C93]">{labels.others}</div>
        <ul className="mt-4 grid gap-1">
          {others.map((p) => (
            <li key={p.name}>
              <a href={p.href} className="flex items-center justify-between gap-3 rounded-xl px-3 py-3 transition-colors hover:bg-[#1E3A8A]/[0.06]">
                <span className="min-w-0">
                  <span className="block truncate text-sm font-semibold text-[#0D1B2A]">{p.name}</span>
                  <span className="block truncate text-xs text-[#6B7C93]">{p.file}</span>
                </span>
                <Download className="h-4 w-4 shrink-0 text-[#1E3A8A]" aria-hidden />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
