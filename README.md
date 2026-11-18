# Vyltrum

Company site for **Vyltrum** (`vyltrum.eu`) — a European technology parent company. Products are coming soon; the house brand and foundations ship first.

## Stack

Next.js (App Router), TypeScript, Tailwind CSS, JetBrains Mono — deployed to **Cloudflare Workers** via `@opennextjs/cloudflare`.

## Run locally

```bash
npm install
npm run dev
```

## Cloudflare Workers

```bash
# Preview in the Workers runtime (local)
npm run preview

# Deploy to Cloudflare Workers
npm run deploy
```

First deploy needs Wrangler auth once:

```bash
npx wrangler login
```

Workers Builds (Git CI): set root directory to `vyltrum`, build command `npm run deploy` or `npx opennextjs-cloudflare build`, deploy with Wrangler. Point custom domain `vyltrum.eu` in the Worker routes / Custom Domains.

## Brand notes

- Cool white canvas with a quiet gradient atmosphere
- JetBrains Mono throughout
- Black embossed primary buttons
- Locked **Node** mark as a soft pulsing hero watermark
