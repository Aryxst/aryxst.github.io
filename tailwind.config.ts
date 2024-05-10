import type { Config } from 'tailwindcss';

export default {
 darkMode: 'class',
 content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
 theme: {
  extend: {
   screens: {
    tbl: '813px',
   },
  },
 },
 plugins: [require('autoprefixer'), require('@tailwindcss/typography')],
} as Config;
