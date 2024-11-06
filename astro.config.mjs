// @ts-check
import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';

import lit from '@astrojs/lit';

// https://astro.build/config
export default defineConfig({
  site: 'https://reinbentdal.github.io',
  base: 'visuell-formidling',
  build: {
    assets: 'build_assets' // rename to something without underscore, to avoid being recognized as hidden by github pages
  },
  integrations: [mdx(), lit()]
});