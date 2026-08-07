# SEO / AEO — checklist de mise en ligne (NOVAR)

> **On-site : maximisé côté code.** Ce qui suit sont les étapes **hors-site**
> qui font réellement grimper le classement. Le code ne peut PAS garantir la
> 1re place ; le classement dépend aussi de l'ancienneté, des backlinks et de
> la soumission aux outils ci-dessous. Fais-les après le merge en production.

## Déjà en place dans le code (rien à faire)
- `robots.txt` : 22 robots IA autorisés nommément (GPTBot, OAI-SearchBot,
  ClaudeBot, PerplexityBot, Google-Extended, Applebot-Extended, CCBot, Bytespider,
  MistralAI-User, meta-externalagent, YouBot…) + Googlebot/Bingbot.
- `sitemap.xml` : ~71 URL, hreflang FR/EN réciproques, dates réelles.
- `llms.txt` : réponses courtes citables (le format que les IA extraient).
- JSON-LD : Organization, WebSite (SearchAction), **SoftwareApplication BIRDY**
  (offre à 0, version dynamique, featureList, isAccessibleForFree),
  **WebApplication FEEDORA**, **Service sur mesure** (areaServed OHADA + catalogue
  d'offres, cible les requêtes « créer une application / logiciel / site web »),
  **FAQPage** (57 Q/R = texte visible, dont FAQ métier BIRDY/FEEDORA et intention
  sur-mesure), **HowTo** d'installation, BreadcrumbList, BlogPosting. `@id` stables
  qui relient le graphe.
- Métadonnées par page (title, description, canonical, hreflang) + OG images
  générées dynamiquement.

## À faire par toi après le MERGE en production

### 1. Vérifier que tout répond (2 min)
Ouvre en prod : `/robots.txt`, `/llms.txt`, `/sitemap.xml`, `/manifest.webmanifest`
→ tous doivent renvoyer 200.

### 2. Google Search Console — https://search.google.com/search-console
- Ajouter la propriété `novarstartup.com` (vérif par DNS ou balise — la balise
  Google est déjà dans `public/googlee3e6a2068b5fbe95.html`).
- **Sitemaps → soumettre** `https://www.novarstartup.com/sitemap.xml`.
- **Inspection d'URL** → demander l'indexation de : `/`, `/produits/birdy-erp`,
  `/telechargements`, `/faq`, `/produits/feedora`, `/services/sur-mesure`, `/logiciels/…`.
- **Test des résultats enrichis** (search.google.com/test/rich-results) sur
  BIRDY (SoftwareApplication), /faq (FAQPage), /telechargements (HowTo),
  /produits/feedora (WebApplication), /services/sur-mesure (Service).

### 3. Bing Webmaster Tools — https://www.bing.com/webmasters
> **Levier direct sur les IA** : Bing alimente **ChatGPT Search** et Copilot.
- Vérifier le site (import possible depuis Search Console).
- Soumettre le même sitemap.
- Activer **IndexNow** (indexation quasi instantanée à chaque déploiement).

### 4. Entité & réputation (fait grimper la reconnaissance IA)
- Créer une fiche **Wikidata** « NOVAR (SaaS Studio) » reliée au site (`sameAs`).
- **Google Business Profile** (Conakry) : NAP cohérent (nom, adresse, tél).
- Backlinks : LinkedIn entreprise, annuaires OHADA/tech africaine, pages produit
  (AlternativeTo, etc.), articles. Même e-mail/tél/nom partout (cohérence NAP).

### 5. Mesure (la seule qui compte pour l'IA)
~2 semaines après indexation, demande à **ChatGPT, Claude, Perplexity** :
« quel logiciel de comptabilité OHADA gratuit ? » → NOVAR/BIRDY est-il cité ?
Refais le test chaque mois ; ajuste `llms.txt` et la FAQ selon les questions
réelles qui reviennent.
