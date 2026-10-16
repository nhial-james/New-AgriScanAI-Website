// HTTP smoke test for a deployed (or locally served) build.
//   npm run smoke -- https://agriscanai.co.ke
//   npm run smoke -- http://localhost:8082
// Checks every sitemap route, redirects, real 404s, crawl files, the Search
// Console file and a full APK download (size + SHA-256 vs public/downloads).
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const base = (process.argv[2] || 'https://agriscanai.co.ke').replace(/\/$/, '');
const SITE = 'https://agriscanai.co.ke';
const isLive = base === SITE;
let failures = 0;
const ok = (cond, label, detail = '') => {
  if (!cond) failures++;
  console.log(`${cond ? 'PASS' : 'FAIL'}  ${label}${detail ? `  (${detail})` : ''}`);
};
const get = (p, opts = {}) => fetch(base + p, { redirect: 'manual', ...opts });
const loc = (r) => (r.headers.get('location') || '').replace(base, '').replace(SITE, '');

// Routes come from the local build's sitemap so the test matches what was deployed.
const sitemapFile = path.join(root, 'dist', 'sitemap.xml');
const paths = fs.existsSync(sitemapFile)
  ? [...fs.readFileSync(sitemapFile, 'utf8').matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].replace(SITE, '') || '/')
  : ['/'];

for (const p of paths) {
  const r = await get(p);
  const html = await r.text();
  const canonical = html.match(/<link rel="canonical" href="([^"]*)"/)?.[1];
  ok(r.status === 200 && canonical === SITE + (p === '/' ? '/' : p) && /<h1[\s>]/.test(html),
    `GET ${p}`, `${r.status}, canonical ${canonical ?? 'missing'}`);
}

const slash = await get('/about/');
ok(slash.status === 301 && loc(slash) === '/about', 'GET /about/ redirects to /about', `${slash.status} -> ${loc(slash)}`);
const idx = await get('/index.html');
ok(idx.status === 301 && loc(idx) === '/', 'GET /index.html redirects to /', `${idx.status} -> ${loc(idx)}`);

const missing = await get(`/no-such-page-${Date.now()}`);
const missingHtml = await missing.text();
ok(missing.status === 404 && missingHtml.includes('noindex'), 'unknown URL returns 404 + noindex page', String(missing.status));

const robots = await get('/robots.txt');
const robotsTxt = await robots.text();
ok(robots.status === 200 && robotsTxt.includes('Sitemap:') && !robotsTxt.includes('<html'), 'robots.txt is plain text', String(robots.status));
const sm = await get('/sitemap.xml');
ok(sm.status === 200 && (await sm.text()).startsWith('<?xml'), 'sitemap.xml is XML', String(sm.status));

const gsc = await get('/google2bb5b0423006a774.html');
ok(gsc.status === 200 && (await gsc.text()).trim() === 'google-site-verification: google2bb5b0423006a774.html',
  'Search Console verification file served verbatim', String(gsc.status));

const ht = await get('/.htaccess');
ok(ht.status === 403 || ht.status === 404, '.htaccess not readable', String(ht.status));

const home = await (await get('/')).text();
const asset = home.match(/src="(\/assets\/[^"]+\.js)"/)?.[1];
if (asset) {
  const a = await get(asset, { method: 'HEAD' });
  ok(/immutable/.test(a.headers.get('cache-control') || ''), 'hashed /assets/ cached immutable', a.headers.get('cache-control') || 'none');
}

for (const alias of ['/downloads/app-release.apk', '/downloads/agriscanai.apk']) {
  const r = await get(alias, { method: 'HEAD' });
  // Linux hosts redirect; case-insensitive filesystems (local Windows Apache) may serve
  // AgriScanAI.apk directly for the lowercase alias, which is equally correct for users.
  const served = r.status === 200 && r.headers.get('content-type') === 'application/vnd.android.package-archive';
  ok((r.status === 301 && loc(r) === '/downloads/AgriScanAI.apk') || served,
    `GET ${alias} reaches AgriScanAI.apk`, `${r.status}${loc(r) ? ` -> ${loc(r)}` : ''}`);
}

const apkLocal = path.join(root, 'public', 'downloads', 'AgriScanAI.apk');
const apk = await get('/downloads/AgriScanAI.apk');
const type = apk.headers.get('content-type');
const disposition = apk.headers.get('content-disposition');
const buf = Buffer.from(await apk.arrayBuffer());
const sha = crypto.createHash('sha256').update(buf).digest('hex');
ok(apk.status === 200, 'GET /downloads/AgriScanAI.apk', `${apk.status} ${type}`);
ok(type === 'application/vnd.android.package-archive', 'APK Content-Type', type);
ok(/attachment/.test(disposition || '') && /AgriScanAI\.apk/.test(disposition || ''), 'APK Content-Disposition', disposition || 'none');
ok(buf.subarray(0, 2).toString() === 'PK', 'APK body is a ZIP/APK, not HTML', buf.subarray(0, 15).toString().replace(/\s+/g, ' '));
if (fs.existsSync(apkLocal)) {
  const want = crypto.createHash('sha256').update(fs.readFileSync(apkLocal)).digest('hex');
  ok(sha === want, 'APK SHA-256 matches public/downloads/AgriScanAI.apk', `${buf.length} bytes, ${sha.slice(0, 16)}…`);
}

if (isLive) {
  for (const [from, label] of [['http://agriscanai.co.ke/about', 'http -> https'], ['https://www.agriscanai.co.ke/about', 'www -> apex'], ['http://www.agriscanai.co.ke/about', 'http www -> https apex']]) {
    const r = await fetch(from, { redirect: 'manual' });
    ok(r.status === 301 && r.headers.get('location') === `${SITE}/about`, label, `${r.status} -> ${r.headers.get('location')}`);
  }
}

console.log(`\n${failures ? `${failures} FAILED` : 'All checks passed'} against ${base}`);
process.exit(failures ? 1 : 0);
