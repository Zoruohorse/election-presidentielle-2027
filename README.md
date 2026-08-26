# Atlas documentaire neutre

Application statique sans compilation ni dépendance applicative.

## Utilisation

1. Copiez tous les fichiers à la racine du dépôt GitHub.
2. Remplacez les données synthétiques de `data.js` par votre corpus.
3. Adaptez les listes contrôlées de `config.js`.
4. Lancez `npm run validate` avant chaque publication.
5. Testez avec `npm run serve`, puis ouvrez `http://localhost:8080`.
6. Activez GitHub Pages sur la branche et le dossier racine souhaités.

## Modèle

- `organizations` : organisations explorées.
- `entities` : personnes, équipes, institutions, collectifs ou autres entités.
- `relations` : liens sourcés entre entités et organisations, avec strate et temporalité.
- `positions` : synthèses éditoriales par thème, sans score numérique.
- `claims` : affirmations précises qui justifient les synthèses.
- `focusMentions` : déclarations visant explicitement l’institution cible.
- `sources` : provenance documentaire.

## Règles éditoriales

- Ne jamais convertir automatiquement un ancien score en affirmation.
- Une position renvoie à des `claimIds` précis.
- Une inférence conserve le niveau `inferred` et ne devient pas un fait.
- Une absence de mention signifie seulement que le corpus n’en recense aucune.
- Une personne ou organisation possède un identifiant stable et peut avoir plusieurs relations.

## Données de démonstration

Toutes les entrées livrées sont synthétiques et servent uniquement à illustrer le schéma. Elles doivent être remplacées.
