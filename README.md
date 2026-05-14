# kayvon.com

The Revenue Architect — full site built on React + TypeScript + Vite, served by Express with server-side meta injection.

---

## Swapping in the Real Logo

The nav, footer, and thank-you page all load the logo from one of these two files:

```
/public/logo.svg   ← checked first
/public/logo.png   ← fallback if logo.svg is not found
```

**To install the real logo:**

1. Export `KayvonKay_Logo_Icon_Blue.ai` (or the Green variant) from Illustrator as SVG or PNG.
2. Name the exported file `logo.svg` or `logo.png`.
3. Drop it into the `/public/` folder in this project.
4. Rebuild: `npm run build`
5. Redeploy: `railway up`

The logo will appear automatically — no code changes needed.

If you want a different size or want to use a horizontal/vertical lockup instead of just the icon, open `src/components/Nav.tsx` and adjust the `height` value in the `SiteLogo` function (currently `32px` in the nav, `36px` in the footer, `64px` on the thank-you page).

---

## Local Development

```bash
npm install
npm run dev        # Vite dev server on :5173
```

## Production Build

```bash
npm run build      # compiles TypeScript + bundles with Vite → dist/
node server/index.js  # serves dist/ with meta injection on :3000
```

## Deployment

Railway project: `kayvon-com`  
Live URL: `https://kayvon-com-production.up.railway.app`

```bash
railway up --detach
```

## Environment Variables

| Variable | Required | Description |
|---|---|---|
| `PORT` | No | Defaults to 3000 |
| `DATABASE_URL` | Yes (for blog) | Railway MySQL connection string |

## Blog / Articles

Articles are stored in MySQL. To seed the database:

```bash
DATABASE_URL=<your-connection-string> node server/migrate.js
DATABASE_URL=<your-connection-string> node server/seed.js
```

The site degrades gracefully when `DATABASE_URL` is not set — the articles page shows the three static fallback posts.
