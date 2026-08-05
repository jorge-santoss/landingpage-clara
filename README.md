# Landing Page Template

Template de landing page **Next.js (export statique)** éditable via un CMS Git-based. Base réutilisable pour produire des pages de conversion clients.

Une page, un objectif : transformer un visiteur en contact. Structure de conversion (Hero &rarr; Problème &rarr; Solution &rarr; Preuve sociale &rarr; Contact), formulaire connecté, SEO et accessibilité soignés, contenu éditable par un non-technicien via `/admin`.

---

## Démarrage

```bash
git clone https://github.com/aubrycapitone-lab/laplateforme_landing-page.git
cd laplateforme_landing-page
npm ci          # installe les versions exactes du lockfile
npm run dev     # développement sur http://localhost:3000
npm run build   # build de production dans out/
npx serve out   # prévisualiser l'export localement
```

*Prérequis : Node.js 20+.*

---

## Mise en service (par client)

Le template est livré "débranché" : il tourne en local, mais le formulaire, la mesure d'audience et le CMS doivent être connectés pour chaque déploiement client. Les valeurs techniques ne sont pas éditables via le CMS, c'est le développeur qui les renseigne.

| À configurer | Où | Guide |
|---|---|---|
| URL de production | `url` dans `content/site.json` | [deploiement.md](docs/guides/deploiement.md) |
| Formulaire | `cta.formEndpoint` dans `content/site.json` | [brevo.md](docs/guides/brevo.md) |
| Mesure d'audience | `analytics.gaId` dans `content/site.json` | [analytics.md](docs/guides/analytics.md) |
| Dépôt du CMS | `repo` dans `public/admin/config.yml` | [deploiement.md](docs/guides/deploiement.md) |
| Authentification du CMS | `base_url` dans `public/admin/config.yml` | [oauth.md](docs/guides/oauth.md) |

---

## Stack

- **Next.js** (App Router), **export statique** (`output: 'export'`) : aucun serveur en production, hébergement gratuit, réversible.
- **TypeScript** + **CSS Modules** (pas de framework CSS), mobile-first.
- **Brevo** pour le formulaire (RGPD, double opt-in), **GA4** avec consentement CNIL.
- **Sveltia CMS** sur `/admin` (Git-based, authentification GitHub).
- Déploiement **Cloudflare Pages** (client) ou **GitHub Pages** (entraînement).

Le pourquoi de ces choix est documenté dans [docs/adr/](docs/adr/).

---

## Structure du projet

```
app/            routes : accueil, layout, pages légales, 404, sitemap, robots
components/     une section = un dossier (Composant.tsx + Composant.module.css)
content/        le contenu du site (site.json), son typage et son point d'accès
public/admin/   configuration du CMS
docs/           documentation
```