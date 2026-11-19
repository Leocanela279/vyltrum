# Vyltrum

Company site for **Vyltrum** (`vyltrum.eu`) — a European technology parent company. Products are coming soon; the house brand and foundations ship first.

## Stack

Next.js 16 (App Router) · TypeScript · Tailwind CSS · JetBrains Mono · Remotion  
**Hosting:** Cloudflare Workers via [`@opennextjs/cloudflare`](https://opennext.js.org/cloudflare)

## Brand ad

Square social ad at `/ad` — Node logo intro, [snapcn Hello Zoom](https://snapcn.dev/docs/text/hello-zoom) beat, logo end card. Source: `src/remotion/vyltrum-ad.tsx` (editable Remotion).

```bash
npm run dev
# open http://localhost:3847/ad
```

## Local development

```bash
npm install
npm run dev
```

Preview the real Workers runtime locally:

```bash
npm run preview
```

## Deploy to Cloudflare Workers

### One-time setup

1. Create a Cloudflare account and enable Workers.
2. Authenticate Wrangler:

```bash
npx wrangler login
```

3. (Optional for GitHub Actions) Add repository secrets:
   - `CLOUDFLARE_API_TOKEN` — token with **Workers Scripts Edit** + **Account Read**
   - `CLOUDFLARE_ACCOUNT_ID` — from the Cloudflare dashboard sidebar

### Deploy from your machine

```bash
npm run deploy
```

This runs `opennextjs-cloudflare build` then `wrangler deploy`.  
You get a `*.workers.dev` URL immediately (`workers_dev` is on).

### Custom domain (`vyltrum.eu`)

1. Add the domain to Cloudflare DNS (or CNAME to Workers).
2. Workers → **vyltrum** → **Settings** → **Domains & Routes** → **Custom Domains** → add `vyltrum.eu` (and `www` if needed).

### Cloudflare Workers Builds (recommended CI)

Connect this GitHub repo in the Cloudflare dashboard (Workers → Create → Connect to Git):

| Setting | Value |
| --- | --- |
| Root directory | `/` (repo root) |
| Build command | `npx opennextjs-cloudflare build` |
| Deploy command | `npx wrangler deploy` |
| Node version | `22` |

### GitHub Actions (optional)

A ready workflow is in [`deploy.github-actions.yml`](./deploy.github-actions.yml). To enable it:

```bash
mkdir -p .github/workflows
mv deploy.github-actions.yml .github/workflows/deploy.yml
git add .github && git commit -m "Add Cloudflare Workers deploy workflow" && git push
```

Then add secrets `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID` in the repo settings.

## Scripts

| Script | What it does |
| --- | --- |
| `npm run dev` | Next.js local server |
| `npm run preview` | Build + preview in workerd |
| `npm run deploy` | Build + deploy to Workers |
| `npm run upload` | Build + upload a new Worker version |
| `npm run cf-typegen` | Generate `cloudflare-env.d.ts` |

## Brand

- Cool white canvas, quiet gradient atmosphere  
- JetBrains Mono throughout  
- Black embossed primary buttons  
- Locked **Node** mark as a subtle hero watermark  
- Open Graph share card with mark + “Systems that become products.”
