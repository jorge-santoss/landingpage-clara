# Brancher la mesure d'audience (Google Analytics 4)

La landing page peut mesurer son audience avec Google Analytics. La mesure est conditionnée au consentement : aucun script Google n'est chargé tant que le visiteur n'a pas accepté (conformité CNIL). Sans identifiant configuré, l'analytics et la bannière sont simplement désactivés.

---

## Prérequis

- Un compte [Google Analytics](https://support.google.com/analytics/answer/9304153?hl=fr) avec une propriété GA4.

---

## 1. Récupérer l'identifiant de mesure

Dans Google Analytics, menu `Administration`, section `Collecte et modification des données` &rarr; `Flux de données`, l'identifiant de mesure est sous la forme :

```
G-XXXXXXXXXX
```

---

## 2. Renseigner l'identifiant dans le site

Dans `content/site.json`, coller l'identifiant dans le champ `gaId` :

```json
"analytics": {
  "gaId": "G-XXXXXXXXXX"
}
```

Champ vide = analytics désactivé **et** bannière de consentement masquée. Le template est livré ainsi (débranché).

```bash
git add content/site.json
git commit -m "config: set analytics id"
git push
```

---

## 3. Vérifier le comportement du consentement

Une fois l'identifiant renseigné, sur le site :

1. À la première visite, la bannière de consentement s'affiche.
2. Onglet `Network` de la console (filtre `google`) : **aucune requête** vers Google avant d'avoir cliqué "Accepter". C'est l'exigence CNIL.
3. Après "Accepter", les scripts GA se chargent et la mesure démarre.
4. Après "Refuser", rien n'est chargé, la navigation reste normale.

---

## Comment fonctionne le consentement

- **Rien avant l'accord.** Le script GA n'est pas présent dans la page tant que le consentement n'est pas donné. "Accepter" et "Refuser" ont la même importance visuelle (RGPD).
- **Le choix est mémorisé.** La décision est stockée dans le navigateur avec sa date, et considérée comme valide **six mois**. Passé ce délai, la bannière réapparaît pour redemander le consentement (recommandation CNIL).
- **Le choix est révocable.** Un bouton "Gérer mes cookies" en pied de page efface la décision enregistrée et fait réapparaître la bannière. Le visiteur peut changer d'avis à tout moment.

---

## L'événement de conversion

À chaque soumission réussie du formulaire, un événement `generate_lead` est envoyé à GA4. C'est la métrique clé d'une landing page : combien de visiteurs deviennent des contacts. Si le consentement n'a pas été donné, l'événement n'est simplement pas envoyé.

---

## Rappel

La politique de confidentialité doit mentionner **Google Analytics**, la finalité (mesure d'audience) et le transfert de données hors UE. Le modèle fourni dans le template le fait déjà, l'adapter si la configuration change.