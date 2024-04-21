import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import remarkToc from 'remark-toc';

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  devToolbar: {
    enabled: false
  },
  integrations: [tailwind(), sitemap(), mdx()],
  site: 'https://aryxst.github.io/',
  server: {
    port: 3000
  },
  markdown: {
    remarkPlugins: [remarkToc]
  }
});