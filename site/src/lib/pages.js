// The site's routes, in one place. Imported by both the nav and sitemap.xml, because a
// sitemap that silently goes stale when someone adds a page is worse than no sitemap.
// Adding a page here puts it in both.
export const PAGES = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'The temple' },
  { href: '/darshan', label: 'Darshan' },
  { href: '/festivals', label: 'Festivals' },
  { href: '/sun-phenomenon', label: 'The sun' },
  { href: '/visit', label: 'Getting there' },
];
