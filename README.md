# Vyltrum

Company site for **Vyltrum** (`vyltrum.eu`) — a European technology parent company. Products are coming soon; the house brand and foundations ship first.

## Stack

Next.js 16 (App Router) · TypeScript · Tailwind CSS · JetBrains Mono  
**Hosting:** Cloudflare Workers via [`@opennextjs/cloudflare`](https://opennext.js.org/cloudflare)

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

### GitHub Actions (already wired)

Pushing to `main` runs [`.github/workflows/deploy.yml`](./.github/workflows/deploy.yml).  
Set the two secrets above, then every push to `main` deploys.

### Cloudflare Workers Builds (dashboard CI)

If you prefer Cloudflare’s own Git integration instead of Actions:

| Setting | Value |
| --- | --- |
| Root directory | `/` (repo root) |
| Build command | `npx opennextjs-cloudflare build` |
| Deploy command | `npx wrangler deploy` |
| Node version | `22` |

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
