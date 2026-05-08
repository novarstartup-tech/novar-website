import type { ReactNode } from 'react';

export function Steps({ children }: { children: ReactNode }) {
  return <ol className="my-6 space-y-6 border-l-2 border-novar-cyan/30 pl-6 [counter-reset:step]">{children}</ol>;
}

export function Step({ title, children }: { title: string; children: ReactNode }) {
  return (
    <li className="relative [counter-increment:step]">
      <span className="absolute -left-[34px] top-0 flex h-6 w-6 items-center justify-center rounded-full bg-novar-cyan text-xs font-bold text-novar-cosmic" aria-hidden>
        <span className="before:content-[counter(step)]" />
      </span>
      <h4 className="font-semibold text-slate-900 dark:text-white mb-1">{title}</h4>
      <div className="text-slate-700 dark:text-slate-300 text-sm">{children}</div>
    </li>
  );
}
