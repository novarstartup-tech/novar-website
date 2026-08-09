/**
 * Fond liquide NOVAR (charte v1.0) : wash radial fixe + trois bulles
 * dérivantes. Rendu une seule fois dans le layout, derrière tout le contenu
 * (z-index 0). Pur CSS, aucune interactivité → composant serveur.
 */
export function NovarBackground() {
  return (
    <div aria-hidden className="novar-liquid">
      <span className="novar-blob novar-blob-1" />
      <span className="novar-blob novar-blob-2" />
      <span className="novar-blob novar-blob-3" />
    </div>
  );
}
