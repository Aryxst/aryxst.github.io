import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), sitemap(), mdx()],
  site: 'https://aryxst.github.io/',
  server: {
    port: 3000
  }
});