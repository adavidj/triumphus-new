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

Les visuels des projets, des actualités et du cabinet sont stockés dans `public/images/`. Le site ne dépend donc plus du serveur d'images Wix historique. Les plus grands originaux ont été redimensionnés à 2560 px maximum, puis Next.js génère automatiquement les formats AVIF/WebP adaptés à chaque écran.

## Formulaires

Contact et candidature sont validés côté client et côté serveur puis transmis par l'API Resend. Avant le déploiement, configurer `RESEND_API_KEY`, `CONTACT_FROM_EMAIL` (domaine expéditeur vérifié) et `CONTACT_TO_EMAIL` dans les variables d'environnement Vercel. Les CV sont limités à 3 Mo afin de rester sous la limite de requête des Vercel Functions.

## Logo

Le fichier fourni est placé dans `public/brand/triumphus-logo.jpg`. Pour la production, remplacer idéalement par la version SVG officielle ou un PNG transparent haute définition sans modifier le nom de fichier dans les composants.
