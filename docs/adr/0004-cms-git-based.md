# ADR-0004 : CMS Git-based (Sveltia) et structure fixe

- **Statut** : Accepté
- **Date** : 2026-07-21

## Contexte

L'entrepreneur doit pouvoir modifier sa page sans intervention technique. L'export statique n'a ni base de données ni serveur d'administration. L'ordre des sections (Hero &rarr; Problème &rarr; Solution &rarr; Preuve &rarr; CTA) suit la structure de conversion proposée.

## Décision

Ajout d'un CMS Git-based (Sveltia) sur `/admin`. Une édition produit un commit GitHub qui déclenche un rebuild. Le contenu est édité dans `content/site.json`. Le `config.yml` expose les champs éditables et cache les champs techniques (endpoint, url, gaId). L'ordre des sections n'est pas modifiable par le client.

## Alternatives écartées

- **Édition par le développeur seulement** : ne tient pas la promesse d'autonomie du programme.
- **Un dashboard admin maison (login + écriture de JSON)** : pas faisable proprement en statique.
- **Ordre des sections modifiable** : le client pourrait casser sa propre conversion sans le voir. Écarté : la structure fixe fait partie du produit.

## Conséquences

- Autonomie réelle du client. Aucune base de données. La sauvegarde, c'est l'historique Git.
- Délai entre l'édition et la mise en ligne (le temps du rebuild, 1 à 2 min).
- Le client a besoin d'un compte GitHub.
- Dépend d'un worker OAuth mutualisé, déployé hors de ce dépôt (voir l'annexe dédiée).