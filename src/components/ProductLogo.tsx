import Image from 'next/image';

type Props = {
  className?: string;
  size?: number;
};

/**
 * Logo officiel BIRDY — fichier SVG copie depuis le repo BIRDY ERP v2
 * (public/birdy.svg du projet originel).
 */
export function BirdyLogo({ className = '', size = 40 }: Props) {
  return (
    <Image
      src="/logos/birdy.svg"
      alt="BIRDY"
      width={size}
      height={size}
      className={className}
      priority={false}
    />
  );
}

/**
 * Logo officiel BIRDY (PNG haute resolution, pour les zones haute densite).
 */
export function BirdyLogoPng({ className = '', size = 64 }: Props) {
  return (
    <Image
      src="/logos/birdy-icon.png"
      alt="BIRDY"
      width={size}
      height={size}
      className={className}
    />
  );
}

/**
 * Logo FEEDORA (placeholder SVG en attendant le fichier officiel
 * recupere depuis https://feedora-cyan.vercel.app/).
 *
 * Gabarit : grain de mais stylise + nom en mono.
 * Quand le vrai logo arrivera, remplacer par <Image src="/logos/feedora.svg" />.
 */
export function FeedoraLogo({ className = '', size = 40 }: Props) {
  return (
    <svg
      viewBox="0 0 80 80"
      width={size}
      height={size}
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="FEEDORA"
    >
      <rect x="0" y="0" width="80" height="80" rx="16" fill="#0891B2" />
      {/* Grain de mais stylise */}
      <ellipse cx="40" cy="40" rx="14" ry="22" fill="#F8FAFC" />
      <ellipse cx="35" cy="32" rx="2.5" ry="3.5" fill="#0891B2" opacity="0.3" />
      <ellipse cx="45" cy="32" rx="2.5" ry="3.5" fill="#0891B2" opacity="0.3" />
      <ellipse cx="35" cy="40" rx="2.5" ry="3.5" fill="#0891B2" opacity="0.3" />
      <ellipse cx="45" cy="40" rx="2.5" ry="3.5" fill="#0891B2" opacity="0.3" />
      <ellipse cx="35" cy="48" rx="2.5" ry="3.5" fill="#0891B2" opacity="0.3" />
      <ellipse cx="45" cy="48" rx="2.5" ry="3.5" fill="#0891B2" opacity="0.3" />
    </svg>
  );
}
