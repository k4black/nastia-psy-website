// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: process.env.CF_PAGES ? 'https://bystrova.pages.dev' : 'https://k4black.github.io',
  base: process.env.CF_PAGES ? '/' : '/nastia-psy-website',
  integrations: [
    sitemap({
      changefreq: 'weekly',
      priority: 1.0,
    })
  ],
  vite: {
    plugins: [tailwindcss()]
  }
});
