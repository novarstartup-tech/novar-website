export function StarField({ className = '' }: { className?: string }) {
  const stars = Array.from({ length: 60 }).map((_, i) => {
    const seed = (i * 9301 + 49297) % 233280;
    const r = seed / 233280;
    const x = (r * 100).toFixed(2);
    const y = (((i * 11173 + 12345) % 233280) / 233280 * 100).toFixed(2);
    const size = ((((i * 7919) % 233280) / 233280) * 1.6 + 0.4).toFixed(2);
    const opacity = ((((i * 3041) % 233280) / 233280) * 0.6 + 0.2).toFixed(2);
    return { x, y, size, opacity, key: i };
  });
  return (
    <svg className={`pointer-events-none absolute inset-0 h-full w-full ${className}`} viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden>
      {stars.map((s) => (
        <circle key={s.key} cx={s.x} cy={s.y} r={s.size} fill="#1FD4E2" opacity={s.opacity} />
      ))}
      <path d="M15 22 L16 26 L20 27 L16 28 L15 32 L14 28 L10 27 L14 26 Z" fill="#22E5F4" opacity="0.5" />
      <path d="M82 70 L83 73 L86 74 L83 75 L82 78 L81 75 L78 74 L81 73 Z" fill="#22E5F4" opacity="0.4" />
    </svg>
  );
}
