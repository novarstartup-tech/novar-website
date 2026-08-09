/**
 * Héros des pages secondaires (charte NOVAR v1.0).
 * Transparent (laisse voir le fond liquide), titre navy direct.
 * Les props `tone` et `eyebrow` sont acceptées pour compatibilité des
 * appelants mais ne sont plus rendues (kicker retiré).
 */
export function PageHero({
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
          <h1 className="text-[clamp(30px,5.2vw,44px)] font-bold leading-[1.05] tracking-[-0.035em] text-[#0D1B2A]">{title}</h1>
          {description ? <p className="mt-5 max-w-2xl text-[17px] leading-[1.7] text-[#44546B]">{description}</p> : null}
          {children ? <div className="mt-8">{children}</div> : null}
        </div>
      </div>
    </section>
  );
}
