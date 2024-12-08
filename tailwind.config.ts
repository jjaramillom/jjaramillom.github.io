import type { Config } from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'main-bg': '#e9ecef',
      'main-light': '#b2cac0',
      'main-med': '#889b93',
      'main-dark': '#717f79',
      'main-darkest': '#383e56',
      orange: '#fb743e',
      'orange-dark': '#ce4a16',
    },
    extend: {},
    plugins: [],
  },
} satisfies Config;
