# Contrôle de lancement — https://lucbaxmann.com

2026-11-25 · 5 pages parcourues sans JavaScript · verdict : **À CORRIGER** (0 bloquant(s), 2 à corriger, 2 à vérifier)

## À traiter

- **[À corriger] Téléphone cliquable et hub des services** — pas de numéro cliquable (lien tel:) sur l'accueil ; le hub /services n'est pas lié dans le pied de page.
  - Correction : ajouter le lien vers le hub dans le pied de page de tout le site, et le numéro en lien tel:.
- **[À corriger] Pages légales liées** — lien manquant : mentions légales, politique de confidentialité.
  - Correction : publier et lier ces pages dans le pied de page (obligation légale en France).
- **[À vérifier] Langue déclarée et affichage mobile** — lang="en" sur l'accueil, viewport présent ; 1 page(s) dont la langue déclarée ne correspond pas.
  - Correction : déclarer sur chaque page la langue de son texte (<html lang="fr">, "en" sous /en/) et la balise meta viewport.
  - / : lang="en", attendu « fr »
- **[À vérifier] Données structurées de l'entreprise** — aucun bloc d'entreprise avec adresse et téléphone.
  - Correction : poser un bloc LocalBusiness : utile et peu coûteux, jamais prioritaire (/seo schema).

## Conforme

- HTTPS et version unique du site — HTTPS actif, une seule version du site
- robots.txt ouvert — présent, ouvert, sitemap déclaré
- Robots d'IA autorisés dans robots.txt — aucun robot d'IA interdit
- Accès des robots d'IA (pare-feu) — l'accueil répond aux signatures de GPTBot, OAI-SearchBot, ClaudeBot et PerplexityBot
- Sitemap — 5 adresses
- Un title sur chaque page, sans doublon — 5 pages, titles tous présents et distincts
- Meta descriptions — présentes partout
- Un seul H1 par page — un H1 par page
- Pages indexables — aucun noindex, balises canoniques cohérentes
- Texte présent dans le HTML brut — le texte des pages est dans le HTML reçu
- Texte des blocs repliés présent dans le HTML — aucun bloc replié vide dans le HTML
- Toute page à trois clics au plus de l'accueil — aucune page à plus de trois clics
- Aucune page orpheline — toutes les pages du sitemap reçoivent un lien
- Adresses du sitemap sans redirection — chaque adresse du sitemap répond directement
- Pages indexables présentes dans le sitemap — toutes présentes
- Une adresse inexistante renvoie 404 — code 404
- Aucun lien interne cassé — aucun
- Pas de redirections en chaîne — aucune
- Pas de pages au texte quasi identique — aucun doublon
- Pas de lenteur réelle — réponse médiane du serveur : 375 ms
- Textes alternatifs des images — toutes les images ont un texte alternatif
- Pas de ressource chargée en http:// — aucune

## Pages parcourues

| Page | Clics depuis l'accueil | Mots | H1 | Dans le sitemap | Liens reçus |
|---|---|---|---|---|---|
| `/` | 0 | 369 | 1 | oui | 4 |
| `/fr` | 1 | 404 | 1 | oui | 4 |
| `/services` | 1 | 50 | 1 | oui | 4 |
| `/services/automatisation-ia-marseille` | 2 | 446 | 1 | oui | 2 |
| `/services/creation-site-internet-marseille` | 2 | 405 | 1 | oui | 2 |

## À faire à la main

**Google Search Console**
- [ ] Propriété créée et validée (propriété de domaine de préférence)
- [ ] Sitemap soumis
- [ ] Page d'accueil inspectée, indexation demandée
- [ ] Compte de service ajouté comme utilisateur (references/search-console-api.md)

**Bing Webmaster Tools**
- [ ] Site déclaré (import depuis Search Console)

**Mesure**
- [ ] Outil de statistiques posé
- [ ] Clics sur le téléphone et envois de formulaire suivis

**Fiche Google**
- [ ] Fiche revendiquée et remplie entièrement
- [ ] Chaque service ajouté, avec un lien vers sa page
- [ ] Filtre de messagerie sur les modifications de fiche

**Premiers liens**
- [ ] Trois à cinq annuaires du métier ou de la ville
- [ ] Deux partenaires de métiers voisins sollicités

**Avis**
- [ ] Lien de dépôt d'avis créé et envoyé à tous les clients récents, sans tri

**Hébergement**
- [ ] Si Cloudflare ou pare-feu : blocage des robots d'IA désactivé

---

Ce contrôle vérifie le minimum pour être lu et indexé. Pour un audit technique complet : `/seo technical`.
