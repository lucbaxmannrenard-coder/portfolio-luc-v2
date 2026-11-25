# Mots-clés à chiffrer — Luc Baxmann

Deux outils gratuits de Google, sans abonnement. Aucun n'a d'API ouverte : la dernière étape est manuelle et prend quelques minutes.

## 1. Keyword Planner : volumes de recherche

1. Ouvrir Google Ads (compte sans campagne) > Outils > Planificateur de mots clés > « Obtenir le volume de recherche et les prévisions ».
2. Coller le contenu de `keyword-planner.txt` (15 expressions). Choisir la zone : la France, ou la région du client pour un métier local.
3. Démarrer, puis télécharger le résultat en CSV.
4. Le donner au plan : `python3 ~/.claude/skills/seo-playbook/scripts/keyword_plan.py --fiche seo/fiche-client.json --out seo/ --volumes "<export>.csv"`.

Sans dépense publicitaire, Google répond par fourchettes (« 100 – 1 k ») : un ordre de grandeur pour départager deux pages, pas un chiffre à montrer au client. Une recherche à 0 ou sans chiffre n'est pas inexistante : ne retirer aucune page pour cette seule raison.

**Sans la ville** (le volume se lit ici ; la zone du Planner fait la géographie) :

- développeur web freelance
- création site internet
- automatisation ia
- création site e-commerce
- création landing page
- crm sur mesure
- automatisation ia pme
- freelance ou agence web

**Avec la ville** (ce que les gens tapent, mais souvent sans chiffre) :

- développeur web freelance marseille
- création site internet marseille
- automatisation ia marseille
- création site e-commerce marseille
- création landing page marseille
- crm sur mesure marseille
- automatisation ia pme marseille

## 2. Google Trends : lequel est le plus cherché ?

Zone : FR. Chaque lien ouvre une comparaison sur cinq ans. Trends ne donne pas de volumes mais un indice relatif (100 = le plus cherché du graphique) : il tranche entre deux pages, et la courbe montre la saison (pic, creux) à noter dans le plan.

- **Quel service est le plus recherché ? (graphique 1)** — développeur web freelance, création site internet, automatisation ia, création site e-commerce, création landing page — [ouvrir](https://trends.google.com/trends/explore?date=today%205-y&geo=FR&hl=fr&q=d%C3%A9veloppeur%20web%20freelance,cr%C3%A9ation%20site%20internet,automatisation%20ia,cr%C3%A9ation%20site%20e-commerce,cr%C3%A9ation%20landing%20page)
- **Quel service est le plus recherché ? (graphique 2)** — développeur web freelance, crm sur mesure — [ouvrir](https://trends.google.com/trends/explore?date=today%205-y&geo=FR&hl=fr&q=d%C3%A9veloppeur%20web%20freelance,crm%20sur%20mesure)
- **Quel nom du métier les gens tapent-ils ?** — développeur web freelance, développeur web, freelance, développement web, agence web — [ouvrir](https://trends.google.com/trends/explore?date=today%205-y&geo=FR&hl=fr&q=d%C3%A9veloppeur%20web%20freelance,d%C3%A9veloppeur%20web,freelance,d%C3%A9veloppement%20web,agence%20web)

Un terme sans courbe (« pas assez de données ») veut dire peu de recherches, pas aucune : le garder si c'est la recherche d'un vrai client. Pour viser une région, relancer avec `--geo FR-XXX` (`FR-ARA`, `FR-IDF`, `FR-PAC`, `FR-OCC`, `FR-NAQ`…). Les liens n'ont pas été ouverts depuis ce script : vérifier au premier usage.
