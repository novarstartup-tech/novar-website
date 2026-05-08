'use client';

import { useEffect, useState } from 'react';
import { Download } from 'lucide-react';

type OS = 'windows' | 'mac' | 'linux' | 'unknown';

function detectOS(): OS {
  if (typeof window === 'undefined') return 'unknown';
  const ua = window.navigator.userAgent.toLowerCase();
  if (ua.includes('win')) return 'windows';
  if (ua.includes('mac')) return 'mac';
  if (ua.includes('linux')) return 'linux';
  return 'unknown';
}

const LABELS: Record<OS, string> = {
  windows: 'Télécharger BIRDY pour Windows',
  mac: 'Télécharger BIRDY pour macOS (Bientôt)',
  linux: 'Télécharger BIRDY pour Linux (Bientôt)',
  unknown: 'Télécharger BIRDY',
};

export function DownloadButton() {
  const [os, setOs] = useState<OS>('unknown');

  useEffect(() => {
    setOs(detectOS());
  }, []);

  const enabled = os === 'windows' || os === 'unknown';

  return (
    <button
      type="button"
      disabled={!enabled}
      className="inline-flex items-center gap-3 rounded-xl bg-novar-cyan px-8 py-4 text-base font-semibold text-novar-cosmic shadow-xl shadow-novar-cyan/20 hover:bg-novar-cyan-glow disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
    >
      <Download className="h-5 w-5" />
      {LABELS[os]}
    </button>
  );
}
