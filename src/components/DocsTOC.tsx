export function DocsTOC() {
  return (
    <aside className="hidden xl:block w-52 flex-shrink-0">
      <div className="sticky top-20 h-[calc(100vh-5rem)] overflow-y-auto py-8 pl-6">
        <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
          Sur cette page
        </h4>
        <p className="text-xs text-slate-400 dark:text-slate-500 italic">
          La table des matières s&apos;adapte automatiquement au contenu.
        </p>
      </div>
    </aside>
  );
}
