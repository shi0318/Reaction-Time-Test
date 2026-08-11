# Reaction Time Game

Static, SEO-first browser game for the keyword **reaction time game**. The homepage is a server-rendered Astro page; only the live five-round timer needs client-side JavaScript.

## Stack

- Astro 5 static output with trailing slashes
- `@astrojs/sitemap` for XML sitemap generation
- Native browser JavaScript for the reaction test
- Node built-in test runner for score logic and built HTML checks

## Commands

```powershell
npm install
npm test
npm run build
npm run check:seo
npm run dev -- --host 0.0.0.0
```

## Deployment

Cloudflare Pages build command: `npm run build`

Cloudflare Pages output directory: `dist`

The canonical domain is configured once in `astro.config.mjs` and `src/data/site.ts`. Change both before deployment if the final production domain differs from `reactiontimetest.fun`.
