# Plan marketing BIRDY — NOVAR

> Document de travail interne (dossier `marketing/`, **non déployé**).
> Auteur : agent Growth NOVAR. Date : 2026-07-25. Produit prioritaire : **BIRDY**.
> Fondé sur les faits connus du projet (voir « Sources » en fin). Les points
> marqués `[À VALIDER]` / `[à caler]` ne sont pas inventés : ils attendent une
> donnée réelle.

---

## 1. Résumé exécutif

BIRDY est un **ERP OHADA de bureau, 100 % gratuit**, édité par **NOVAR** (studio
logiciel basé à Conakry). Il sert **3 modèles d'affaires** (choisis à l'installation,
l'interface s'adapte au métier) — **et non les seuls commerçants** :
- **Commerce** — acheter pour revendre (boutique, pharmacie, quincaillerie, grossiste…).
- **Industrie** — fabriquer des produits (boulangerie, couture, menuiserie, agro-transformation…).
- **Service** — vendre des prestations sans stock (coiffure, réparation, conseil, transport…).

Cible : **TPE/PME de l'espace OHADA**, ces 3 profils, Guinée d'abord puis Sénégal,
Côte d'Ivoire, Mali, Bénin, Cameroun.

Comme le produit est gratuit, **le prix n'est pas le levier** — c'est **la
confiance et l'adoption**. La question à laquelle tout le marketing doit répondre :
*« Pourquoi un commerçant ferait-il confiance à un logiciel gratuit pour sa
comptabilité ? »*

Stratégie : **Product-Led Growth**, moteur **organique** (contenu + SEO/GEO +
bouche-à-oreille) en priorité, budget publicitaire activé seulement une fois qu'un
message aura prouvé qu'il convertit.

**North Star Metric : nombre de PME actives sur BIRDY** (= ont créé leur 1re
facture réelle). Tout le reste (trafic, téléchargements) n'est qu'un moyen.

---

## 2. Objectifs (fixés par l'agent growth, à ajuster sur baseline réelle)

> Aucune baseline chiffrée n'est encore instrumentée. **Étape 0 = mesurer** le
> nombre actuel de téléchargements (API GitHub Releases) et de visiteurs
> (Vercel Analytics). Les cibles ci-dessous sont des ordres de grandeur pour une
> startup guinéenne early-stage, à recaler une fois la baseline connue.

| Horizon | Objectif principal | Cibles indicatives `[à caler]` |
|---------|--------------------|-------------------------------|
| **30 jours** | Fondations + preuve + 1ers signaux | messaging refondu en ligne · compteur de téléchargements réel · 3-5 témoignages collectés · rythme social lancé (3 posts/sem) |
| **90 jours** | Traction organique en Guinée | trafic organique ×2-3 · X installs/mois · 1er canal social avec audience naissante · 5-10 PME actives identifiées nommément |
| **180 jours** | Preuve de modèle + expansion | communauté d'utilisateurs active · référencement top 3 sur requêtes clés Guinée · début expansion Sénégal/CI · 1res demandes de sur-mesure entrantes (monétisation) |

**Principe de mesure** : ne jamais afficher un chiffre non vérifié (téléchargements,
utilisateurs). La crédibilité en OHADA est fragile.

---

## 3. Cible & personas

**Marché** : espace OHADA. Priorité géographique **Guinée (Conakry)** → puis UEMOA
(XOF) → Cameroun (CEMAC, XAF, TVA 19,25 %).

Les personas sont organisés par **modèle d'affaires** (les 3 que BIRDY couvre) —
voir la matrice des douleurs par métier.

1. **Le commerçant (modèle Commerce)** — boutique, pharmacie, quincaillerie, grossiste.
   - Gère au cahier/Excel. Douleurs : stock qui fuit, marges invisibles, factures manuelles, stress fiscal.
2. **Le fabricant / transformateur (modèle Industrie)** — boulangerie, atelier de couture, menuiserie, savonnerie, agro-transformation.
   - Douleurs : ne connaît pas son **coût de revient fabriqué**, gère ses recettes de tête, pas de suivi matières → produits finis.
3. **Le prestataire de services (modèle Service)** — coiffure, réparation, conseil, transport, informatique.
   - Douleurs : devis/factures faits à la main, pas de catalogue de prestations, pas de suivi de la conformité OHADA. **Pas de stock** → messaging différent (ne pas parler de « stock »).
4. **Le comptable / cabinet** (persona transversal — **prescripteur clé**)
   - Sert plusieurs PME des 3 types. Veut standardiser, rester conforme SYSCOHADA. Recommande BIRDY à ses clients → fort levier de croissance.

> **Règle de messaging** : segmenter par modèle. Un même angle (« sortez du cahier »)
> se décline en 3 versions (stock/marge pour le Commerce, coût de revient pour
> l'Industrie, devis/prestations pour le Service).

---

## 4. Positionnement & messaging

**One-liner d'entité (à répéter à l'identique — SEO + GEO) :**
> « BIRDY est un logiciel de gestion commerciale, de facturation, de caisse et de
> comptabilité OHADA/SYSCOHADA 100 % gratuit, édité par NOVAR (SaaS Studio basé à
> Conakry, Guinée), pour les PME de l'espace OHADA. »

**Promesse centrale :** tenir une compta conforme OHADA sans être comptable —
depuis sa boutique, même sans connexion stable.

**3 piliers de différenciation :**
1. **Conforme OHADA nativement** (SYSCOHADA, multi-pays) — pas un ERP occidental bricolé.
2. **Terrain africain réel** — multi-devises, fonctionne hors-ligne, pensé pour un commerçant.
3. **Bâti par des gens d'ici** — NOVAR, équipe de Conakry qui vit le problème.

**Angles créatifs (banque de campagnes) :**
- « **Sortez du cahier.** » (transformation) — *bannière produite ✅*
- « **La compta OHADA sans être comptable.** » (bénéfice cœur)
- « **0 franc. 0 abonnement. 0 carte bancaire.** » (lève la barrière prix)
- « **Marche même sans internet.** » (différenciateur terrain)
- « **Pourquoi c'est gratuit ?** » (transparence = confiance)

---

## 5. Funnel (AAARRR) appliqué à BIRDY

| Étape | Action marketing | Actif clé |
|-------|------------------|-----------|
| **Awareness** | SEO longue traîne pays×métier · social éducatif · bouche-à-oreille | pages `/logiciels/*` (déjà en ligne), posts, vidéos |
| **Acquisition** | landing produit qui vend le bénéfice + le « pourquoi gratuit » | page `/produits/birdy-erp` (**refonte prête, branche `growth/birdy-landing`**) |
| **Activation** | onboarding sans friction → 1re facture rapide | wizard 1er lancement, tutoriels intégrés |
| **Retention** | valeur quotidienne · support WhatsApp · communauté | doc, guides, groupe utilisateurs |
| **Referral** | parrainage + demande explicite de recommandation · prescripteurs comptables | programme de parrainage `[à concevoir]` |
| **Revenue** | (produit gratuit) monétisation indirecte : sur-mesure, conseil, formation | services NOVAR (déjà en CGV) |

---

## 6. Canaux & tactiques

### 6.1 SEO / GEO (canal #1, déjà amorcé)
- **Fait** : JSON-LD SoftwareApplication, 10 pages longue traîne (4 piliers + 6 pays),
  llms.txt, sitemap/robots, hreflang. (voir mémoire `novar-seo`)
- **À faire (code)** : versions EN des pages, pages sectorielles (boutique, resto,
  pharmacie, quincaillerie…), articles de blog « compta OHADA pour les nuls ».
- **À faire (Djerno, hors code)** : Google Search Console (soumettre sitemap), Bing
  Webmaster, Wikidata (NOVAR + BIRDY), annuaires SaaS (AlternativeTo, SaaSHub, Product
  Hunt, Capterra), Google Business Profile, Crunchbase/LinkedIn. *(guide off-site archivé)*

### 6.2 Social organique
- **LinkedIn** (NOVAR) : build-in-public, coulisses studio, éducation compta OHADA,
  cas d'usage. Cible prescripteurs (comptables) + écosystème tech africain.
- **TikTok / Reels / Shorts** : format vertical, hook < 3 s, démos « avant/après »,
  un·e entrepreneur·e réel·le. Alterner les 3 modèles (une boutique, une boulangerie,
  un salon de coiffure) pour parler à chaque profil.
- **Facebook / WhatsApp** : dominants en Guinée. Groupes de commerçants, statuts WhatsApp,
  partage direct. **WhatsApp = canal de bouche-à-oreille #1 localement.**
- **Rythme cible** : 3 posts/semaine soutenables > 1 gros coup ponctuel.

### 6.3 Contenu / éducation
- Articles « comment facturer en règle en Guinée », « TVA par pays OHADA », tutoriels vidéo.
- Positionner NOVAR comme **la référence de contenu compta OHADA pour PME** (thought leadership).

### 6.4 Bouche-à-oreille & prescripteurs
- **Programme de parrainage** adapté (pas de « stockage offert » comme Dropbox → plutôt
  badge, mise en avant, support prioritaire, accès anticipé aux nouveautés).
- **Cabinets comptables** = prescripteurs à démarcher : un cabinet qui adopte BIRDY
  l'installe chez tous ses clients.

### 6.5 Publicité payante (phase 2, conditionnelle)
- N'activer **qu'après** qu'un message organique ait prouvé sa conversion.
- Commencer petit : Meta (Facebook/Instagram) ciblage Guinée, mots-clés haute intention
  (« logiciel facturation OHADA ») plutôt que génériques. Segmentation par pays.

---

## 7. Production créative (capacités internes réelles)

L'agent growth peut **produire réellement**, pas seulement conseiller :
- **Visuels** : bannières, carrousels, thumbnails (génération image + composition texte). ✅ *1 bannière déjà produite.*
- **Vidéos** : démos, explainers, vidéos de lancement, shorts verticaux, voix-off, sous-titres, dubbing.
- **Prédiction de viralité** avant publication.
- **Web** : landing pages, pages SEO (repo Next.js).

**Cadence créative cible** : 1 lot de visuels/semaine + 1 vidéo courte/2 semaines.
**Backlog immédiat** : logo réel à intégrer · déclinaisons 9:16 & 16:9 · série de
bannières **par modèle d'affaires** (1 Commerce, 1 Industrie, 1 Service) + angles §4.
⚠️ La 1re bannière (« Sortez du cahier ») parle surtout au Commerce (mention « stock »)
→ prévoir une variante Service (devis/prestations, sans « stock ») et Industrie (coût de revient).

---

## 8. Roadmap 90 jours (phasée)

**Phase 1 — Fondations (semaines 1-4)**
- [x] Positionnement + 2 skills marketing outillés.
- [x] Refonte landing produit BIRDY (branche prête).
- [x] 1re bannière pub.
- [ ] Instrumenter la mesure (compteur téléchargements GitHub + Vercel Analytics).
- [ ] Collecter 3-5 témoignages réels.
- [ ] Lancer le rythme social (3 posts/sem) + calendrier éditorial.

**Phase 2 — Traction Guinée (semaines 5-9)**
- [ ] Série de bannières + 2-3 vidéos courtes (démos avant/après).
- [ ] Articles SEO + versions EN des pages.
- [ ] Démarcher 3-5 cabinets comptables prescripteurs.
- [ ] Programme de parrainage v1.
- [ ] Off-site SEO (Search Console, annuaires, Wikidata) — Djerno.

**Phase 3 — Preuve & expansion (semaines 10-13)**
- [ ] Étude de cas d'un commerçant réel (chiffres avec accord).
- [ ] Pages sectorielles + campagne pays #2 (Sénégal ou CI).
- [ ] 1er test payant si un message a prouvé sa conversion.
- [ ] Bilan KPIs + recalage des objectifs.

---

## 9. Mesure & KPIs

| KPI | Définition | Outil |
|-----|-----------|-------|
| Téléchargements | installs par OS et par période | API GitHub Releases |
| Trafic organique | visiteurs SEO par page/pays | Vercel Web Analytics + Search Console |
| Taux d'activation | % installs → 1re facture créée | télémétrie produit `[à instrumenter]` |
| Rétention | % actifs semaine N+1, N+4 | télémétrie produit `[à instrumenter]` |
| Referral rate | % d'utilisateurs qui parrainent | programme parrainage |
| Engagement social | portée, clics, abonnés par plateforme | natif plateformes |
| NPS / confiance | recommanderaient-ils BIRDY ? | enquête in-app / email |

---

## 10. Budget

- **Phase 1-2 : 0 € média** — 100 % organique (coût = temps + crédits de génération créative).
- **Phase 3+ : palier payant** `[À VALIDER]` — petit budget test Meta ciblé Guinée, seulement
  sur un message validé. Montant à définir avec Djerno.
- Coûts outils : crédits de génération image/vidéo (plan actuel gratuit, 8 crédits restants
  → prévoir un top-up si production vidéo intensive).

---

## 11. Rôles (équipe NOVAR)

- **KABA L. Yériba** — UX/UI & Growth Lead : pilote la mise en œuvre growth côté humain.
- **Djerno (CEO)** — validation stratégique, comptes off-site (Search Console, réseaux),
  décisions budget/publication.
- **BAH Mamadou Bobo** — Lead Dev : review et merge des branches (rien de public sans lui).
- **Agent growth (Claude)** — production (contenu, visuels, vidéos, pages), analyse, exécution.

---

## 12. Risques & garde-fous

- **Suspicion du gratuit** → toujours expliquer *pourquoi c'est gratuit* + montrer l'équipe réelle.
- **Sur-promesse** → ne jamais annoncer une fonctionnalité non livrée. Le gratuit ne pardonne pas la déception.
- **Faits inventés** → interdiction absolue d'inventer chiffres, témoignages, taux fiscaux, sigles. `[À VALIDER]` sinon.
- **Publication prématurée** → rien de public (site, réseaux) sans accord explicite (Bobo pour le site, Djerno pour les réseaux).
- **Confusion des registres** → l'UI BIRDY reste sobre (SAP/ArcGIS) ; la pub peut être chaleureuse. Ne pas mélanger.

---

## Sources (faits sur lesquels ce plan s'appuie)

- Positionnement gratuit + SEO/GEO déjà en ligne : mémoire `novar-seo`, JSON-LD `price:0/XOF`.
- Équipe NOVAR : lobe `personal`.
- Statut « dispo, on peut vendre » : confirmé par Djerno (2026-07-25).
- Modèle éco (gratuit financé par sur-mesure/conseil) : cohérent avec les CGV du site (`LegalView`).
- Skills : `saas-growth-marketing` (stratégie), `visual-ads-video-production` (production).
- Capacités de génération : MCP présents (Higgsfield, Motion).
