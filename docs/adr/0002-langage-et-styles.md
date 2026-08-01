# ADR-0002 : Langage et styles (TypeScript, CSS Modules)
- **Statut** : Accepté
- **Date** : 2026-07-18

## Contexte

Deux choix de stack : le langage (TypeScript ou JavaScript) et la mise en forme (CSS natif ou framework).

## Décision

- **TypeScript**, pour la robustesse : les types attrapent les erreurs au build plutôt qu'à l'exécution.
- **CSS Modules** natifs, avec des variables CSS pour les couleurs et les espacements. Pas de framework CSS (pas de Tailwind), pas de librairie de composants.

## Alternatives écartées

- **JavaScript pur** : perte du typage et de l'autocomplétion des API Next.js.
- **Tailwind / librairie UI** : plus rapide à écrire, mais ça cache le CSS.

## Conséquences

- TypeScript : le build valide la structure du contenu, l'IDE guide avec l'autocomplétion.
- CSS Modules reste du CSS standard, juste isolé par composant (classes renommées au build, pas de collision). Plus verbeux que Tailwind, mais lisible et sans dépendance.
- Le choix de Next.js et de l'export statique est traité dans l'[ADR-0001](0001-export-statique.md).