# Plan SEO — Luc Baxmann

Généré le 2026-11-25 par `keyword_plan.py`. Une page = une recherche d'acheteur.
14 pages, dont 0 pages de ville. Hub des services : `/services/` (à lier dans le pied de page). Portée : locale, ville principale Marseille.

## Points d'attention

- Volumes de recherche non renseignés : priorités fixées par le métier. Pour les chiffrer gratuitement, voir seo/MOTS-CLES-A-CHIFFRER.md (Keyword Planner et Google Trends).

## Vague 1 — à la création du site

| # | Page | Mot-clé visé | Adresse | Title | Volume | Statut |
|---|---|---|---|---|---|---|
| 1 | Développeur web freelance à Marseille | développeur web freelance marseille | `/` | Développeur web freelance à Marseille · … · Luc Baxmann | — | à écrire |
| 2 | Nos services | — | `/services/` | Nos services · … · Luc Baxmann | — | à écrire |
| 3 | Création de site internet à Marseille | création site internet marseille | `/services/creation-site-internet-marseille` | Création de site internet à Marseille · … · Luc Baxmann | — | à écrire |
| 4 | Automatisation IA sur mesure à Marseille | automatisation ia marseille | `/services/automatisation-ia-marseille` | Automatisation IA sur mesure à Marseille · … · Luc Baxmann | — | à écrire |
| 5 | Création de site e-commerce à Marseille | création site e-commerce marseille | `/services/creation-site-e-commerce-marseille` | Création de site e-commerce à Marseille · … · Luc Baxmann | — | à écrire |
| 6 | Création de landing page à Marseille | création landing page marseille | `/services/creation-landing-page-marseille` | Création de landing page à Marseille · … · Luc Baxmann | — | à écrire |
| 7 | CRM sur mesure à Marseille | crm sur mesure marseille | `/services/crm-mesure-marseille` | CRM sur mesure à Marseille · … · Luc Baxmann | — | à écrire |
| 8 | À propos | — | `/a-propos` | À propos · Luc Baxmann | — | à écrire |
| 9 | Contact | — | `/contact` | Contact · Luc Baxmann | — | à écrire |
| 10 | Mentions légales | — | `/mentions-legales` | Mentions légales · Luc Baxmann | — | à écrire |
| 11 | Politique de confidentialité | — | `/confidentialite` | Politique de confidentialité · Luc Baxmann | — | à écrire |

Notes :

- `/services/` — liste toutes les pages de service ; lié dans le pied de page de tout le site

## Vague 3 — publics, comparaisons, avis

| # | Page | Mot-clé visé | Adresse | Title | Volume | Statut |
|---|---|---|---|---|---|---|
| 12 | Automatisation IA pour les PME à Marseille | automatisation ia pme marseille | `/services/automatisation-ia-pme-marseille` | Automatisation IA pour les PME à Marseille · … · Luc Baxmann | — | à écrire |
| 13 | Freelance ou agence web | freelance ou agence web | `/freelance-ou-agence-web` | Freelance ou agence web · … · Luc Baxmann | — | à écrire |
| 14 | Avis sur Luc Baxmann | luc baxmann avis | `/avis` | Avis sur Luc Baxmann · … · Luc Baxmann | — | à écrire |

Notes :

- `/freelance-ou-agence-web` — comparaison de catégories : n'écrire qu'avec des faits vérifiables
- `/avis` — page d'avis : tous les avis, ou les plus récents dans l'ordre chronologique, sans sélection, chacun avec sa source et sa date ; dire s'ils sont contrôlés et comment (art. L111-7-2) ; lien vers la plateforme
- `/avis` — aucun avis dans la fiche : page à écrire quand le client en aura

## Maillage

Chaque page renvoie vers le hub et vers les pages listées dans `liens_vers` de `plan.json`. Les liens se placent dans un paragraphe, avec une ancre qui décrit la page visée.

## À faire avant d'écrire

1. Relire chaque ligne : cette recherche existe-t-elle, le client rend-il cette prestation dans cette ville ?
2. Compléter le bénéfice de chaque title (remplacer « … ») avec un fait de la fiche client.
3. Passer au statut `ecartee` les pages retirées, avec la raison dans `notes`.
4. Écrire les pages dans l'ordre de la colonne #, une à la fois (mode `page`).
