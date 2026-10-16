// Single source of truth for page metadata.
// Used by <Seo /> on client-side navigation, by scripts/prerender.mjs to write
// per-route HTML, and to generate sitemap.xml. Keep copy accurate to what each
// page actually shows — no claims that are not on the page.
import { events } from '../data/events';

export const SITE_URL = 'https://agriscanai.co.ke';
export const SITE_NAME = 'AgriScanAI';
export const DEFAULT_OG_IMAGE = '/og-image.jpg';

export const ORGANIZATION = {
  name: 'Good Partners',
  url: 'https://goodpartnerske.org/',
  email: 'info@agriscanai.co.ke',
  telephone: '+254711085400',
  address: {
    streetAddress: 'Marsabit Plaza, Ngong Road',
    addressLocality: 'Nairobi',
    addressCountry: 'KE',
  },
  sameAs: [
    'https://www.linkedin.com/company/good-partners-limited/',
    'https://www.linkedin.com/company/agriscanai',
    'https://x.com/GoodPartners_KE',
    'https://www.facebook.com/people/Good-Partners/61580951851606/',
    'https://www.instagram.com/goodpartnerske/',
  ],
};

const pages = [
  {
    path: '/',
    title: 'AgriScanAI | AI Crop Advisory & Farmer Data Platform for Kenya',
    description:
      'Identify crop pests and diseases from a photo, get local-language farm advice, and manage farmer programmes with real-time data. Built in Kenya by Good Partners.',
  },
  {
    path: '/solutions',
    title: 'Farmer Programme Monitoring for NGOs & Agribusiness | AgriScanAI',
    description:
      'Farmer profiling, offline field data collection, live dashboards, yield and input tracking and AgriPay payments for NGOs, cooperatives and government programmes.',
    breadcrumb: 'Solutions',
  },
  {
    path: '/pilot-program',
    title: 'Run an AgriScanAI Pilot Programme with Your Farmers',
    description:
      'Test AgriScanAI with your farmers before you scale. See what a pilot includes, read feedback from KTIP in Kakamega and apply to run a pilot with your organisation.',
    breadcrumb: 'Pilot Program',
  },
  {
    path: '/about',
    title: 'About AgriScanAI | Built by Good Partners in Nairobi, Kenya',
    description:
      'AgriScanAI is built by Good Partners in Nairobi to support smallholder farmers and agricultural programmes with AI, data and local-language advice.',
    breadcrumb: 'About',
  },
  {
    path: '/events',
    title: 'Events, Trainings & Awards | AgriScanAI',
    description:
      'Where AgriScanAI has exhibited, trained farmers and won awards, including FINAS 2026, the Kakamega farmer training, ICCF 2025 and Founders Live Nairobi 2025.',
    breadcrumb: 'Events',
  },
  {
    path: '/resources',
    title: 'Resources: Brochure, Newsletter & Updates | AgriScanAI',
    description:
      'Download the AgriScanAI brochure and the Good Partners quarterly newsletter, and follow the latest AgriScanAI updates from the field.',
    breadcrumb: 'Resources',
  },
  {
    path: '/contact',
    title: 'Contact AgriScanAI | Request a Demo or Partnership',
    description:
      'Talk to the AgriScanAI team in Nairobi about a demo, a pilot or a partnership. Call +254 711 085 400, email info@agriscanai.co.ke or send us a message.',
    breadcrumb: 'Contact',
  },
  {
    path: '/privacy-policy',
    title: 'Privacy Policy | AgriScanAI',
    description:
      'How AgriScanAI collects, uses, stores and protects personal and farm data, and the choices and rights available to farmers and partner organisations.',
    breadcrumb: 'Privacy Policy',
  },
  {
    path: '/terms-of-use',
    title: 'Terms of Use | AgriScanAI',
    description:
      'The terms and community guidelines that apply when you use the AgriScanAI mobile app, web dashboard and website.',
    breadcrumb: 'Terms of Use',
  },
];

const clip = (text, max) =>
  text.length <= max ? text : `${text.slice(0, text.lastIndexOf(' ', max - 1))}…`;

// Shorter <title>s for events whose headline would be truncated in search results.
const eventTitles = {
  'finas-2026': 'Good Partners at FINAS 2026: AgriScanAI at KICC Nairobi',
  'nairobi-startup-summit-2026': 'Good Partners at Nairobi Startup Summit & Awards 2026',
  'agriscanai-farmer-training-kakamega-2026': 'AgriScanAI Farmer Training in Kakamega County, 2026',
  'amref-2nd-phc-congress-2026': 'Good Partners at the 2nd Primary Health Care Congress 2026',
  'iccf-2025': 'AgriScanAI at ICCF 2025, the Contract Farming Conference',
  'kenya-software-ai-summit-2025': 'AgriScanAI at the Kenya Software & AI Summit 2025',
  'agrifin-2025': 'AgriScanAI at the AgriFin Learning Event (ALE) 2025',
  'founders-live-2025': 'AgriScanAI Wins Founders Live Nairobi 2025',
  'finas-2025': 'AgriScanAI at FINAS 2025, Financing Agri-food Systems',
  'ai-kigali-2025': 'AgriScanAI at the Global AI Summit on Africa, Kigali 2025',
};

const eventPages = events.map((e) => ({
  path: `/events/${e.slug}`,
  title: eventTitles[e.slug] ?? `${clip(e.title.split(':')[0], 60)} | AgriScanAI`,
  description: clip(`${e.date}, ${e.location}. ${e.excerpt}`, 158),
  image: e.image,
  type: 'article',
  breadcrumb: e.title.split(':')[0],
  parent: { path: '/events', name: 'Events' },
}));

export const routes = [...pages, ...eventPages];

export const NOT_FOUND = {
  path: '/404',
  title: 'Page Not Found | AgriScanAI',
  description: 'The page you were looking for does not exist. Explore AgriScanAI solutions, events and resources.',
  noindex: true,
};

export function getRouteMeta(pathname) {
  const clean = pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname;
  return routes.find((r) => r.path === clean) ?? NOT_FOUND;
}

export const absoluteUrl = (p) => (/^https?:/.test(p) ? p : `${SITE_URL}${p}`);

/** JSON-LD graph for a route. Only describes what the page visibly shows. */
export function buildJsonLd(meta) {
  const orgId = `${SITE_URL}/#organization`;
  const graph = [
    {
      '@type': 'Organization',
      '@id': orgId,
      name: ORGANIZATION.name,
      url: ORGANIZATION.url,
      email: ORGANIZATION.email,
      telephone: ORGANIZATION.telephone,
      address: { '@type': 'PostalAddress', ...ORGANIZATION.address },
      sameAs: ORGANIZATION.sameAs,
      brand: { '@type': 'Brand', name: SITE_NAME, logo: absoluteUrl('/agriscanai-email-logo.png') },
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: `${SITE_URL}/`,
      name: SITE_NAME,
      inLanguage: 'en',
      publisher: { '@id': orgId },
    },
    {
      '@type': 'WebPage',
      '@id': `${absoluteUrl(meta.path === '/' ? '/' : meta.path)}#webpage`,
      url: absoluteUrl(meta.path),
      name: meta.title,
      description: meta.description,
      isPartOf: { '@id': `${SITE_URL}/#website` },
      inLanguage: 'en',
    },
  ];

  if (meta.path === '/' || meta.path === '/solutions') {
    graph.push({
      '@type': 'SoftwareApplication',
      '@id': `${SITE_URL}/#app`,
      name: SITE_NAME,
      applicationCategory: 'BusinessApplication',
      applicationSubCategory: 'Agriculture',
      operatingSystem: 'Android, Web',
      downloadUrl: absoluteUrl('/downloads/AgriScanAI.apk'),
      description:
        'Digital extension support system combining AI crop pest and disease identification, local-language advisory and farmer data tools for agricultural programmes.',
      publisher: { '@id': orgId },
    });
  }

  if (meta.breadcrumb) {
    const items = [{ name: 'Home', path: '/' }];
    if (meta.parent) items.push({ name: meta.parent.name, path: meta.parent.path });
    items.push({ name: meta.breadcrumb, path: meta.path });
    graph.push({
      '@type': 'BreadcrumbList',
      itemListElement: items.map((it, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: it.name,
        item: absoluteUrl(it.path),
      })),
    });
  }

  return { '@context': 'https://schema.org', '@graph': graph };
}

/** Head tags as an HTML string — used at prerender time. */
export function renderHeadTags(meta) {
  const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
  const url = absoluteUrl(meta.path);
  const image = absoluteUrl(meta.image || DEFAULT_OG_IMAGE);
  const tags = [
    `<title>${esc(meta.title)}</title>`,
    `<meta name="description" content="${esc(meta.description)}" />`,
    meta.noindex
      ? '<meta name="robots" content="noindex, follow" />'
      : `<link rel="canonical" href="${url}" />`,
    `<meta property="og:site_name" content="${SITE_NAME}" />`,
    `<meta property="og:locale" content="en_KE" />`,
    `<meta property="og:type" content="${meta.type || 'website'}" />`,
    `<meta property="og:title" content="${esc(meta.title)}" />`,
    `<meta property="og:description" content="${esc(meta.description)}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:image" content="${esc(image)}" />`,
    '<meta name="twitter:card" content="summary_large_image" />',
    '<meta name="twitter:site" content="@GoodPartners_KE" />',
    `<meta name="twitter:title" content="${esc(meta.title)}" />`,
    `<meta name="twitter:description" content="${esc(meta.description)}" />`,
    `<meta name="twitter:image" content="${esc(image)}" />`,
  ];
  if (!meta.noindex) {
    tags.push(
      `<script type="application/ld+json" id="ld-json">${JSON.stringify(buildJsonLd(meta)).replace(/</g, '\\u003c')}</script>`
    );
  }
  return tags.join('\n    ');
}
