'use client';
import * as TabsPrimitive from '@radix-ui/react-tabs';
import { cn } from '@/lib/utils';

export const Tabs = TabsPrimitive.Root;

export function TabsList({ className, ...props }: React.ComponentProps<typeof TabsPrimitive.List>) {
  return (<TabsPrimitive.List className={cn('inline-flex h-10 items-center justify-start gap-1 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 p-1 my-4', className)} {...props} />);
}
export function TabsTrigger({ className, ...props }: React.ComponentProps<typeof TabsPrimitive.Trigger>) {
  return (<TabsPrimitive.Trigger className={cn('inline-flex items-center justify-center rounded-md px-3 py-1.5 text-sm font-medium transition-colors', 'data-[state=active]:bg-white data-[state=active]:shadow-sm data-[state=active]:text-slate-900', 'dark:data-[state=active]:bg-slate-800 dark:data-[state=active]:text-white', 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white', className)} {...props} />);
}
export function TabsContent({ className, ...props }: React.ComponentProps<typeof TabsPrimitive.Content>) {
  return <TabsPrimitive.Content className={cn('mt-2', className)} {...props} />;
}
