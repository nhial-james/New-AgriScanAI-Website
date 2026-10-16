# AgriScanAI SEO: Audit, Changes and Validation

_16 October 2026 · branch `seo/technical-foundation` · nothing deployed yet_

Related documents:
- [keyword-research.md](keyword-research.md): SERP research and a keyword-to-URL map. Search volumes are unverified.
- [content-roadmap-90-days.md](content-roadmap-90-days.md): 12 articles, 3 new pages, editorial workflow and outreach plan.
- [deployment-and-search-console.md](deployment-and-search-console.md): HostAfrica deployment, rollback, Search Console setup and monitoring.

---

## 1. Baseline audit (live site, before changes)

All of this was measured against `https://agriscanai.co.ke` on 16 Oct 2026 with curl and a real browser.

| Area | Finding | Evidence |
|---|---|---|
| Rendering | Every URL returned the same 1 KB HTML shell with an empty `<div id="root">`. Crawlers that don't run JavaScript saw no content. | `curl /about` and `curl /` returned identical bodies. |
| Metadata | One title, description and set of OG tags for every page. Some pages changed `document.title` in JavaScript, but there was no canonical and no per-page description. | `index.html` and `useEffect(document.title=…)` in pages. |
| robots.txt / sitemap | **Neither existed.** `/robots.txt` and `/sitemap.xml` returned the HTML shell with status 200. | `curl -w %{http_code}`. |
| Soft 404s | Unknown URLs returned 200 and React redirected them to `/`. | `/nonexistent-xyz` returned 200. |
| Duplicate host | `https://www.agriscanai.co.ke/` served the full site (200) instead of redirecting to the main domain. | `curl -I`. |
| Search Console file | `google2bb5b0423006a774.html` was at the repo root, outside `public/`, so it was never deployed. It returned the HTML shell. | `curl`. |
| Page weight | The homepage transferred **14.2 MB in 37 requests**. 3–4 MB SVG "icons" were Figma exports wrapping base64 PNGs (INKOMOKO logo 2.3 MB, APK badge 1.0 MB, nine feature icons about 0.5 MB each). | Browser Resource Timing. |
| Build size | `dist/` was 455 MB. The FINAS 2026 page bundled **every** image in its folder through an eager glob, including an unused 33 MB PNG. Event photos were 2–8 MB JPGs. | `vite build` output. |
| JavaScript | One 522 KB bundle (133 KB gzipped) with every page in it. | `vite build`. |
| Fonts | Google Fonts loaded through CSS `@import` twice, which blocks rendering. | `index.css` and `EventDetail.css`. |
| Third-party dependency | The navbar/footer logo and the KTIP logo were hotlinked from a Builder.io **TEMP** asset URL. | `Navbar.jsx`, `Footer.jsx`. |
| Broken link | The footer's "Good Partners" link used `<Link to="https://…">`, so it went to `/https://goodpartnerske.org/` and was redirected home. | `Footer.jsx`. |
| Structured data | None. | — |
| Accessibility | Most pages had no `<main>` landmark. 2 images had `loading` attributes. Alt text was present everywhere. | grep. |
| Security | No secrets in the repo: the Resend key is read from the environment and `.env` is gitignored. `/.env` already returned 403. There were no security headers. | `public/api/config.php`, curl. |
| Analytics | No Google Analytics or tag manager in the code. Search Console access was not available to this audit. | grep. |

### Site structure (unchanged)
`/`, `/about`, `/solutions`, `/pilot-program`, `/events`, 10 × `/events/<slug>`, `/resources`, `/contact`, `/privacy-policy`, `/terms-of-use`. The PHP endpoints `/api/contact` and `/api/download` and the `/downloads/AgriScanAI.apk` APK download are unchanged.

---

## 2. Prioritised issue tracker

| # | Issue | Impact | Effort | Status |
|---|---|---|---|---|
| 1 | Content not in the initial HTML | High | M | **Fixed**: build-time prerendering |
| 2 | No unique title, description or canonical per page | High | S | **Fixed** |
| 3 | No robots.txt or sitemap.xml | High | S | **Fixed**: generated at build |
| 4 | Soft 404s (unknown URLs → 200 + redirect home) | High | S | **Fixed** in code; Apache rules need a live check |
| 5 | 14 MB homepage | High | M | **Fixed**: about 199 KB on first view, about 685 KB fully scrolled |
| 6 | www host served duplicate content | Med | S | **Fixed** in `.htaccess`; needs a live check |
| 7 | Search Console file not deployed | Med | S | **Fixed**: moved to `public/` |
| 8 | No structured data | Med | S | **Fixed**: Organization, WebSite, WebPage, SoftwareApplication, BreadcrumbList |
| 9 | Render-blocking font `@import`s | Med | S | **Fixed** |
| 10 | Logos hotlinked from Builder.io TEMP URLs | Med | S | **Fixed**: now local assets |
| 11 | Broken Good Partners footer link | Low | S | **Fixed** |
| 12 | Single 522 KB JavaScript bundle | Med | S | **Fixed**: route code-splitting, entry bundle now 216 KB |
| 13 | No `<main>` landmark; few lazy-loaded images | Low | S | **Fixed** |
| 14 | No security or cache headers | Low | S | **Fixed** in `.htaccess` |
| 15 | No feature or use-case pages for the organisation-focused searches the research found | High | L | **Open**: needs content (roadmap) |
| 16 | Resources page is LinkedIn embeds, not articles | High | L | **Open**: roadmap recommends `/resources/<slug>` |
| 17 | No analytics or measurement | Med | S | **Open**: needs your decision (§6) |
| 18 | 74 MB old `public/downloads/app-release.apk` (v1.0.1 build 1) shipped on every deploy | Low | S | **Open**: its URL now 301-redirects to `AgriScanAI.apk`, so the file is never served and can be skipped or deleted |
| 21 | **APK download broken on the live site (HTTP 500)** | **Critical** | S | **Fixed and verified on Apache 2.4.58**; needs a live check (§7) |
| 22 | Prerendered `<route>/index.html` folders caused an `/about` ↔ `/about/` redirect loop on Apache | Critical (introduced in round 1, never deployed) | S | **Fixed**: flat `_pages/` layout, verified on Apache |
| 23 | Two byte-identical FINAS 2026 photo pairs: Vite emitted one file for both, so one image 404'd | High (introduced in round 1, never deployed) | S | **Fixed**; `check:seo` now fails on any missing `/assets/` reference |
| 19 | 23 pre-existing ESLint errors (unrelated to SEO) | Low | M | Open: unchanged by this work |
| 20 | Unused original SVG/JPG/PNG source images still in `src/assets` (about 265 MB) | Low | S | Open: kept on purpose so they can be re-exported; delete when you're happy |

---

## 3. What changed

### Rendering and routing
- **`scripts/prerender.mjs`** (new) runs after `vite build`. It renders each route with React's `prerenderToNodeStream` and writes `dist/_pages/<route>.html` (home stays at `dist/index.html`) with that route's head tags. Pages are flat files on purpose: a real `dist/about/` folder makes Apache's `mod_dir` redirect `/about` → `/about/`, which looped with the trailing-slash rule. Found by testing on real Apache in round 2. It also writes `dist/404.html` (noindex), `sitemap.xml` and `robots.txt`. The browser then *hydrates* this HTML (`src/main.jsx`), so it looks and behaves the same.
- **`src/entry-server.jsx`** (new) is the build-only renderer. **`src/App.jsx`** now holds only the routes: the router moved to `main.jsx` and `entry-server.jsx`. Every page except Home is lazy-loaded.
- The catch-all `<Navigate to="/">` is replaced with a real **404 page** (`src/pages/NotFound.jsx`).
- **`npm run build`** now runs the client build, the SSR build and the prerender. `npm run build:client` is the old plain build.

### Metadata and structured data
- **`src/seo/routes.js`** is the single source of truth for each route's title, description, OG image, breadcrumb and JSON-LD. **`src/seo/Seo.jsx`** updates `<head>` on client-side navigation. The per-page `document.title` effects were removed.
- **`src/data/events.js`**: the events list was moved out of `Events.jsx` so the event pages and their metadata share it.
- JSON-LD types:
  - `Organization` (Good Partners, with the AgriScanAI `Brand`, using the contact details shown on the Contact page)
  - `WebSite`
  - `WebPage`
  - `SoftwareApplication` on Home and Solutions only. It has **no** ratings or price because none are published. This makes it valid schema.org but probably not eligible for a Google rich result, which is intentional.
  - `BreadcrumbList`
  - No FAQPage markup.
- `public/og-image.jpg`: a 1200×630 share image. Event pages use their own hero image.

### Crawl control and server
- **`public/.htaccess`**:
  - Single-hop 301 redirect to `https://agriscanai.co.ke`, including from www.
  - Prerendered HTML is served per route (`/about` → `/_pages/about.html`). Direct requests to `/_pages/…` return 404, so there are no duplicate URLs.
  - `/about/` redirects 301 to `/about`, and `/index.html` redirects 301 to `/`.
  - **Real 404s** via `ErrorDocument 404 /404.html`. The old fallback that served `index.html` for every URL is gone.
  - Dotfiles are denied.
  - `nosniff`, `Referrer-Policy`, `X-Frame-Options` and `Permissions-Policy` headers.
  - HTML is revalidated on each visit. Compression is enabled.
- **`public/assets/.htaccess`**: one-year immutable caching for Vite's fingerprinted files.
- **robots.txt** allows all crawlers, including AI search crawlers (GPTBot, OAI-SearchBot, ClaudeBot, PerplexityBot, Google-Extended), and blocks only `/api/`. This is a deliberate choice: the site is public marketing content and being cited is the goal. To opt out of AI *training* while keeping AI *search*, add `User-agent: GPTBot` / `Disallow: /` and `User-agent: Google-Extended` / `Disallow: /`. Check each vendor's current documentation first.
- **`public/llms.txt`**: an optional, low-cost experiment. It is not a proven ranking factor.

### Performance and accessibility
- **139 imported images converted to WebP: 175.5 MB → 16.8 MB.**
  - Figma SVG icons and logos were rendered at 3× their display size.
  - Photos were capped at 1920 px, auto-rotated from EXIF and saved at WebP quality 78.
  - Imports were repointed. The originals are untouched.
- FINAS 2026 page: glob limited to the WebP copies, **89.9 MB → 10.8 MB**.
- Fonts load through `<link rel=preconnect>` + `<link rel=stylesheet>` instead of two CSS `@import`s.
- **CSS cascade preserved exactly.** `EventDetail.css` contains Tailwind's global preflight reset, and the whole site depends on it. All stylesheets are imported once, in the original order, as one file (`cssCodeSplit: false`). The new CSS was checked **byte-for-byte against the live stylesheet**: identical apart from the font imports and one build comment.
- `loading="lazy"` on below-the-fold images. Each event page's hero (LCP) image stays eager. Logos have `width`/`height` to prevent layout shift.
- `<main>` landmark on every page, using `display: contents` so the layout doesn't change.
- Logos are local files instead of Builder.io links. The footer's external link now uses a real `<a>`.

### Automated check
- **`npm run check:seo`** (`scripts/check-seo.mjs`) checks the build. It fails if any sitemap URL:
  - is missing its HTML file, title, description or canonical, or its canonical doesn't match its sitemap URL;
  - has a noindex tag;
  - doesn't have exactly one `<h1>`;
  - has a duplicate title or description;
  - has JSON-LD that doesn't parse;
  - has an `<img>` without alt text;
  - links internally to a page or file that doesn't exist.

  It also checks robots.txt and that 404.html is noindex.

---

## 4. Validation report (round 1, superseded where §7 says otherwise)

| Check | Result | How |
|---|---|---|
| Production build succeeds | ✅ Pass | `npm run build` |
| 19 routes and the 404 page prerendered with an `<h1>` and body text | ✅ Pass | prerender script + `check:seo` |
| Unique title and description, correct canonical on every indexable page | ✅ Pass | `check:seo`: 19 URLs, 0 failures, 0 warnings |
| robots.txt valid and references the sitemap | ✅ Pass | `check:seo` + manual read |
| Sitemap URLs = canonical URLs = existing files | ✅ Pass | `check:seo` |
| Internal links resolve (23 unique) | ✅ Pass | `check:seo` |
| No noindex on indexable pages; 404 is noindex | ✅ Pass | `check:seo` |
| JSON-LD parses | ✅ Pass | `check:seo` (JSON.parse) |
| JSON-LD accepted by Google Rich Results Test / Schema.org validator | ⏳ Untested | needs the live URL, see the deployment doc |
| Hydration: no console errors across 14 routes and the 404 page | ✅ Pass | real browser, local server that copies `.htaccess` routing |
| Unknown URL returns 404 status and the 404 page | ✅ Pass locally | ⏳ must be confirmed on HostAfrica |
| www → apex, `/about/` → `/about`, prerendered file served on Apache | ⏳ Untested | needs deployment, see the deployment doc |
| All 45 homepage images load (none broken) | ✅ Pass | browser `naturalWidth` check |
| Converted icons and logos visually correct, transparency kept | ✅ Pass | contact sheet inspected |
| Homepage weight | ✅ 14.2 MB → about 199 KB first view, about 685 KB fully scrolled | browser Resource Timing (lab data) |
| Entry JS | ✅ 522 KB → 216 KB (133 → 68 KB gzipped) | `vite build` |
| CSS unchanged | ✅ Byte-identical to live apart from the font imports | script diff |
| Dev server and client-side navigation update `<head>` | ✅ Pass | browser |
| Core Web Vitals (LCP/INP/CLS) | ⏳ Not measured | Lighthouse/PSI need the deployed site; field data needs 28 days of CrUX |
| Full visual regression on mobile | ⚠ Partial | the browser pane was hidden, so full-page screenshots couldn't be taken. Click through each page on a phone before deploying. |
| Contact form and APK download still work | ⏳ Untested locally | PHP endpoints are unchanged, but test on staging/live after deploying |
| No secrets exposed | ✅ Pass | `.env` gitignored; only `.env.example` placeholders, and `/.env` is denied |
| ESLint | ⚠ 23 pre-existing problems, none new | `npx eslint .` before and after |

---

## 5. Next 30 days

1. **Deploy** following [deployment-and-search-console.md](deployment-and-search-console.md) and run the post-deploy checks (status codes, redirects, Rich Results Test).
2. **Search Console:** confirm the property is verified (Domain property via DNS is best), submit `sitemap.xml`, and request indexing for `/`, `/solutions` and `/pilot-program`.
3. **PageSpeed Insights** on `/`, `/solutions` and one event page. Record LCP, CLS and INP as the new baseline.
4. **Decide on analytics** (§6) so demo requests and APK downloads can be counted.
5. **Build `/solutions/programme-monitoring`**, the highest-value gap in [keyword-research.md](keyword-research.md). Use only verified capabilities.
6. **Publish roadmap articles 1–2** under `/resources/<slug>`. Add each to `src/seo/routes.js` with `type: 'article'`.
7. **Outreach:** ask the FINAS, ICCF, AgriFin and Founders Live organisers, and KTIP, to link to the matching event pages (templates are in the roadmap).
8. **Clean-up:** delete `public/downloads/app-release.apk` (74 MB) once you confirm nothing links to it directly, and remove unused original images.

### How to add a new page
1. Create the page component and add its `<Route>` in `src/App.jsx` (lazy-loaded).
2. Add an entry to `pages` in `src/seo/routes.js` with `path`, `title` (60 characters or fewer), `description` (about 150–160) and `breadcrumb`.
3. Link to it from the navbar, footer or a relevant page.
4. Run `npm run build && npm run check:seo`.

---

## 6. Decisions, access and approvals still needed

| Item | Why | Who |
|---|---|---|
| **Deployment to HostAfrica** | Nothing has been deployed. Upload is manual (cPanel/FTP). | You |
| **Search Console access** | To confirm verification, submit the sitemap and read query data. The audit had no access. | You |
| **Analytics choice** | GA4 (free, needs a cookie/consent notice) or a privacy-friendly option (Plausible/Umami). Nothing was added without your decision. | You |
| **AI-crawler policy** | Currently all allowed (see §3). Confirm or restrict. | You |
| **Partner logo permissions** | Partner logos imply endorsement. Confirm each partner agreed to be shown. | You |
| **Verified product facts** | Crop coverage, languages beyond Swahili, offline scope, accuracy, pricing. Needed before writing feature pages or FAQs. | Product team |
| **Pilot and case-study data** | The Kakamega case study and impact claims need verified records. Only "103 farmers onboarded" is currently on the site. | Programme team |
| **Agronomist reviewer** | Needed for pest and disease articles (roadmap). | You |
| **Google Business Profile** | Only if the Ngong Road office serves visitors in person and meets Google's eligibility rules. | You |

---

## 7. Round 2: UI preservation, APK fix and verification (16 Oct 2026)

### APK download: root cause and fix
- **Symptom (live):** `GET /downloads/AgriScanAI.apk` returns **HTTP 500** with a 579-byte HTML error page. The old aliases `app-release.apk` and `agriscanai.apk` also return 500. Evidence: `verification/smoke-live-before.txt`.
- **Root cause:** in the original `public/.htaccess`:
  ```apache
  RewriteRule ^downloads/agriscanai\.apk$ /downloads/AgriScanAI.apk [NC,L]
  ```
  `[NC]` (case-insensitive) makes the rule match `AgriScanAI.apk` itself. The internal rewrite repeats until Apache's limit (`AH00124: Request exceeded the limit of 10 internal redirects`). The `app-release.apk` alias led into the same loop.
- **Reproduced** on Apache 2.4.58 (XAMPP, with a throwaway config using `AllowOverride All`) with the original `main` build: 500, plus `AH00124` in the error log. The browser click on the hero badge ended in `canceled`.
- **Fix (`public/.htaccess`):**
  - The aliases are now one case-sensitive external redirect: `RewriteRule ^downloads/(app-release|agriscanai)\.apk$ /downloads/AgriScanAI.apk [R=301,L]`.
  - Added `AddType application/vnd.android.package-archive .apk`.
  - Added `Content-Disposition: attachment; filename="AgriScanAI.apk"`.
  - **No component, button, text or style was changed.** All buttons already link to `/downloads/AgriScanAI.apk` with `download="AgriScanAI.apk"`.
- **Hotfix for the current live site** (no SEO changes): `htaccess-apk-hotfix-for-current-live-site.txt`, the original `.htaccess` with only the APK lines fixed. Verified on Apache with the original build: pages 200, APK 200 with the full 68,382,552 bytes. Compare it with the server's actual `.htaccess` before replacing it.

### APK verification (local Apache)
| Check | Result |
|---|---|
| HTTP status / type | 200, `application/vnd.android.package-archive`, `Content-Disposition: attachment; filename="AgriScanAI.apk"` |
| Size | 68,382,552 bytes (same as `public/downloads/AgriScanAI.apk`) |
| SHA-256 | `2ea839e5474888d23e4b2f953c0d1cd2e6d84ba5a8337e1d042eccc4b1bfc3b0`, identical to the source |
| ZIP integrity | `unzip -t`: no errors, 468 entries; `AndroidManifest.xml`, `classes.dex`, `lib/arm64-v8a/*.so` (Flutter) |
| Manifest (decoded binary XML) | package `com.agriscanai.agri_scan_ai`, versionName 1.0.1, versionCode 2, minSdk 26 (Android 8.0), targetSdk 36, label "AgriScanAI" |
| Signature | APK Signature Scheme v2/v3 block present (`APK Sig Block 42`), no v1 JAR signature (fine for minSdk 26). **Not cryptographically verified**: no `apksigner`/Android SDK on this machine |
| Real button click (headless Chrome) | Home hero, home Join, `/solutions`, `/contact` (desktop) and `/about`, home hero (Android-emulated mobile): every download `completed`, filename `AgriScanAI.apk`, SHA-256 match, page not navigated away |
| Old URLs | `/downloads/app-release.apk` → 301 → `AgriScanAI.apk` (that file is an older build, v1.0.1 code 1) |
| Install on a real Android device | **NOT TESTED** (no device) |

### Two round-1 regressions found and fixed (neither was ever deployed)
1. **Redirect loop on Apache.** Prerendered `dist/about/index.html` made `mod_dir` redirect `/about` → `/about/`, and the trailing-slash rule sent it back. The Node test server didn't reproduce this; real Apache did. Pages are now flat files in `dist/_pages/`. `/_pages/*` is blocked from direct access (404).
2. **Two FINAS 2026 photos were missing.** Byte-identical source photos (`Agricultural Finance Technical Working Group.jpg` = `1783002631284 (1).jpg`, `hightlight 3.jpg` = `Booth 4.jpg`) produced identical WebPs, and Vite emitted only one file per pair. Fixed. `check:seo` now fails if any `/assets/` URL referenced by the HTML or JS is missing.

### UI/UX preservation evidence
- **Method:** headless Chrome; the original `main` build and this branch both served by Apache. All **19 routes × desktop (1440×900) and mobile (390×844 @2x)** captured as full pages and above the fold. Animations frozen, LinkedIn iframes hidden. Diff = pixels with RGB distance > 30. Table: `verification/visual-regression.md`.
- **Page height:** identical on all 38 captures, so no layout shift anywhere.
- **Broken images / console errors:** 0 on all 38. The only console message is a report-only CSP notice from LinkedIn's embed iframe on Resources.
- **Above the fold, final build:** 0% on About, Contact, Privacy, Terms, Solutions and ICCF, and on Home mobile; 0.078% on Home desktop (the softly blurred hero background, WebP q92). The earlier full-page 1–3.5% on long event pages is photo re-encoding plus the full-page capture redrawing the fixed navbar. Positions measured in the DOM are identical (navbar top 0 / 90 px, hero 0 / 600 px).
- **Fonts:** the same 7 font faces load and the same families and weights render (`Inter 400–800`, `Montserrat 700/800`). The original downloaded 4 of them twice. They are now **self-hosted** copies of the identical Google Fonts files (`public/assets/fonts/`, OFL). Verified 0% pixel difference.
- **Image fidelity:**
  - Product UI mockups with small text (`phone`, six app screens, `Our Approach Image`) are now **lossless** WebP.
  - Other PNG-sourced art is WebP q92; photos are WebP q78, capped at 1920 px, EXIF-rotated, aspect ratio preserved.
  - Icons and logos are rendered at 3× their display size, with transparency kept.
- **Intentional behaviour changes:** both fix functional bugs.
  1. Unknown URLs show a 404 page instead of silently redirecting home.
  2. The footer "Good Partners" link now opens goodpartnerske.org in a new tab, like the other footer social links. Before, it redirected to the homepage.

### Lab performance (Lighthouse 12.6.1, mobile, simulated slow 4G, local Apache)
| Page | Original: perf / LCP / FCP / weight | Final: perf / LCP / FCP / weight |
|---|---|---|
| Home | 57 / 22.6 s / 6.1 s / 18.14 MB | **93 / 3.0 s / 1.7 s / 0.85 MB** |
| Solutions | 60 / 24.3 s / 5.9 s / 6.40 MB | **93 / 2.9 s / 1.8 s / 0.82 MB** |
| Kakamega event | 58 / 13.1 s / 5.8 s / 6.35 MB | **86 / 4.1 s / 1.7 s / 1.66 MB** |
| About | — | 95 / 2.7 s / 1.8 s / 0.42 MB |
| FINAS 2026 | — | 87 / 3.9 s / 1.8 s / 1.16 MB |

All final pages score Lighthouse SEO 100, Best Practices 100, Accessibility 90–95, CLS ≤ 0.001 and TBT ≤ 33 ms.

**LCP is still above 2.5 s in this lab simulation.** The next step is responsive `srcset` images, especially event heroes, which currently send 1920 px photos to phones. These are lab numbers; field Core Web Vitals need real traffic data from Search Console.

### Structured data
- All 19 pages were validated offline against the official schema.org vocabulary (`schemaorg-current-https.jsonld`): **0 unknown types, 0 unknown properties, 0 properties used on the wrong type.** Types: Organization, Brand, PostalAddress, WebSite, WebPage, SoftwareApplication, BreadcrumbList, ListItem. The validator was confirmed to catch deliberately bad input.
- **Google Rich Results Test: NOT TESTED.** It needs the deployed URL.

### Live-site baseline
`verification/smoke-live-before.txt`: 35 of 37 checks fail on the live site today, including:
- the APK 500
- robots.txt and sitemap returning HTML
- soft 404s
- www not redirecting
- `google2bb5b0423006a774.html` returning the HTML shell, so **HTML-file verification for Search Console cannot currently succeed**
