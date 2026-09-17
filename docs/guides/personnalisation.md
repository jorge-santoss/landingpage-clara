# Personnaliser le template pour un client

Ce guide décrit comment adapter le template à un client : contenu, couleurs, logo, et choix de ce que le client pourra éditer par lui-même. Le branchement des services (formulaire **Brevo**, mesure d'audience **GA4**, CMS **Sveltia**) est traité dans leurs guides respectifs, listés en fin de page.

---

## Tout le contenu éditable par le client vit dans un seul fichier

Le contenu éditable est centralisé dans `content/site.json`. Les composants ne contiennent aucun texte en dur : ils lisent ce fichier via un point d'accès typé (`content/site.ts`). Modifier ce JSON revient à modifier le site, à la main pour le développeur. Le client accède au CMS par `https://DOMAINE-DU-SITE.page.dev/admin`.

Le typage (`content/site.types.ts`) garantit qu'un champ manquant ou mal nommé est repéré au build, avant la mise en ligne.

---

## Adapter le contenu

Dans `content/site.json`, remplacer les textes de chaque section (`hero`, `portfolio`, `solution`, `socialProof`, `cta`, `footer`) par ceux du client.

```json
"hero": {
  "title": "Votre titre principal",
  "subtitle": "Votre sous-titre"
}
```

L'ordre des sections (Hero &rarr; Problème &rarr; Solution &rarr; Preuve &rarr; Contact) ne se change pas : c'est la structure de conversion du template. On adapte le contenu, pas l'ordre.

Les listes (`portfolio.items`, `solution.benefits`, `socialProof.testimonials`) acceptent un nombre variable d'éléments : la mise en page s'adapte automatiquement. En ajouter ou en retirer ne casse rien.

---

## Adapter les couleurs

Les couleurs de marque sont dans le bloc `theme` de `site.json` :

```json
"theme": {
  "primary": "#1d4ed8",
  "primaryHover": "#1e40af",
  "text": "#1f2937",
  "textMuted": "#57606e",
  "background": "#ffffff",
  "surface": "#f3f4f6"
}
```

Ces valeurs sont injectées comme variables CSS sur la page. Changer `primary` recolore tout ce qui porte la couleur de marque (boutons, liens, accents), sans toucher au CSS.

> **Contraste.** Aucune vérification automatique n'est faite : un texte clair sur un fond clair passera sans alerte. Après avoir changé les couleurs, vérifier la lisibilité (un outil comme le vérificateur de contraste des DevTools suffit).

---

## Ajouter un logo

Le champ `logo` de `site.json` est vide par défaut : l'en-tête affiche alors le nom du site en texte. En renseignant un chemin d'image, l'en-tête affiche le logo à la place.

```json
"logo": "/images/logo.svg"
```

Pour un logo posé manuellement, déposer l'image dans `public/images/`.

Le fallback texte garantit qu'un en-tête sans logo reste correct, utile tant que le client n'a pas fourni son logo.

---

## Choisir ce que le client peut éditer

C'est une décision de conception qui revient au développeur. Le fichier `public/admin/config.yml` définit les champs visibles dans le CMS. Deux principes :

- **Exposer le contenu, cacher la technique.** Les textes, couleurs, logo et coordonnées sont éditables. Les champs techniques (`url`, `formEndpoint`, `gaId`) n'apparaissent pas dans le CMS : une erreur du client sur ces valeurs casserait le site. Ils restent gérés par le développeur.
- **Plus il y a de champs exposés, plus le client est autonome, mais plus il peut se tromper.** Exposer toutes les couleurs donne de la liberté mais permet des combinaisons illisibles. Exposer seulement la couleur principale est plus sûr. À doser selon le client, le prévenir des points sensibles.

Rendre un champ éditable n'est pas un réflexe, c'est un arbitrage entre autonomie et sécurité.

---

## À remplacer à la livraison

Certains éléments ne passent pas par le CMS et sont remplacés directement par le développeur :

- **Le favicon** (`app/favicon.ico`) : contraintes de format, remplacé à la main.
- **L'image de partage** (`public/og.jpg`, 1200×630) : l'aperçu affiché quand le lien est partagé sur les réseaux.
- **Les mentions légales** (`app/mentions-legales`, `app/politique-de-confidentialite`) : les placeholders `[ ... ]` sont à compléter avec les informations réelles du client.

---

## Brancher les services

| Service                 | Guide                            |
|-------------------------|----------------------------------|
| Formulaire de contact   | [brevo.md](brevo.md)             |
| Mesure d'audience       | [analytics.md](analytics.md)     |
| Déploiement du site     | [deploiement.md](deploiement.md) |
| Authentification du CMS | [oauth.md](oauth.md)             |