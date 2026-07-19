import { PAGES } from '../lib/pages.js';

// Hand-rolled rather than pulling in an integration: six known routes, and the only
// tricky part is the base path, which is right here in front of us.
export function GET({ site }) {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const today = new Date().toISOString().slice(0, 10);

  const urls = PAGES.map(({ href }) => {
    const path = href === '/' ? `${base}/` : `${base}${href}`;
    return [
      '  <url>',
      `    <loc>${new URL(path, site).href}</loc>`,
      `    <lastmod>${today}</lastmod>`,
      // the home page and darshan carry the thing people actually search for
      `    <priority>${href === '/' || href === '/darshan' ? '1.0' : '0.7'}</priority>`,
      '  </url>',
    ].join('\n');
  });

  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...urls,
    '</urlset>',
    '',
  ].join('\n');

  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}
