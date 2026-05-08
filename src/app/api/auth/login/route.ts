import { NextResponse } from 'next/server';

// Placeholder authentication endpoint — espace client en cours de finalisation
export async function POST(_request: Request) {
  return NextResponse.json(
    {
      ok: false,
      error: 'Authentification non encore disponible',
      message: "L'espace client est en cours de finalisation. Contactez-nous via la page Contact.",
    },
    { status: 501 }
  );
}
