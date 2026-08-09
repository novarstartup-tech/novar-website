import Image from 'next/image';

type Props = {
  className?: string;
  size?: number;
};

/**
 * Logo officiel BIRDY : icone de l'application BIRDY ERP (PNG 512x512).
 * Source : src-tauri/crates/birdy-app/icons/icon.png du repo BIRDY.
 */
export function BirdyLogo({ className = '', size = 40 }: Props) {
  return (
    <Image
      src="/logos/birdy-icon-512.png"
      alt="BIRDY"
      width={size}
      height={size}
      className={className}
      priority={false}
      style={{ objectFit: 'contain' }}
    />
  );
}

/**
 * Alias hi-res : meme image source.
 */
export function BirdyLogoPng({ className = '', size = 64 }: Props) {
  return <BirdyLogo className={className} size={size} />;
}

/**
 * Logo officiel FEEDORA (PNG fourni par Djerno).
 */
export function FeedoraLogo({ className = '', size = 40 }: Props) {
  return (
    <Image
      src="/logos/feedora.png"
      alt="FEEDORA"
      width={size}
      height={size}
      className={className}
      style={{ objectFit: 'contain' }}
    />
  );
}
