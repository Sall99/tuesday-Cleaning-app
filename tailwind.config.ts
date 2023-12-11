import type { Config } from 'tailwindcss';
export default {
  darkMode: ['class'],
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '2rem',
        screens: {
          '2xl': '1400px',
        },
      },
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
          500: 'var(--color-purple-500)',
          600: 'var(--color-purple-600)',
          700: 'var(--color-purple-700)',
        },
        blue: {
          400: 'var(--color-blue-400)',
        },
        gray: {
          400: 'var(--color-gray-400)',
          500: 'var(--color-gray-500)',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },

      borderRadius: {
        _50: '50%',
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
        sm: 'calc(var(--radius) - 4px)',
        _25: '25px',
        _32: '32px',
        _64: '64px',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },

      screens: { xxl: '1428px', '2xl': '1650px', '3xl': '1728px' },

      spacing: {
        _1: '1px',
        _5: '5px',
        _11: '11px',
        _30: '30px',
        _48: '48px',
        _50: '50px',
        _72: '72px',
        _82: '82px',
        _100: '100px',
        _103: '103px',
        _128: '128px',
        _150: '150px',
        '_120.75': '120.75px',
        '_174.24': '174.24px',
        _200: '200px',
        _224: '224px',
        _270: '270px',
        _285: '285px',
        _288: '288px',
        _302: '302px',
        _308: '305px',
        _340: '340px',
        _350: '350px',
        _378: '378px',
        _370: '370px',
        _405: '405px',
        _430: '430px',
        _440: '440px',
        _505: '505px',
        _540: '540px',
        _547: '547px',
        _579: '579px',
        _589: '589px',
        _594: '594px',
        _600: '600px',
        _696: '696px',
        _710: '710px',
        _1016: '1016px',
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('tailwindcss-animate')],
} satisfies Config;
