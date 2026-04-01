# Learn - Site de sujets populaires

Application Next.js orientee SEO qui publie des pages de contenu autour de sujets populaires.

Site en ligne: https://learn.arthurp.fr

## Objectif

- Publier des pages categories optimisees SEO
- Gerer une base de sujets via un fichier JSON
- Proposer une structure simple a maintenir et deployee facilement

## Stack technique

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS 4

## Structure principale

- src/app: pages et routes
- src/components: composants reutilisables (SEO, etc.)
- src/data/sujets.json: donnees de contenu
- public/images: images statiques
- scripts/ajouterSujet.js: script utilitaire pour ajouter un sujet

## Lancer en local

Prerequis:

- Node.js 20+
- npm

Installation et lancement:

```bash
npm install
npm run dev
```

Application disponible sur http://localhost:3000

## Scripts utiles

- npm run dev: demarrage en mode developpement
- npm run build: build de production
- npm run start: lancement de la build
- npm run lint: verification ESLint

## Deploiement

Build de verification avant publication:

```bash
npm run lint
npm run build
```

Ensuite, pousser sur GitHub puis deployer sur la plateforme cible.
