type Tone = 'cyan' | 'amber' | 'violet' | 'emerald' | 'slate';

const TONES: Record<Tone, { wash: string; text: string; dot: string }> = {
  cyan: { wash: 'from-cyan-50 via-white to-white', text: 'text-cyan-800', dot: 'bg-cyan-500' },
  amber: { wash: 'from-amber-50 via-white to-white', text: 'text-amber-800', dot: 'bg-amber-500' },
  violet: { wash: 'from-violet-50 via-white to-white', text: 'text-violet-800', dot: 'bg-violet-500' },
  emerald: { wash: 'from-emerald-50 via-white to-white', text: 'text-emerald-800', dot: 'bg-emerald-500' },
  slate: { wash: 'from-slate-100 via-white to-white', text: 'text-slate-700', dot: 'bg-slate-500' },
};

export function PageHero({
  tone = 'cyan',
  eyebrow,
  title,
  description,
  centered = false,
  children,
}: {
  tone?: Tone;
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
  children?: React.ReactNode;
}) {
  const colors = TONES[tone];
  return (
    <section className={`relative overflow-hidden border-b border-slate-200 bg-gradient-to-b ${colors.wash}`}>
      <div className="absolute inset-0 bg-hero-grid opacity-50" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className={centered ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
          {eyebrow ? (
            <div className={`inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] ${colors.text}`}>
              <span className={`h-2 w-2 rounded-full ${colors.dot}`} aria-hidden />
              {eyebrow}
            </div>
          ) : null}
          <h1 className="mt-5 font-display text-4xl font-bold leading-[1.08] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          {description ? <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 sm:text-xl">{description}</p> : null}
          {children ? <div className="mt-8">{children}</div> : null}
        </div>
      </div>
    </section>
  );
}
