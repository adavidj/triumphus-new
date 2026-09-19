# TRIUMPHUS Premium — Next.js 16

Refonte premium FR/EN du site du Cabinet d'Architecture TRIUMPHUS.

## Stack

- Next.js 16 App Router
- TypeScript strict
- Tailwind CSS 4 + `tailwind.config.ts`
- Framer Motion
- GSAP (intro du hero)
- shadcn/ui style primitives (Button/Input/Textarea)
- React Hook Form
- Zod
- `next/image`

## Démarrage

```powershell
cd triumphus-premium
pnpm install
pnpm dev
```

Puis ouvrir `http://localhost:3000`.

## Vérifications avant déploiement

```powershell ou bash
pnpm typecheck
pnpm lint
pnpm build
pnpm start
```

## Routes FR

- `/`
- `/projets`
- `/projets/[slug]`
- `/le-cabinet`
- `/contact`
- `/actualites`
- `/actualites/[slug]`
- `/carrieres`

## Routes EN

- `/en`
- `/en/projects`
- `/en/projects/[slug]`
- `/en/studio`
- `/en/contact`
- `/en/news`
- `/en/news/[slug]`
- `/en/careers`

## Images

Les 28 visuels projets et le portrait du fondateur utilisent actuellement les médias publics déjà présents sur le site Wix de TRIUMPHUS via `static.wixstatic.com`. `next.config.ts` autorise ce domaine.

Pour la migration finale, télécharger les originaux et les déplacer dans `public/images/` afin de supprimer toute dépendance au Wix historique.

## Formulaires

Contact et candidature sont validés côté client et côté serveur puis transmis par l'API Resend. Avant le déploiement, configurer `RESEND_API_KEY`, `CONTACT_FROM_EMAIL` (domaine expéditeur vérifié) et `CONTACT_TO_EMAIL` dans les variables d'environnement Vercel. Les CV sont limités à 3 Mo afin de rester sous la limite de requête des Vercel Functions.

## Logo

Le fichier fourni est placé dans `public/brand/triumphus-logo.jpg`. Pour la production, remplacer idéalement par la version SVG officielle ou un PNG transparent haute définition sans modifier le nom de fichier dans les composants.
