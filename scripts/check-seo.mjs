// Validates the prerendered build in dist/. Exits non-zero on any failure.
// Run after `npm run build`: `npm run check:seo`.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const dist = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', 'dist');
const SITE = 'https://agriscanai.co.ke';
const errors = [];
const warnings = [];
const fail = (m) => errors.push(m);

const read = (p) => fs.readFileSync(path.join(dist, p), 'utf8');
const pageFile = (urlPath) => (urlPath === '/' ? 'index.html' : path.join('_pages', `${urlPath.slice(1)}.html`));
const exists = (p) => fs.existsSync(path.join(dist, p));

const sitemap = read('sitemap.xml');
const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
if (!urls.length) fail('sitemap.xml has no URLs');

const robots = read('robots.txt');
if (!robots.includes(`Sitemap: ${SITE}/sitemap.xml`)) fail('robots.txt does not reference the sitemap');
if (/Disallow:\s*\/\s*$/m.test(robots)) fail('robots.txt blocks the whole site');

const titles = new Map();
const descriptions = new Map();
const internalLinks = new Set();

for (const url of urls) {
  const p = url.replace(SITE, '') || '/';
  const file = pageFile(p);
  if (!exists(file)) { fail(`${p}: in sitemap but ${file} missing`); continue; }
  const html = read(file);
  const title = html.match(/<title>([^<]*)<\/title>/)?.[1];
  const desc = html.match(/<meta name="description" content="([^"]*)"/)?.[1];
  const canonical = html.match(/<link rel="canonical" href="([^"]*)"/)?.[1];
  const h1s = (html.match(/<h1[\s>]/g) || []).length;

  if (!title) fail(`${p}: missing <title>`);
  else if (title.length > 70) warnings.push(`${p}: title is ${title.length} chars`);
  if (!desc) fail(`${p}: missing meta description`);
  else if (desc.length < 70 || desc.length > 170) warnings.push(`${p}: description is ${desc.length} chars`);
  if (canonical !== url) fail(`${p}: canonical "${canonical}" != sitemap URL "${url}"`);
  if (/name="robots" content="[^"]*noindex/.test(html)) fail(`${p}: indexable URL has noindex`);
  if (h1s !== 1) fail(`${p}: expected 1 <h1>, found ${h1s}`);
  if ((html.match(/<title>/g) || []).length !== 1) fail(`${p}: duplicate <title>`);

  const ld = html.match(/<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/)?.[1];
  if (!ld) fail(`${p}: missing JSON-LD`);
  else { try { JSON.parse(ld); } catch (e) { fail(`${p}: JSON-LD does not parse (${e.message})`); } }

  for (const [map, key, label] of [[titles, title, 'title'], [descriptions, desc, 'description']]) {
    if (!key) continue;
    if (map.has(key)) fail(`${p}: duplicate ${label} (also on ${map.get(key)})`);
    else map.set(key, p);
  }

  for (const m of html.matchAll(/<a [^>]*href="(\/[^"#?]*)/g)) internalLinks.add(m[1]);
  for (const m of html.matchAll(/<img [^>]*>/g)) {
    if (!/\salt="/.test(m[0])) fail(`${p}: <img> without alt: ${m[0].slice(0, 80)}`);
  }
}

const sitemapPaths = new Set(urls.map((u) => u.replace(SITE, '') || '/'));
for (const href of internalLinks) {
  const clean = href.length > 1 ? href.replace(/\/$/, '') : href;
  if (sitemapPaths.has(clean)) continue;
  if (exists(decodeURIComponent(clean.slice(1)))) continue; // static file (PDF, APK, …)
  fail(`internal link ${href} does not resolve to a page or file`);
}

// Every /assets/ URL referenced by any built HTML or JS chunk must exist on disk.
// (Vite can emit a single file for byte-identical images yet reference both names.)
const builtFiles = [
  'index.html', '404.html',
  ...fs.readdirSync(path.join(dist, 'assets')).filter((f) => f.endsWith('.js')).map((f) => `assets/${f}`),
  ...urls.map((u) => pageFile(u.replace(SITE, '') || '/')),
];
const assetRefs = new Set();
for (const f of builtFiles) {
  if (!exists(f)) continue;
  for (const m of read(f).matchAll(/\/assets\/[^"'`\s)?#]+?\.(?:webp|png|jpe?g|svg|gif|pdf|js|css|ico|mp4)/gi)) assetRefs.add(m[0]);
}
for (const ref of assetRefs) {
  if (!exists(decodeURIComponent(ref.slice(1)))) fail(`referenced asset missing from build: ${ref}`);
}

// dist/.htaccess must contain the generated rule for every route.
const htaccess = exists('.htaccess') ? read('.htaccess') : '';
if (htaccess.includes('@@PRERENDERED_ROUTE_RULES@@')) fail('.htaccess route rules were not generated');
const serveRule = htaccess.match(/RewriteRule \^\(([^)]*)\)\$ _pages\/\$1\.html \[L\]/)?.[1].split('|') ?? [];
for (const p of sitemapPaths) {
  if (p !== '/' && !serveRule.includes(p.slice(1).replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))) fail(`.htaccess has no rewrite rule for ${p}`);
}

const notFound = exists('404.html') ? read('404.html') : '';
if (!notFound.includes('noindex')) fail('404.html missing or not noindex');

for (const w of warnings) console.warn(`warn  ${w}`);
for (const e of errors) console.error(`FAIL  ${e}`);
console.log(`\n${urls.length} URLs checked, ${internalLinks.size} internal links, ${errors.length} failures, ${warnings.length} warnings`);
process.exit(errors.length ? 1 : 0);
