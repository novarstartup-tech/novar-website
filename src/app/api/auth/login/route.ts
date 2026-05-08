import { NextResponse } from 'next/server';

// Placeholder authentication endpoint — real implementation Sprint 17B
export async function POST(_request: Request) {
  return NextResponse.json(
    {
      ok: false,
      error: 'Authentification disponible Sprint 17B',
      message: "L'authentification utilisateur sera disponible avec la mise en ligne de CinetPay.",
    },
    { status: 501 }
  );
}
