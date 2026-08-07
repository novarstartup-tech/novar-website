/**
 * Résolution automatique des liens de téléchargement BIRDY.
 *
 * Les binaires vivent dans les GitHub Releases du dépôt public
 * `novarstartup-tech/birdy-releases`. Le nom de chaque asset embarque
 * le numéro de version (ex. `BIRDY_26.0.12_amd64.deb`), qui change à
 * chaque release — on ne peut donc PAS coder un lien en dur sans qu'il
 * périme.
 *
 * Ici on interroge l'API GitHub *au moment du build* (fetch en
 * `force-cache` → le résultat est figé dans le HTML statique, la page
 * reste 100 % SSG, aucune fonction serverless au runtime). À chaque
 * redéploiement du site, les liens repointent automatiquement vers la
 * dernière release publiée.
 *
 * Si l'API est injoignable au build (réseau, rate-limit…), on retombe
 * sur la page « releases/latest » de GitHub : jamais un 404, l'utilisateur
 * atterrit toujours sur une page de téléchargement valide.
 */

const RELEASES_REPO = 'novarstartup-tech/birdy-releases';
const LATEST_API = `https://api.github.com/repos/${RELEASES_REPO}/releases/latest`;
const RELEASES_PAGE = `https://github.com/${RELEASES_REPO}/releases/latest`;

export type BirdyOs = 'windows' | 'mac' | 'deb' | 'appimage';

export type BirdyDownloads = Record<BirdyOs, string>;

interface GithubAsset {
  name: string;
  browser_download_url: string;
}

interface GithubRelease {
  tag_name?: string;
  assets?: GithubAsset[];
}

/**
 * Pour chaque OS, une liste de prédicats par ordre de préférence.
 * Le premier asset qui matche gagne. On exclut implicitement les
 * fichiers de signature (`.sig`) et de métadonnées (`.json`) car leurs
 * suffixes ne correspondent à aucun prédicat.
 */
const MATCHERS: Record<BirdyOs, ((name: string) => boolean)[]> = {
  windows: [(n) => n.endsWith('-setup.exe'), (n) => n.endsWith('.exe'), (n) => n.endsWith('.msi')],
  mac: [(n) => n.endsWith('.dmg')],
  deb: [(n) => n.endsWith('.deb')],
  appimage: [(n) => n.endsWith('.AppImage')],
};

function pickAsset(assets: GithubAsset[], os: BirdyOs): string | null {
  for (const matches of MATCHERS[os]) {
    const hit = assets.find((a) => matches(a.name));
    if (hit) return hit.browser_download_url;
  }
  return null;
}

/**
 * Récupère les liens de la dernière release. Toujours résolu : en cas
 * d'échec ou d'asset manquant, on renvoie la page releases/latest.
 *
 * `revalidate` (secondes) : durée de cache de la réponse GitHub. Utilisé
 * par l'endpoint /api/download/[os] pour rester frais sans marteler
 * l'API. Non fourni → `force-cache` (résolution figée au build).
 */
export async function getBirdyDownloads(
  opts: { revalidate?: number } = {},
): Promise<BirdyDownloads> {
  const fallback: BirdyDownloads = {
    windows: RELEASES_PAGE,
    mac: RELEASES_PAGE,
    deb: RELEASES_PAGE,
    appimage: RELEASES_PAGE,
  };

  try {
    const headers: Record<string, string> = {
      Accept: 'application/vnd.github+json',
      'User-Agent': 'novar-website',
      'X-GitHub-Api-Version': '2022-11-28',
    };
    // Optionnel : relève le rate-limit GitHub de 60 à 5000 req/h au build.
    if (process.env.GITHUB_TOKEN) {
      headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
    }

    // Avec revalidate : cache ISR rafraîchi périodiquement (endpoint
    // runtime). Sans : force-cache, figé au build.
    const cacheInit =
      opts.revalidate != null
        ? { next: { revalidate: opts.revalidate } }
        : { cache: 'force-cache' as const };
    const res = await fetch(LATEST_API, { headers, ...cacheInit });
    if (!res.ok) return fallback;

    const release = (await res.json()) as GithubRelease;
    const assets = release.assets ?? [];

    return {
      windows: pickAsset(assets, 'windows') ?? fallback.windows,
      mac: pickAsset(assets, 'mac') ?? fallback.mac,
      deb: pickAsset(assets, 'deb') ?? fallback.deb,
      appimage: pickAsset(assets, 'appimage') ?? fallback.appimage,
    };
  } catch {
    return fallback;
  }
}

/**
 * Métadonnées de la dernière release BIRDY (version + date), relues sur
 * GitHub au build comme les liens de download. Fallback = dernières
 * valeurs réelles connues, si l'API est injoignable au build.
 */
export interface BirdyReleaseMeta {
  version: string;
  datePublished: string;
}

const RELEASE_META_FALLBACK: BirdyReleaseMeta = { version: '26.0.24', datePublished: '2026-08-04' };
const VERSION_RE = /(\d+\.\d+\.\d+)/;

export async function getLatestReleaseMeta(): Promise<BirdyReleaseMeta> {
  try {
    const headers: Record<string, string> = {
      Accept: 'application/vnd.github+json',
      'User-Agent': 'novar-website',
      'X-GitHub-Api-Version': '2022-11-28',
    };
    if (process.env.GITHUB_TOKEN) headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
    const res = await fetch(LATEST_API, { headers, cache: 'force-cache' });
    if (!res.ok) return RELEASE_META_FALLBACK;
    const release = (await res.json()) as { tag_name?: string; published_at?: string };
    return {
      version: release.tag_name?.match(VERSION_RE)?.[1] ?? RELEASE_META_FALLBACK.version,
      datePublished: release.published_at ? release.published_at.slice(0, 10) : RELEASE_META_FALLBACK.datePublished,
    };
  } catch {
    return RELEASE_META_FALLBACK;
  }
}
