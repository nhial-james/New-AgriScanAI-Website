// Post-build step: writes crawlable HTML for every public route plus
// 404.html, sitemap.xml and robots.txt. Run via `npm run build`.
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const ssrEntry = path.join(root, 'dist-ssr', 'entry-server.js');

const { render, routes, NOT_FOUND, renderHeadTags, SITE_URL } = await import(pathToFileURL(ssrEntry).href);

const template = await fs.readFile(path.join(dist, 'index.html'), 'utf8');
const SEO_BLOCK = /<!--seo:start-->[\s\S]*?<!--seo:end-->/;
if (!SEO_BLOCK.test(template) || !template.includes('<div id="root"></div>')) {
  throw new Error('dist/index.html is missing the <!--seo:start--> block or an empty #root');
}

async function writePage(url, meta, outFile) {
  const appHtml = await render(url);
  if (!appHtml.includes('<h1')) throw new Error(`Prerender of ${url} produced no <h1>`);
  const html = template
    .replace(SEO_BLOCK, renderHeadTags(meta))
    .replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);
  await fs.mkdir(path.dirname(outFile), { recursive: true });
  await fs.writeFile(outFile, html);
}

// Pages live as flat files under dist/_pages/ (/about -> _pages/about.html) and
// .htaccess rewrites to them. They must NOT be dist/about/index.html: a real
// directory makes Apache's mod_dir redirect /about -> /about/, which loops with
// the trailing-slash redirect.
const PAGES_DIR = '_pages';
for (const meta of routes) {
  const out = meta.path === '/'
    ? path.join(dist, 'index.html')
    : path.join(dist, PAGES_DIR, `${meta.path.slice(1)}.html`);
  await writePage(meta.path, meta, out);
}
await writePage('/__not-found__', NOT_FOUND, path.join(dist, '404.html'));

// Write explicit per-route rewrite rules into dist/.htaccess (no filesystem tests,
// so they work whatever %{DOCUMENT_ROOT} is on the host).
const htaccessFile = path.join(dist, '.htaccess');
const MARKER = /^[ \t]*# @@PRERENDERED_ROUTE_RULES@@[ \t]*\r?$/m;
const htaccess = await fs.readFile(htaccessFile, 'utf8');
if (!MARKER.test(htaccess)) throw new Error('dist/.htaccess is missing the @@PRERENDERED_ROUTE_RULES@@ marker');
const routeAlternation = routes
  .filter((r) => r.path !== '/')
  .map((r) => r.path.slice(1).replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))
  .join('|');
const routeRules = [
  `  RewriteRule ^(${routeAlternation})/$ /$1 [R=301,L]`,
  `  RewriteRule ^(${routeAlternation})$ ${PAGES_DIR}/$1.html [L]`,
].join('\n');
await fs.writeFile(htaccessFile, htaccess.replace(MARKER, routeRules));

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map((r) => `  <url><loc>${SITE_URL}${r.path}</loc></url>`).join('\n')}
</urlset>
`;
await fs.writeFile(path.join(dist, 'sitemap.xml'), sitemap);

const robots = `# AgriScanAI — https://agriscanai.co.ke
# All public pages may be crawled, including by AI search crawlers.
User-agent: *
Disallow: /api/

Sitemap: ${SITE_URL}/sitemap.xml
`;
await fs.writeFile(path.join(dist, 'robots.txt'), robots);

await fs.rm(path.join(root, 'dist-ssr'), { recursive: true, force: true });
console.log(`Prerendered ${routes.length} routes + 404.html; wrote sitemap.xml and robots.txt`);
