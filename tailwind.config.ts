import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Helvetica Neue Condensed',
          'HelveticaNeue-CondensedBold',
          'Helvetica Neue',
          'Helvetica',
          'Arial',
          'sans-serif',
        ],
        condensed: [
          'Helvetica Neue Condensed',
          'HelveticaNeue-CondensedBold',
          'Helvetica Neue',
          'Helvetica',
          'Arial',
          'sans-serif',
        ],
      },
      maxWidth: {
        content: '591px',
      },
      colors: {
        fresha: '#7963F1',
        'card-past': '#D9D9D9',
        'card-dark-past': '#323232',
        divider: '#E0E0E0',
      },
    },
  },
  plugins: [],
};

export default config;
