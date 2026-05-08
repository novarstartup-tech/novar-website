'use client';

import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';

type Q = { q: string; a: string };

export function FaqAccordion({ items }: { items: Q[] }) {
  return (
    <Accordion.Root type="single" collapsible className="space-y-2">
      {items.map((it, i) => (
        <Accordion.Item
          key={i}
          value={`item-${i}`}
          className="rounded-lg border border-slate-200 bg-white dark:border-slate-800 dark:bg-novar-cosmic-2 overflow-hidden"
        >
          <Accordion.Header>
            <Accordion.Trigger className="group flex w-full items-center justify-between gap-3 px-5 py-4 text-left hover:bg-slate-50 dark:hover:bg-slate-800/50">
              <span className="font-semibold text-slate-900 dark:text-white">{it.q}</span>
              <ChevronDown className="h-4 w-4 text-slate-400 transition-transform group-data-[state=open]:rotate-180" />
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="px-5 pb-4 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
            {it.a}
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}
