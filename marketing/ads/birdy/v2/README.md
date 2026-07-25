# Bannières BIRDY — v2 (recommandées)

> Version améliorée après retours Djerno (2026-07-25). **À privilégier sur la v1.**

## Corrections apportées vs v1
1. **Vrai logiciel** : chaque bannière montre une **vraie capture BIRDY** (badge
   « VRAIE CAPTURE »), plus un écran inventé par l'IA :
   - Commerce → capture **Dashboard**
   - Industrie → capture **Stock**
   - Service → capture **Ventes / factures**
2. **Diversité** : **2 hommes + 1 femme** (v1 = 3 femmes).
   - Commerce → homme (quincaillerie)
   - Industrie → femme (boulangerie)
   - Service → homme (réparation électronique)
3. **Scènes variées** : 3 décors/métiers distincts, cadrages différents.

## Fichiers
| Modèle | Bannière finale | Fond photo | Capture réelle | Source |
|--------|-----------------|-----------|----------------|--------|
| Commerce | `birdy-commerce-v2-1x1.png` | `bg-commerce.png` | `cap-commerce.png` | `commerce.html` |
| Industrie | `birdy-industrie-v2-1x1.png` | `bg-industrie.png` | `cap-industrie.png` | `industrie.html` |
| Service | `birdy-service-v2-1x1.png` | `bg-service.png` | `cap-service.png` | `service.html` |

Concept : photo lifestyle réelle (entrepreneur·e africain·e) + encart « fenêtre app »
avec la vraie capture BIRDY + accroche unifiée « Sortez du cahier » + CTA.

## Régénérer un PNG
Servir ce dossier (`npx serve marketing/ads/birdy/v2`), ouvrir le `.html`, capturer en 1024×1024.

## Reste
- Intégrer le **vrai logo NOVAR** (actuellement texte).
- Captures réelles par module : idéalement une vue **Production** pour l'Industrie
  (actuellement Stock) quand elle sera disponible.
