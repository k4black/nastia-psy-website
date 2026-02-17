// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://k4black.github.io',
  base: '/nastia-psy-website',
  vite: {
    plugins: [tailwindcss()]
  }
});
