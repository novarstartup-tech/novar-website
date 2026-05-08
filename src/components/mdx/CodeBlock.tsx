'use client';
import { useState } from 'react';
import { Check, Copy } from 'lucide-react';

export function CodeBlock({ code, language = 'bash', filename }: { code: string; language?: string; filename?: string }) {
  const [copied, setCopied] = useState(false);
  async function handleCopy() {
    try { await navigator.clipboard.writeText(code); setCopied(true); setTimeout(() => setCopied(false), 1500); } catch {}
  }
  return (
    <div className="my-6 overflow-hidden rounded-lg border border-slate-800 bg-slate-900">
      <div className="flex items-center justify-between border-b border-slate-800 px-4 py-2">
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono uppercase tracking-wider text-slate-400">{language}</span>
          {filename && <span className="text-xs text-slate-500">— {filename}</span>}
        </div>
        <button onClick={handleCopy} className="text-slate-400 hover:text-white transition-colors" aria-label="Copier le code" type="button">
          {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
        </button>
      </div>
      <pre className="overflow-x-auto px-4 py-4 text-sm leading-relaxed text-slate-100"><code className="font-mono">{code}</code></pre>
    </div>
  );
}
