# ADR-0001 : Export statique `output: 'export'`

- **Statut** : Accepté
- **Date** : 2026-07-15

## Contexte

Une landing page affiche le même contenu à tout le monde et ne bouge qu'à une mise à jour volontaire. Le public visé (TPE, indépendants, associations, etc.) veut un hébergement simple, pas cher, sans maintenance. Le seul élément un peu dynamique, le formulaire, tape directement sur un service tiers : pas besoin de logique serveur.

## Décision

On génère le site en export statique Next.js `output: 'export'`. Le build sort un dossier `out/` de fichiers HTML/CSS/JS, servis tels quels, sans serveur applicatif.

## Alternatives écartées

- **Next.js avec serveur (SSR/ISR)** : donne le rendu dynamique et l'optimisation d'images à la volée, mais oblige à héberger un serveur Node (coût, maintenance, plus de surface d'attaque).
- **Site builder (Webflow, Wix)** : abonnement à vie, dépendance à la plateforme, pas la main sur le code.

## Conséquences

- On gagne : hébergement gratuit (Cloudflare), pages très rapides (fichiers sur CDN), aucune maintenance serveur, site déplaçable n'importe où, presque rien à attaquer.
- On perd (assumé) : pas de Server Actions, pas de Route Handlers dynamiques, pas de middleware. `next/image` sans optimisation à la volée (`unoptimized: true`, on optimise les images en amont). Redirections et en-têtes gérés côté hébergeur. Le formulaire passe par un tiers.
- C'est la décision qui commande les autres (Brevo, CMS, hébergement). Revenir dessus, c'est refaire le projet.
