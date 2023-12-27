import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel/static';

import { config } from './src/config';

export default defineConfig({
  site: config.SITE_URL,
  integrations: [mdx(), sitemap(), react()],
  output: 'static',
  adapter: vercel(),
  vite: {
    optimizeDeps: {
      exclude: ['@resvg/resvg-js'],
    },
  },
});
