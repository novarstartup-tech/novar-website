'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Rocket,
  BookOpen,
  Receipt,
  GitMerge,
  FileText,
  ChefHat,
  PackageSearch,
  Users,
  Calculator,
  ShieldCheck,
  CalendarClock,
  type LucideIcon,
} from 'lucide-react';
import { cn } from '@/lib/utils';

const CATEGORIES = [
  'Tous',
  'Démarrage',
  'BIRDY',
  'OHADA',
  'FEEDORA',
  'Sécurité',
] as const;
type Category = (typeof CATEGORIES)[number];

type Tuto = {
  title: string;
  duration: string;
  category: Exclude<Category, 'Tous'>;
  icon: LucideIcon;
  description: string;
};

const TUTOS: Tuto[] = [
  {
    title: 'Démarrer avec BIRDY en 10 minutes',
    duration: '10 min',
    category: 'Démarrage',
    icon: Rocket,
    description: 'Installation, création de société, premiers articles, première vente.',
  },
  {
    title: 'Configurer son plan comptable OHADA',
    duration: '12 min',
    category: 'OHADA',
    icon: BookOpen,
    description: 'Importer le SYSCOHADA révisé, ajuster les comptes auxiliaires.',
  },
  {
    title: 'Créer sa première facture',
    duration: '5 min',
    category: 'BIRDY',
    icon: Receipt,
    description: 'Modèle de facture, mentions légales, envoi par e-mail.',
  },
  {
    title: 'Lettrer une facture client',
    duration: '6 min',
    category: 'OHADA',
    icon: GitMerge,
    description: 'Pointer un encaissement avec la facture correspondante.',
  },
  {
    title: 'Générer la liasse fiscale 2026',
    duration: '14 min',
    category: 'OHADA',
    icon: FileText,
    description: 'Bilan, compte de résultat, TAFIRE, annexes — en un clic.',
  },
  {
    title: 'FEEDORA : créer une formule poulet de chair',
    duration: '8 min',
    category: 'FEEDORA',
    icon: ChefHat,
    description: 'Sélectionner les matières, fixer les contraintes nutritionnelles.',
  },
  {
    title: 'FEEDORA : importer ses prix matières premières',
    duration: '7 min',
    category: 'FEEDORA',
    icon: PackageSearch,
    description: 'Mettre à jour le coût/tonne et recalculer toutes les formules.',
  },
  {
    title: 'Inviter un collaborateur et gérer les rôles',
    duration: '4 min',
    category: 'Démarrage',
    icon: Users,
    description: 'Permissions par rôle : gérant, comptable, caissier, vendeur.',
  },
  {
    title: 'Calculer la paie mensuelle (IRPP & CNSS)',
    duration: '11 min',
    category: 'BIRDY',
    icon: Calculator,
    description: 'Bulletins conformes Guinée, déclarations préformatées.',
  },
  {
    title: 'Activer la double authentification',
    duration: '3 min',
    category: 'Sécurité',
    icon: ShieldCheck,
    description: 'TOTP via Google Authenticator, codes de récupération.',
  },
  {
    title: 'Programmer ses sauvegardes automatiques',
    duration: '5 min',
    category: 'Sécurité',
    icon: CalendarClock,
    description: 'Sauvegarde locale quotidienne + cloud hebdomadaire chiffrée.',
  },
  {
    title: 'Réaliser un inventaire physique',
    duration: '9 min',
    category: 'BIRDY',
    icon: PackageSearch,
    description: 'Compter, ajuster, valoriser les écarts en comptabilité.',
  },
];

export default function TutorielsPage() {
  const [filter, setFilter] = useState<Category>('Tous');
  const filtered = filter === 'Tous' ? TUTOS : TUTOS.filter((t) => t.category === filter);

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-white">
        <div className="absolute inset-x-0 top-0 h-[420px] bg-gradient-to-b from-novar-surface-2 to-white" aria-hidden />
        <div className="absolute inset-0 bg-dots opacity-50" aria-hidden />
        <div className="relative mx-auto max-w-5xl px-6 lg:px-8 pt-24 pb-16 md:pt-28 md:pb-20">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-novar-accent">
            Tutoriels
          </span>
          <h1 className="mt-5 font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-novar-ink">
            Apprendre BIRDY et FEEDORA, étape par étape.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-novar-muted leading-relaxed">
            Des guides courts et pratiques pour prendre en main vos outils
            NOVAR. La plupart durent moins de dix minutes.
          </p>
        </div>
      </section>

      {/* FILTRES */}
      <section className="sticky top-16 z-30 border-b border-novar-line bg-white/85 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-4">
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                type="button"
                className={cn(
                  'rounded-full px-4 py-1.5 text-sm font-medium transition-colors',
                  filter === c
                    ? 'bg-novar-ink text-white'
                    : 'border border-novar-line bg-white text-novar-ink-soft hover:bg-novar-surface-3'
                )}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* GRILLE */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((t) => {
              const Icon = t.icon;
              return (
                <Link
                  key={t.title}
                  href="#"
                  className="group flex flex-col rounded-2xl border border-novar-line bg-white p-6 transition-all hover:border-novar-ink/20 hover:shadow-lifted"
                >
                  <div className="flex items-center justify-between">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-novar-surface-2 text-novar-ink ring-1 ring-novar-line">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="rounded-full bg-novar-accent-soft px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-novar-accent">
                      {t.duration}
                    </span>
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold text-novar-ink">
                    {t.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-novar-muted flex-1">
                    {t.description}
                  </p>
                  <div className="mt-5 flex items-center justify-between text-xs uppercase tracking-wider text-novar-muted">
                    <span>{t.category}</span>
                    <span className="font-semibold text-novar-ink group-hover:text-novar-accent transition-colors">
                      Voir le tuto →
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
