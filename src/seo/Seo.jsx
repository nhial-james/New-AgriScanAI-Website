import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getRouteMeta, absoluteUrl, buildJsonLd, DEFAULT_OG_IMAGE } from './routes';

function setMeta(attr, key, content) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

/**
 * Keeps <head> in sync on client-side navigation. The initial HTML for each
 * route is written by scripts/prerender.mjs from the same metadata.
 */
export default function Seo() {
  const { pathname } = useLocation();

  useEffect(() => {
    const meta = getRouteMeta(pathname);
    const url = absoluteUrl(meta.path);
    const image = absoluteUrl(meta.image || DEFAULT_OG_IMAGE);

    document.title = meta.title;
    setMeta('name', 'description', meta.description);
    setMeta('property', 'og:type', meta.type || 'website');
    setMeta('property', 'og:title', meta.title);
    setMeta('property', 'og:description', meta.description);
    setMeta('property', 'og:url', url);
    setMeta('property', 'og:image', image);
    setMeta('name', 'twitter:title', meta.title);
    setMeta('name', 'twitter:description', meta.description);
    setMeta('name', 'twitter:image', image);

    let canonical = document.head.querySelector('link[rel="canonical"]');
    let robots = document.head.querySelector('meta[name="robots"]');
    let ld = document.getElementById('ld-json');

    if (meta.noindex) {
      canonical?.remove();
      ld?.remove();
      setMeta('name', 'robots', 'noindex, follow');
      return;
    }
    robots?.remove();
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = url;
    if (!ld) {
      ld = document.createElement('script');
      ld.type = 'application/ld+json';
      ld.id = 'ld-json';
      document.head.appendChild(ld);
    }
    ld.textContent = JSON.stringify(buildJsonLd(meta));
  }, [pathname]);

  return null;
}
