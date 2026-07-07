/**
 * Per-page SEO helper. React 19 lifts native <title>, <meta>, <link> from
 * components into <head>, so each page composes its own meta block.
 */

export interface PageMeta {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
  noindex?: boolean;
}

const SITE_URL = 'https://stayinlapland.com';
const DEFAULT_OG = `${SITE_URL}/og-default.jpg`;

export function pageUrl(path: string): string {
  // Trailing-slash form matches the prerendered static HTML (Cloudflare Pages
  // serves /path/index.html at /path/ with 200; the no-slash form 308-redirects).
  return `${SITE_URL}${path === '/' ? '' : path}`.replace(/\/?$/, '/');
}

export function pageOg(image?: string): string {
  return image ?? DEFAULT_OG;
}

export { SITE_URL };
