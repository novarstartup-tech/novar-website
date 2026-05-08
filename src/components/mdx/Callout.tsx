import { Info, AlertTriangle, AlertCircle, Lightbulb } from 'lucide-react';
import type { ReactNode } from 'react';

type Variant = 'info' | 'warning' | 'danger' | 'tip';

const STYLES: Record<Variant, { bg: string; border: string; text: string; Icon: typeof Info }> = {
  info: { bg: 'bg-blue-50 dark:bg-blue-950/30', border: 'border-blue-200 dark:border-blue-900', text: 'text-blue-900 dark:text-blue-200', Icon: Info },
  warning: { bg: 'bg-amber-50 dark:bg-amber-950/30', border: 'border-amber-200 dark:border-amber-900', text: 'text-amber-900 dark:text-amber-200', Icon: AlertTriangle },
  danger: { bg: 'bg-red-50 dark:bg-red-950/30', border: 'border-red-200 dark:border-red-900', text: 'text-red-900 dark:text-red-200', Icon: AlertCircle },
  tip: { bg: 'bg-cyan-50 dark:bg-cyan-950/30', border: 'border-cyan-200 dark:border-cyan-900', text: 'text-cyan-900 dark:text-cyan-200', Icon: Lightbulb },
};

export function Callout({ variant = 'info', title, children }: { variant?: Variant; title?: string; children: ReactNode }) {
  const s = STYLES[variant];
  const Icon = s.Icon;
  return (
    <div className={`my-6 rounded-lg border ${s.bg} ${s.border} p-4 flex gap-3`}>
      <Icon className={`h-5 w-5 flex-shrink-0 mt-0.5 ${s.text}`} />
      <div className={`flex-1 ${s.text}`}>
        {title && <div className="font-semibold mb-1">{title}</div>}
        <div className="text-sm leading-relaxed [&>p]:mb-0">{children}</div>
      </div>
    </div>
  );
}
