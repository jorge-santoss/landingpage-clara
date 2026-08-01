# ADR-0003 : Brevo comme backend de formulaire

- **Statut** : Accepté
- **Date** : 2026-07-18

## Contexte

L'export statique interdit tout traitement serveur du formulaire : il faut un service tiers. Le public est français (RGPD) et non technique. Le programme de formation retient Brevo ou Mailchimp sans en imposer un. Une landing page capture des *leads* destinés à un outil d'emailing.

## Décision

Le formulaire poste directement vers l'**endpoint public d'un formulaire Brevo** (`sibforms.com`), avec double opt-in. Aucune clé d'API côté client.

## Alternatives écartées

- **Mailchimp** : équivalent fonctionnel mais écarté car société américaine (données hors UE à encadrer), là où Brevo est français.
- **Form backends génériques (Formspree, Web3Forms)** : intégration simple, mais sociétés hors UE, et ils relaient un *message* par email au lieu d'alimenter une liste de contacts.
- **API Brevo avec clé** : impossible en statique sans exposer la clé dans le bundle public.

## Conséquences

- **Bénéfices** : société française, données UE (RGPD simple). Double opt-in natif (preuve de consentement). Le lead atterrit directement dans l'outil d'emailing. Anti-spam par honeypot.
- **Coûts assumés** : Brevo est conçu pour la capture de contact (email, nom), pas pour un message libre élaboré.