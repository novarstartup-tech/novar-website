'use client';

import { useState } from 'react';
import { VideoCard } from '@/components/VideoCard';
import { cn } from '@/lib/utils';

const CATEGORIES = ['Tous', 'Démarrage', 'Ventes', 'Stock', 'Compta', 'Paie'] as const;
type Category = typeof CATEGORIES[number];

const VIDEOS: { title: string; duration: string; category: Exclude<Category, 'Tous'> }[] = [
  { title: 'Premier pas avec BIRDY ERP : créer votre société', duration: '4:32', category: 'Démarrage' },
  { title: 'Configurer votre plan comptable OHADA', duration: '6:18', category: 'Démarrage' },
  { title: 'Inviter vos collaborateurs et gérer les rôles', duration: '3:45', category: 'Démarrage' },
  { title: 'Encaisser une vente au POS en 30 secondes', duration: '2:50', category: 'Ventes' },
  { title: 'Émettre une facture conforme', duration: '5:10', category: 'Ventes' },
  { title: 'Recevoir un paiement Mobile Money', duration: '4:00', category: 'Ventes' },
  { title: 'Créer vos articles et catégories', duration: '5:20', category: 'Stock' },
  { title: 'Réaliser un inventaire physique', duration: '7:40', category: 'Stock' },
  { title: 'Saisir une écriture manuelle', duration: '6:30', category: 'Compta' },
  { title: 'Lettrer les comptes clients', duration: '5:55', category: 'Compta' },
  { title: 'Générer la liasse fiscale annuelle', duration: '8:12', category: 'Compta' },
  { title: 'Calculer la paie mensuelle', duration: '6:45', category: 'Paie' },
];

export default function TutorielsPage() {
  const [filter, setFilter] = useState<Category>('Tous');
  const filtered = filter === 'Tous' ? VIDEOS : VIDEOS.filter((v) => v.category === filter);

  return (
    <>
      <section className="bg-novar-cosmic py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white">Tutoriels vidéo</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-300">
            Apprenez à utiliser BIRDY ERP en quelques minutes. De la première installation aux fonctions avancées.
          </p>
        </div>
      </section>

      <section className="py-12 bg-white dark:bg-novar-cosmic border-b border-slate-200 dark:border-slate-800 sticky top-16 z-40 backdrop-blur-xl bg-white/80 dark:bg-novar-cosmic/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                type="button"
                className={cn(
                  'rounded-full px-4 py-1.5 text-sm font-medium transition-colors',
                  filter === c
                    ? 'bg-novar-cosmic text-white dark:bg-novar-cyan dark:text-novar-cosmic'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700'
                )}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-white dark:bg-novar-cosmic">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {filtered.map((v, i) => (
              <VideoCard key={i} title={v.title} duration={v.duration} category={v.category} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
