// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// The blog is a GitHub Pages project site, served under the user site's domain at /blog.
export default defineConfig({
  site: 'https://abeltesfaye.si',
  base: '/blog',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
});
