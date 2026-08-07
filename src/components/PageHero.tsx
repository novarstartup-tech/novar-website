/**
 * Héros des pages secondaires — charte NOVAR v1.0.
 * Transparent (laisse voir le fond liquide), titre navy, eyebrow bleu
 * corporate + point ciel. Le prop `tone` est conservé pour compatibilité
 * des appelants mais n'altère plus la palette (charte unifiée).
 */
export function PageHero({
  eyebrow,
  title,
  description,
  centered = false,
  children,
}: {
  tone?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
  children?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden">
      <div className="relative mx-auto max-w-[1200px] px-[clamp(20px,4vw,32px)] pb-[clamp(32px,5vw,56px)] pt-[clamp(48px,7vw,88px)]">
        <div className={centered ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
          {eyebrow ? (
            <div className={`inline-flex items-center gap-2 font-display text-[11px] font-semibold uppercase tracking-[0.14em] text-[#1E3A8A] ${centered ? 'justify-center' : ''}`}>
              <span className="h-1.5 w-1.5 rounded-full bg-[#38B6FF] shadow-[0_0_10px_rgba(56,182,255,0.7)]" aria-hidden />
              {eyebrow}
            </div>
          ) : null}
          <h1 className="mt-5 text-[clamp(30px,5.2vw,44px)] font-bold leading-[1.05] tracking-[-0.035em] text-[#0D1B2A]">{title}</h1>
          {description ? <p className="mt-5 max-w-2xl text-[17px] leading-[1.7] text-[#44546B]">{description}</p> : null}
          {children ? <div className="mt-8">{children}</div> : null}
        </div>
      </div>
    </section>
  );
}
