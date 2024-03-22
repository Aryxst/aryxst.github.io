import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';
export default {
 content: ['./src/index.html'],
 plugins: [
  require('autoprefixer'),
  plugin(function ({ addBase, theme }) {
   addBase({
    h1: { fontSize: '32px', lineHeight: '44.8px' },
    h2: { fontSize: '20px' },
    h3: { fontSize: '18px' },
   });
  }),
 ],
} as Config;
