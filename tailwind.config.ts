import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        balloo_2: 'var(--balloo-2)',
        galyon: 'var(--galyon)',
      },

      colors: {
        yellow: {
          400: 'var(--color-yellow-400)',
        },

        purple: {
          400: 'var(--color-purple-400)',
        },
      },

      screens: { xxl: '1428px', '2xl': '1650px', '3xl': '1728px' },

      spacing: {
        _1: '1px',
        _30: '30px',
        _48: '48px',
        _50: '50px',
        _100: '100px',
        '_120.75': '120.75px',
        '_174.24': '174.24px',
        _200: '200px',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
} satisfies Config;
