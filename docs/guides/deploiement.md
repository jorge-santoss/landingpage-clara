# Déployer sur Cloudflare

Ce guide permet de mettre le site statique en ligne sur Cloudflare Pages. Il suppose que le repo du projet est déjà sur GitHub.

---

## Prérequis

- [Un compte Cloudflare (gratuit)](https://dash.cloudflare.com/sign-up)

---

## 1. Renseigner le repo

Dans `public/admin/config.yml`, renseigner le repository :

```yaml
backend:
  name: github
  repo: COMPTE-GITHUB/REPO
  branch: main
```

```bash
git add public/admin/config.yml
git commit -m "config: set repository"
git push
```

---

## 2. Déployer sur [Cloudflare Pages](https://developers.cloudflare.com/pages/)

1. Section `Build` &rarr; `Compute` &rarr; `Workers & Pages` &rarr; `Create application`
   - L'interface change régulièrement, Cloudflare migre `Pages` &rarr; `Workers`. Valable en juillet 2026 &rarr; `Looking to deploy Pages ? Get Started`, en bas.
   - `Get started` : `Import an existing Git Repository` &rarr; `Connect GitHub`
   - Sélectionner le repo de la landing page &rarr; `Begin setup`.
2. Configuration de build :
   - **Build command** `npm run build`
   - **Build output directory** /`out`
3. Lancer le déploiement `Save and Deploy`. Le site est en ligne sur une URL `*.pages.dev`.
4. À la fin du déploiement &rarr; `Continue to project`, récupérer la valeur de `Domains:` sous la forme `*.pages.dev`
5. Reporter l'URL dans `content/site.json` (champ `url`) &rarr; `https://*.pages.dev`

```bash
git add content/site.json
git commit -m "config: set site url"
git push
```

> À chaque commit sur `main`, qu'il vienne du développeur ou d'une édition CMS du client, Cloudflare rebuild et met le site à jour automatiquement.

---

Pour personnaliser la landing page, consulter [personnalisation.md](personnalisation.md)