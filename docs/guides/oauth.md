# Déployer le worker OAuth (authentification GitHub du CMS)

Sur un site statique, Sveltia ne peut pas détenir le secret GitHub nécessaire à l'authentification, tout le code envoyé au navigateur est public. Un petit **worker Cloudflare** fait l'intermédiaire, il détient le secret et effectue l'échange OAuth avec GitHub à la place du navigateur.

Ce worker est indépendant du dépôt du site. Il peut servir un seul site ou plusieurs. Ce guide décrit comment en déployer un.

---

## Prérequis

- [Le site est déployé](deploiement.md)

---

## 1. Récupérer le code du worker & déployer

Le [worker](https://github.com/sveltia/sveltia-cms-auth) utilisé est un projet open source.

**Procédure automatisée** &rarr; [Deploy to Cloudflare](https://github.com/sveltia/sveltia-cms-auth/blob/main/README.md#step-1-deploy-this-project-to-cloudflare-workers)
1. Renseigner uniquement le compte GitHub `Git account`, les autres valeurs peuvent être par défaut &rarr; `Deploy`.
2. À la fin du déploiement, récupérer l'url du worker en bas des logs du build, sous `Deployed sveltia-cms-auth triggers`, elle sert pour l'Oauth App.

---

## 2. Créer l'OAuth App sur GitHub

L'OAuth App est ce qui autorise le worker à s'authentifier auprès de GitHub.

1. GitHub &rarr; `Settings` &rarr; `Developer settings` &rarr; `OAuth Apps` &rarr; `New OAuth App`.
2. Renseigner :
    - **Application name** : un nom parlant (ex. `sveltia-cms-auth`).
    - **Homepage URL** : l'URL du site.
    - **Authorization callback URL** : `https://sveltia-cms-auth.XXXXXXXXXXXX.workers.dev/callback` (URL récupérée suite au déploiement du worker avec `/callback` en fin).
3. Valider. GitHub affiche un **Client ID**.
4. `Generate a new client secret` &rarr; copier le **Client Secret** immédiatement (visible une seule fois).

***Le Client ID et le Client Secret servent à l'étape suivante.***

---

## 3. Renseigner les secrets du worker

Le worker a besoin du Client ID et du Client Secret de l'OAuth App pour dialoguer avec GitHub.

Dans Cloudflare &rarr; le worker &rarr; `Settings` &rarr; `Variables and secrets` &rarr; `Add`, ajouter deux secrets :

| Nom | Valeur                        |
|---|-------------------------------|
| `GITHUB_CLIENT_ID` | Le Client ID de l'étape 2     |
| `GITHUB_CLIENT_SECRET` | Le Client Secret de l'étape 2 |

Les enregistrer comme **secrets** (chiffrés), pas comme variables en clair.

*Dans le cas d'un worker mutualisé, une variable supplémentaire est à renseigner. Elle permet d'autoriser tous les domaines qui y sont déclarés.*

| Nom | Valeur                                                                      |
|---|-----------------------------------------------------------------------------|
| `ALLOWED_DOMAINS` | Séparer par une virgule, renseigner les hostname sans `https://` ni `/` final |

Pour cette variable, les valeurs sont à renseigner en clair. 

---

## 4. Relier le worker au site

Dans le `config.yml` du site, ajouter la base du worker :

```yaml
backend:
  (...)
  base_url: https://sveltia-cms-auth.XXXXXXXXXXXX.workers.dev
```

```bash
git add public/admin/config.yml
git commit -m "config: set worker url"
git push
```

Le CMS du site pointe alors vers ce worker pour l'authentification.

*Un même worker peut être référencé par plusieurs sites, chaque `config.yml` pointe vers la même `base_url`.*

---

## Vérifier

1. Ouvrir `/admin` sur le site déployé.
2. Cliquer "Se connecter avec GitHub".
3. GitHub demande l'autorisation, puis renvoie vers le CMS connecté.

> En cas d'erreur, le message oriente le diagnostic :
> - `"domain is not allowed"` &rarr; le hostname du site n'est pas dans `ALLOWED_DOMAINS`, ou son format est incorrect.
> - erreur 404 après `Sign In` &rarr; liée à l'Authorization callback URL (GitHub).
> - `"don't have access to the repository"` &rarr; le compte connecté n'a pas les droits d'écriture sur le repo du `config.yml`.
> - `"error in the CMS configuration"` &rarr; problème dans `config.yml` (champs mal placés, indentation, typo).