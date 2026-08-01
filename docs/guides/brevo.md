# Brancher le formulaire de contact (Brevo)

Le formulaire de la landing page envoie les coordonnées saisies (nom, email) vers Brevo, qui les enregistre dans une liste de contacts. Tout se passe côté navigateur, sans serveur : le formulaire poste vers l'endpoint public d'un formulaire Brevo. Aucune clé d'API n'est présente dans le code.

---

## Prérequis

- [Avoir un compte Brevo (gratuit)](https://login.brevo.com/)

---

## 1. Créer le formulaire dans Brevo

> Le formulaire visuel proposé par Brevo n'est pas utilisé. Seuls comptent les champs créés : leurs noms doivent correspondre à ceux attendus par le formulaire de la landing page (`NOM`, `EMAIL`).

1. Brevo &rarr; `Marketing` &rarr; `Formulaires` &rarr; [Créer un formulaire d'inscription](https://help.brevo.com/hc/fr/articles/208771869-Cr%C3%A9er-un-formulaire-d-inscription-dans-Brevo).
2. Y placer au minimum les champs **NOM** et **EMAIL**.
3. Activer le **[double opt-in](https://help.brevo.com/hc/fr/articles/208733449-Double-opt-in-DOI-Qu-est-ce-que-c-est-et-comment-suivre-les-inscriptions-des-utilisateurs#h_01JE45E1Z0DD51XDHD8B0F8MES)** : le contact reçoit un email de confirmation et n'est ajouté à la liste qu'après avoir cliqué. C'est la preuve de consentement (RGPD).
4. Associer le formulaire à une **liste de contacts** dédiée à ce formulaire.

---

## 2. Récupérer l'endpoint

Dans l'étape / l'option `Partager`, Brevo fournit une URL de soumission du type :

```
https://xxxxxxxx.sibforms.com/serve/xxxxxxxxxxxxxxxxxx
```

C'est l'**endpoint public** : il est prévu pour recevoir des soumissions, il n'expose aucun secret.

---

## 3. Renseigner l'endpoint dans le site

Dans `content/site.json`, coller l'endpoint dans le champ `formEndpoint` :

```json
"cta": {
  "title": "...",
  "intro": "...",
  "formEndpoint": "https://xxxxxxxx.sibforms.com/serve/xxxxxxxxxxxxxxxxxx"
}
```

Tant que ce champ est vide, le formulaire affiche une erreur au lieu d'envoyer : c'est volontaire, le template est livré débranché.

```bash
git add content/site.json
git commit -m "config: set form endpoint"
git push
```

---

## 4. Tester de bout en bout

1. Lancer le site, remplir le formulaire, valider.
2. Vérifier la réception de l'email de confirmation (double opt-in).
3. Cliquer le lien de confirmation.
4. Vérifier que le contact apparaît dans la liste Brevo.

Un test complet valide toute la chaîne : soumission &rarr; confirmation &rarr; contact enregistré.

---

## Notes

- **Le honeypot** &rarr; `email_address_check`, un champ invisible et hors du parcours clavier.
- **Pas de clé d'API** sur un site statique. Le formulaire poste vers l'endpoint public prévu pour cela, jamais vers l'API authentifiée de Brevo.
- **Consentement** &rarr; la case à cocher du formulaire pour la conformité légale de la collecte. Elle renvoie à la politique de confidentialité, qui nomme **Brevo comme sous-traitant**.