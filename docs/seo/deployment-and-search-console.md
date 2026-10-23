# Deployment (HostAfrica), Rollback and Search Console

## 1. Build and pre-flight checks

```bash
npm ci
```
```bash
npm run build
```
```bash
npm run check:seo
```

`npm run build` runs the client build, the SSR build and the prerender into `dist/`. `check:seo` must report **0 failures**. It also fails if any image or JS file referenced by the build is missing.

Optional but recommended: test the real `.htaccess` on Apache before uploading (see §6). Then run:

```bash
npm run smoke -- http://localhost:8082
```

`dist/` contains:
- `index.html` (home) and `_pages/<route>.html` for every other page (`_pages/about.html`, `_pages/events/finas-2026.html`, …). They are flat files on purpose; see the note in `public/.htaccess`.
- `404.html`, `sitemap.xml`, `robots.txt`, `llms.txt`, `og-image.jpg`, `google2bb5b0423006a774.html`
- `.htaccess` and `assets/.htaccess` (hidden files: in cPanel File Manager, turn on **Settings → Show Hidden Files**)
- `api/*.php`, `downloads/AgriScanAI.apk` (68.4 MB) and `downloads/app-release.apk` (an older build that is no longer served, because its URL now 301-redirects to `AgriScanAI.apk`; you can skip uploading it)

## 2. Deploy (cPanel / FTP)

1. **Back up first.** In cPanel File Manager, select everything in `public_html` and **Compress** it to `public_html-backup-YYYYMMDD.zip`. Download a copy. Make sure the server-side `.env` (Resend key) is included. It is not in Git.
2. Check that `public_html` has **no folders** named after pages (`about/`, `events/`, `solutions/`, …). A real folder with a page's name makes Apache redirect `/about` → `/about/`.
3. Upload the **contents** of `dist/` into `public_html`, overwriting files. Do **not** delete the server's `.env`.
4. **Upload the APK with FTP (e.g. FileZilla), not the File Manager upload dialog.** cPanel's browser upload often has a size limit, and the APK is 68 MB. After uploading, check that `public_html/downloads/AgriScanAI.apk` is exactly **68,382,552 bytes**.
5. Old hashed files in `public_html/assets/` can stay; nothing references them.

## 3. Post-deploy checks (run within 10 minutes)

```bash
npm run smoke -- https://agriscanai.co.ke
```

This checks:
- every sitemap URL returns 200 with the right canonical and an `<h1>`
- `/about/` → `/about` and `/index.html` → `/`, each a single 301
- unknown URLs return a real 404
- robots.txt, sitemap.xml and the Search Console file
- `.htaccess` is not readable
- `/assets/` caching
- the APK download: 200, `application/vnd.android.package-archive`, attachment filename, ZIP body, and SHA-256 equal to `public/downloads/AgriScanAI.apk`
- the old APK URLs redirect
- http → https and www → apex, each a single 301

Every line must say PASS.

Then, by hand:
- On desktop **and on a real Android phone**, tap the "Android APK" badge in the hero. Confirm `AgriScanAI.apk` downloads, then install it. Android will ask to allow installs from the browser.
- Click through the navbar and footer links.
- Submit the contact form once.
- Open an event page directly by URL.
- Check the browser console for errors.

**If every page except `/` loops or redirects to a trailing slash**, a folder named after that page exists in `public_html`. Remove it (step 2).

**If pages return 500**, a directive isn't supported by this server. Remove the `<IfModule mod_headers.c>` blocks first, then the `<FilesMatch "^\.">` block, and retest. The rules were verified on Apache 2.4.58 (§6), but HostAfrica sits behind nginx and may run LiteSpeed.

**If pages other than `/` return 404**, check that `public_html/_pages/` exists and holds the `.html` files, and that the uploaded `.htaccess` contains the two generated `RewriteRule ^(solutions|pilot-program|…)` lines. On 16–23 Oct 2026 the live site had exactly this symptom: the first version of the rules depended on `%{DOCUMENT_ROOT}/_pages/… -f`, which doesn't match `public_html` on HostAfrica. The rules are now generated per route and don't depend on `%{DOCUMENT_ROOT}`.

**If `/does-not-exist` returns 200**, the server isn't honouring `ErrorDocument`. Ask HostAfrica support to enable it.

## 4. Rollback

1. In File Manager, rename `public_html` to `public_html-failed` and create a new empty `public_html`.
2. Extract `public_html-backup-YYYYMMDD.zip` into it. Make sure `.env` is back.
3. To fix **only the APK download** on the old site, without the SEO changes, do **not** upload the new `.htaccess`. Its routing needs the new `_pages/` build. Instead, edit the **old** `public_html/.htaccess`: replace its two `RewriteRule ^downloads/… [NC,L]` lines with

   ```apache
   RewriteRule ^downloads/(app-release|agriscanai)\.apk$ /downloads/AgriScanAI.apk [R=301,L]
   ```

   and add `AddType application/vnd.android.package-archive .apk` below `Options -Indexes`.
4. Locally, `git checkout main` restores the old code. The work stays on branch `seo/technical-foundation`.

## 5. Google Search Console

The audit had **no access** to Search Console or Analytics, and no data was inspected or invented.

### Setup
1. Go to <https://search.google.com/search-console> and sign in with the Good Partners Google account.
2. Add a **Domain property** for `agriscanai.co.ke`, verified with a DNS TXT record in HostAfrica's DNS zone editor. This covers http/https and www. The HTML-file method (`google2bb5b0423006a774.html`) now deploys correctly too, but it only covers one URL-prefix property.
3. **Sitemaps** → submit `https://agriscanai.co.ke/sitemap.xml`. It should show "Success" and 19 discovered URLs within a few days.
4. **URL Inspection** → test `/`, `/solutions`, `/pilot-program` → **Request indexing**. Check that "View crawled page" shows the page text in the HTML.
5. Also add the site to **Bing Webmaster Tools** (import from Search Console). Bing's index feeds several AI assistants.

### Validate structured data
- <https://search.google.com/test/rich-results>: test `/` and `/events/finas-2026`. Expect `Organization` and `Breadcrumbs` to be detected. `SoftwareApplication` will show as not eligible for a rich result (no rating or price). That is expected and honest.
- <https://validator.schema.org/>: should report 0 errors.

### Reports to export monthly (send these to whoever continues the SEO work)
| Report | Where | What it's used for |
|---|---|---|
| Queries: clicks, impressions, CTR, position (last 3 months) | Performance → Search results → Queries → Export | Find queries with high impressions and low CTR, then rewrite those titles and descriptions |
| Pages (same metrics) | Performance → Pages | Pages ranking in positions 8–20 are the best candidates for improvement |
| Countries / devices | Performance → Countries / Devices | Confirm the Kenya/East Africa and mobile share |
| Page indexing | Indexing → Pages | Excluded URLs and why (e.g. "Crawled – not indexed") |
| Sitemaps | Indexing → Sitemaps | Discovered vs indexed |
| Core Web Vitals | Experience → Core Web Vitals | Field LCP/INP/CLS once traffic is high enough |

Look at branded searches ("agriscanai", "good partners") separately from non-branded ones when judging progress.

### Performance baseline
Run <https://pagespeed.web.dev/> on `/`, `/solutions` and `/events/agriscanai-farmer-training-kakamega-2026` (mobile) after deployment and note the results here. Targets at the 75th percentile: LCP ≤ 2.5 s, INP ≤ 200 ms, CLS ≤ 0.1. The lab score is a diagnostic; Search Console's field data is what Google uses.

## 6. Testing `.htaccess` on real Apache before uploading

The Node preview (`npm run preview`) only approximates the server. Use real Apache to test the actual `public/.htaccess`; this is how the redirect-loop and APK bugs were found. With XAMPP installed (`C:\xampp\apache`, Apache 2.4.58 was used), save this as `httpd-test.conf` anywhere outside the repo. It doesn't touch XAMPP's own config:

```apache
ServerRoot "C:/xampp/apache"
Listen ${PORT}
ServerName localhost
PidFile "C:/temp/httpd-${PORT}.pid"
ErrorLog "C:/temp/error-${PORT}.log"
LoadModule authz_core_module modules/mod_authz_core.so
LoadModule authz_host_module modules/mod_authz_host.so
LoadModule dir_module modules/mod_dir.so
LoadModule mime_module modules/mod_mime.so
LoadModule rewrite_module modules/mod_rewrite.so
LoadModule headers_module modules/mod_headers.so
LoadModule expires_module modules/mod_expires.so
LoadModule filter_module modules/mod_filter.so
LoadModule deflate_module modules/mod_deflate.so
LoadModule alias_module modules/mod_alias.so
LoadModule log_config_module modules/mod_log_config.so
TypesConfig conf/mime.types
DirectoryIndex index.html
DocumentRoot "${SITEROOT}"
<Directory "${SITEROOT}">
  Options FollowSymLinks
  AllowOverride All
  Require all granted
</Directory>
```

Then, from Git Bash (create `C:\temp` first):

```bash
cd /c/xampp/apache && SITEROOT="C:/path/to/AgriScanAI-NewWebsite/dist" PORT=8082 ./bin/httpd.exe -f "C:/path/to/httpd-test.conf"
```
```bash
npm run smoke -- http://localhost:8082
```

Two results differ on Windows and are expected:
- `/downloads/agriscanai.apk` returns 200 instead of a 301, because Windows filenames ignore case.
- PHP isn't loaded, so `/api/contact` isn't executed.

Stop the server with Ctrl+C, or `taskkill /F /T /PID <pid from the .pid file>`.
