// Serves dist/ the way public/.htaccess does on HostAfrica, so prerendered
// routes, trailing-slash redirects, APK downloads and real 404s can be tested
// locally. It is an approximation: verify .htaccess itself on real Apache.
// Usage: npm run preview  (after npm run build)
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';

const dist = process.argv[2] || 'dist';
const port = Number(process.argv[3] || 4173);
const types = {
  '.html': 'text/html; charset=utf-8', '.js': 'text/javascript', '.css': 'text/css', '.webp': 'image/webp',
  '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.svg': 'image/svg+xml',
  '.xml': 'application/xml', '.txt': 'text/plain', '.ico': 'image/x-icon', '.pdf': 'application/pdf',
  '.apk': 'application/vnd.android.package-archive',
};
const isFile = (p) => { try { return fs.statSync(p).isFile(); } catch { return false; } };
const pageFor = (url) => path.join(dist, '_pages', `${url.replace(/^\/+|\/+$/g, '')}.html`);

http.createServer((req, res) => {
  const url = decodeURIComponent(req.url.split('?')[0]);
  const send = (code, file) => {
    const headers = { 'Content-Type': types[path.extname(file).toLowerCase()] || 'application/octet-stream' };
    if (file.endsWith('.apk')) headers['Content-Disposition'] = 'attachment; filename="AgriScanAI.apk"';
    res.writeHead(code, headers);
    fs.createReadStream(file).pipe(res);
  };
  const redirect = (to) => { res.writeHead(301, { Location: to }); res.end(); };

  if (/^\/_pages(\/|$)/.test(url)) return send(404, path.join(dist, '404.html'));
  if (/^\/downloads\/(app-release|agriscanai)\.apk$/.test(url)) return redirect('/downloads/AgriScanAI.apk');
  if (url === '/index.html') return redirect('/');
  if (url.length > 1 && url.endsWith('/') && isFile(pageFor(url))) return redirect(url.replace(/\/+$/, ''));
  if (url === '/') return send(200, path.join(dist, 'index.html'));
  if (isFile(pageFor(url))) return send(200, pageFor(url));
  const file = path.join(dist, url);
  if (isFile(file) && !path.basename(file).startsWith('.')) return send(200, file);
  return send(404, path.join(dist, '404.html'));
}).listen(port, () => console.log(`serving ${dist} on http://localhost:${port}`));
