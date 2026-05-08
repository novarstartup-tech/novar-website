import Link from 'next/link';
import { NovarMark } from '@/components/NovarLogo';

export const metadata = { title: 'Connexion' };

export default function LoginPage() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center bg-slate-50 dark:bg-novar-cosmic-2/30 py-16 px-4">
      <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-novar-cosmic">
        <div className="flex justify-center mb-6">
          <NovarMark size={48} />
        </div>
        <h1 className="font-display text-2xl font-bold text-center text-slate-900 dark:text-white">Connexion</h1>
        <p className="mt-2 text-center text-sm text-slate-600 dark:text-slate-400">
          Accédez à votre espace NOVAR
        </p>

        <form className="mt-6 space-y-4" action="/api/auth/login" method="POST">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
              Adresse e-mail
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm placeholder:text-slate-400 focus:border-novar-cyan focus:outline-none focus:ring-1 focus:ring-novar-cyan dark:border-slate-700 dark:bg-novar-cosmic-2 dark:placeholder:text-slate-500"
              placeholder="vous@entreprise.gn"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
              Mot de passe
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm placeholder:text-slate-400 focus:border-novar-cyan focus:outline-none focus:ring-1 focus:ring-novar-cyan dark:border-slate-700 dark:bg-novar-cosmic-2 dark:placeholder:text-slate-500"
              placeholder="••••••••"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-lg bg-novar-cosmic px-4 py-2.5 text-sm font-semibold text-white hover:bg-slate-900 dark:bg-novar-cyan dark:text-novar-cosmic dark:hover:bg-novar-cyan-glow"
          >
            Se connecter
          </button>
        </form>

        <p className="mt-6 text-center text-xs text-slate-500">
          La création de compte est disponible Sprint 17B.{' '}
          <Link href="/contact" className="text-novar-blue dark:text-novar-cyan hover:underline">
            Contactez-nous
          </Link>
        </p>
      </div>
    </section>
  );
}
