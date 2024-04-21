import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import remarkToc from 'remark-toc';
import remarkCodeImport from 'remark-code-import';
import remarkCodeTitle from 'remark-code-title';
import mdx from '@astrojs/mdx';

export default defineConfig({
 devToolbar: {
  enabled: false,
 },
 integrations: [tailwind(), sitemap(), mdx()],
 site: 'https://aryxst.github.io/',
 server: {
  port: 3000,
 },
 markdown: {
  remarkPlugins: [remarkToc, remarkCodeImport, remarkCodeTitle],
  gfm: true,
  syntaxHighlight: 'shiki',
  shikiConfig: {
   wrap: false,
  },
 },
});
