import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// BASE_PATH is set by the GitHub Pages workflow to "/<repo-name>/"
const base = process.env.BASE_PATH || '/';
// Absolute site URL for link previews, canonical and sitemap — Facebook ignores relative og:image paths
const siteUrl = (process.env.SITE_URL || 'http://localhost:5173' + base).replace(/\/?$/, '/');

// Public pages listed in the sitemap; admin screens are kept out of search via robots.txt
const PUBLIC_PATHS = ['', 'services', 'book'];

function seo() {
  return {
    name: 'seo',
    transformIndexHtml: (html) => html.replaceAll('%SITE_URL%', siteUrl),
    generateBundle() {
      this.emitFile({
        type: 'asset',
        fileName: 'robots.txt',
        source: `User-agent: *\nDisallow: ${base}admin-\nAllow: /\n\nSitemap: ${siteUrl}sitemap.xml\n`,
      });
      this.emitFile({
        type: 'asset',
        fileName: 'sitemap.xml',
        source:
          '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
          PUBLIC_PATHS.map((p) => `  <url><loc>${siteUrl}${p}</loc></url>\n`).join('') +
          '</urlset>\n',
      });
    },
  };
}

export default defineConfig({
  base,
  plugins: [react(), seo()],
});
