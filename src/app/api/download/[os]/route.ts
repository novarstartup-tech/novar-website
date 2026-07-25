import { NextResponse } from 'next/server';
import { getBirdyDownloads, type BirdyOs } from '@/lib/releases';

/**
 * Redirection de téléchargement BIRDY — /api/download/<os>.
 *
 * Résout, au moment du clic, l'asset de la DERNIÈRE release publiée sur
 * GitHub et renvoie une redirection 302 vers celui-ci. Les boutons de la
 * page /telechargements pointent vers ces URLs internes stables, si bien
 * que :
 *   - la page reste 100 % statique (aucun lien versionné dans le HTML) ;
 *   - une nouvelle release BIRDY est servie automatiquement au prochain
 *     clic, sans redéploiement du site.
 *
 * La réponse GitHub est mise en cache 1 h (revalidate) pour ne pas
 * marteler l'API ni buter sur son rate-limit. La redirection elle-même
 * n'est jamais mise en cache (no-store) : chaque clic repasse par la
 * fonction, qui lit le cache GitHub et pointe vers la version courante.
 */

const VALID_OS: readonly BirdyOs[] = ['windows', 'mac', 'deb', 'appimage'];
const REVALIDATE_SECONDS = 3600;

function isBirdyOs(value: string): value is BirdyOs {
  return (VALID_OS as readonly string[]).includes(value);
}

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ os: string }> },
) {
  const { os } = await params;

  if (!isBirdyOs(os)) {
    return NextResponse.json({ error: 'unknown os' }, { status: 404 });
  }

  const downloads = await getBirdyDownloads({ revalidate: REVALIDATE_SECONDS });

  return NextResponse.redirect(downloads[os], {
    status: 302,
    headers: { 'Cache-Control': 'no-store' },
  });
}
