import { type Config } from 'tailwindcss';
import forms from '@tailwindcss/forms';

export default {
  content: [
    '{routes,islands,components}/**/*.{ts,tsx,js,jsx}',
  ],
  plugins: [
    forms,
  ],
} satisfies Config;
