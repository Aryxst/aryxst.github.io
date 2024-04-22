import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import remarkToc from 'remark-toc';
import remarkCodeImport from 'remark-code-import';
import remarkCodeTitle from 'remark-code-title';
import mdx from '@astrojs/mdx';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
 devToolbar: {
  enabled: false,
 },
 integrations: [
  tailwind(),
  sitemap(),
  mdx(),
  icon({
   svgoOptions: {
    multipass: true,
    plugins: [
     {
      name: 'preset-default',
      params: {
       overrides: {
        // customize default plugin options
        inlineStyles: {
         onlyMatchedOnce: false,
        },
        // or disable plugins
        removeDoctype: false,
       },
      },
     },
    ],
   },
  }),
 ],
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
