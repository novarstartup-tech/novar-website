import type { MDXComponents } from 'mdx/types';
import { Callout } from '@/components/mdx/Callout';
import { CodeBlock } from '@/components/mdx/CodeBlock';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/mdx/Tabs';
import { Steps, Step } from '@/components/mdx/Steps';
import { ApiTable } from '@/components/mdx/ApiTable';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children, ...props }) => (
      <h1 className="font-display text-4xl font-bold tracking-tight text-slate-900 dark:text-white mb-6" {...props}>{children}</h1>
    ),
    h2: ({ children, ...props }) => (
      <h2 className="font-display text-2xl font-semibold tracking-tight text-slate-900 dark:text-white mt-12 mb-4 border-b border-slate-200 dark:border-slate-800 pb-2" {...props}>{children}</h2>
    ),
    h3: ({ children, ...props }) => (
      <h3 className="font-display text-xl font-semibold tracking-tight text-slate-900 dark:text-white mt-8 mb-3" {...props}>{children}</h3>
    ),
    p: ({ children, ...props }) => (
      <p className="text-slate-700 dark:text-slate-300 leading-7 mb-4" {...props}>{children}</p>
    ),
    a: ({ children, ...props }) => (
      <a className="text-novar-blue dark:text-novar-cyan underline underline-offset-2 hover:no-underline" {...props}>{children}</a>
    ),
    ul: ({ children, ...props }) => (
      <ul className="list-disc list-outside pl-6 mb-4 space-y-2 text-slate-700 dark:text-slate-300" {...props}>{children}</ul>
    ),
    ol: ({ children, ...props }) => (
      <ol className="list-decimal list-outside pl-6 mb-4 space-y-2 text-slate-700 dark:text-slate-300" {...props}>{children}</ol>
    ),
    code: ({ children, ...props }) => (
      <code className="rounded bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 text-sm font-mono text-novar-blue dark:text-novar-cyan" {...props}>{children}</code>
    ),
    pre: ({ children, ...props }) => (
      <pre className="rounded-lg bg-slate-900 text-slate-100 p-4 overflow-x-auto my-6 text-sm" {...props}>{children}</pre>
    ),
    blockquote: ({ children, ...props }) => (
      <blockquote className="border-l-4 border-novar-cyan pl-4 italic text-slate-600 dark:text-slate-400 my-6" {...props}>{children}</blockquote>
    ),
    Callout, CodeBlock, Tabs, TabsList, TabsTrigger, TabsContent, Steps, Step, ApiTable,
    ...components,
  };
}
