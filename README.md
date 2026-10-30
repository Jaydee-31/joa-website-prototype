# JOA Spa & Salon — website prototype

React (Vite + React Router) version of the clickable prototype for the public website and the staff backend. All data is sample data.

## Develop

```sh
npm install
npm run dev       # http://localhost:5173
npm run build     # production build in dist/
```

## Structure

- `src/pages/` — one component per screen (public site and `Admin*` backend pages)
- `src/components/AdminSidebar.jsx` — shared backend navigation
- `src/App.jsx` — routes and page titles
- `public/images/` — photos and logos
- `original-prototype/` — the original static HTML prototype, kept for reference

## Deploy

`.github/workflows/deploy.yml` builds and publishes to GitHub Pages on every push to `main`.
In the repository settings, set **Pages → Build and deployment → Source** to **GitHub Actions**.

The site is built for `https://<user>.github.io/<repo>/`. If you use a custom domain or a `<user>.github.io` repository,
change `BASE_PATH` in the workflow to `/` and `SITE_URL` to the full site address (e.g. `https://joaspa.ph/`).

## SEO and link previews

Meta tags, Open Graph (Facebook) and JSON-LD live in `index.html`; `%SITE_URL%` is filled in at build time from `SITE_URL`.
The share image is `public/images/og-image.jpg` (1200×630). The build also writes `robots.txt` and `sitemap.xml`.
After deploying, paste the URL into the [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/) and click **Scrape Again** to refresh the preview.
