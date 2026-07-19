import { defineConfig } from 'astro/config';

// GitHub Pages project site: served from /<repo>, so `base` must match the repo name.
// When the temple's own domain arrives: set base to '/', update `site`, add public/CNAME.
export default defineConfig({
  // Repo lives under the Yellow-Leaves-Studio org, so Pages serves it from the org's
  // github.io host — not a personal one. Live at:
  //   https://yellow-leaves-studio.github.io/chennakesava-temple/
  site: 'https://yellow-leaves-studio.github.io',
  base: '/chennakesava-temple',
  trailingSlash: 'ignore',
  build: { inlineStylesheets: 'always' },
});
