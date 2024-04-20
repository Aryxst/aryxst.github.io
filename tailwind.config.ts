import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';
export default {
 content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
 theme: {
  extend: {
   screens: {
    tbl: '813px',
   },
  },
 },
 plugins: [
  require('autoprefixer'),
  require('@tailwindcss/typography'),
  plugin(function ({ addBase, theme }) {
   addBase({
    h1: { fontSize: '32px', lineHeight: '44.8px' },
    h2: { fontSize: '20px' },
    h3: { fontSize: '18px' },
   });
  }),
 ],
} as Config;
