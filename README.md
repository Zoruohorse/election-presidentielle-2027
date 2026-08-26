# Énergie 2027, atlas documentaire V3

Application statique, sans dépendance ni compilation. Elle migre le corpus fourni vers un modèle documentaire sans matrice de scores et sans indice interne de convergence avec RTE.

## Déploiement GitHub Pages

1. Copier les huit fichiers à la racine du dépôt.
2. Exécuter `npm run validate`.
3. Dans **Settings > Pages**, choisir **Deploy from a branch**, `main`, puis `/ (root)`.

## Test local

```bash
npm run serve
```

Ouvrir `http://localhost:8080`.

## Modèle V3

- `organizations` : camps suivis.
- `entities` : personnes et structures avec identifiants stables.
- `relations` : rôle, strate, preuve, certitude, dates et sources.
- `positions` : synthèses thématiques sans score.
- `claims` : éléments concrets qui justifient les synthèses.
- `focusMentions` : déclarations visant explicitement RTE.
- `sources` : provenance documentaire.

## Migration réalisée

- Suppression de `assessments` et de tous les scores.
- Suppression de la matrice et de son export CSV.
- Conversion des marqueurs du corpus en affirmations thématiques à revoir.
- Déplacement de la source Contexte dans `sources`.
- Déplacement des affirmations mal placées hors des anciens `assessments`.
- Ajout d'identifiants et de libellés aux relations incomplètes.
- Fusion du doublon d'identité de Maud Bregeon.
- Séparation entre qualité de preuve et strate d'influence.

## Limite documentaire importante

Le corpus fourni ne contient pas de collection structurée de déclarations explicites visant RTE. `focusMentions` est donc vide. L'interface affiche honnêtement cette absence, au lieu de recycler les anciens indices analytiques internes.

## Validation éditoriale

Les positions générées depuis les marqueurs de l'ancien corpus portent le statut `partial`, et leurs nouvelles affirmations le statut `to_review`. Elles doivent être revues avant une publication externe, notamment pour préciser les pages, sections, dates et citations exactes.
