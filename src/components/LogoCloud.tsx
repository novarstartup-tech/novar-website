const PLACEHOLDER_LOGOS = ['Acme Co.', 'Sahel Distrib', 'Conakry Tech', 'Boké Industries', 'Fouta SARL', 'Atlantic Group'];

export function LogoCloud() {
  return (
    <section className="border-y border-slate-200 dark:border-slate-800 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400">Ils nous font confiance</p>
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 items-center">
          {PLACEHOLDER_LOGOS.map((name) => (
            <div key={name} className="flex items-center justify-center text-center text-slate-400 dark:text-slate-500 font-display font-semibold text-lg opacity-70">{name}</div>
          ))}
        </div>
      </div>
    </section>
  );
}
