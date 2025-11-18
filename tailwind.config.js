/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      /* -------------------------------------- */
      /* FONT FAMILY                             */
      /* -------------------------------------- */
      fontFamily: {
        quicksand: ['var(--font-quicksand)', 'sans-serif'],
      },

      /* -------------------------------------- */
      /* FONTS FROM FIGMA                        */
      /* -------------------------------------- */
      fontSize: {
        'display-3xl': [
          'var(--text-display-3xl)',
          { lineHeight: 'var(--text-display-3xl--line-height)' },
        ],
        'display-2xl': [
          'var(--text-display-2xl)',
          {
            lineHeight: 'var(--text-display-2xl--line-height)',
            letterSpacing: '-0.02em',
          },
        ],
        'display-xl': [
          'var(--text-display-xl)',
          {
            lineHeight: 'var(--text-display-xl--line-height)',
            letterSpacing: '-0.02em',
          },
        ],
        'display-lg': [
          'var(--text-display-lg)',
          {
            lineHeight: 'var(--text-display-lg--line-height)',
            letterSpacing: '-0.02em',
          },
        ],
        'display-md': [
          'var(--text-display-md)',
          { lineHeight: 'var(--text-display-md--line-height)' },
        ],
        'display-sm': [
          'var(--text-display-sm)',
          { lineHeight: 'var(--text-display-sm--line-height)' },
        ],
        'display-xs': [
          'var(--text-display-xs)',
          { lineHeight: 'var(--text-display-xs--line-height)' },
        ],

        xl: ['var(--text-xl)', { lineHeight: 'var(--text-xl--line-height)' }],
        lg: ['var(--text-lg)', { lineHeight: 'var(--text-lg--line-height)' }],
        md: ['var(--text-md)', { lineHeight: 'var(--text-md--line-height)' }],
        sm: ['var(--text-sm)', { lineHeight: 'var(--text-sm--line-height)' }],
        xs: ['var(--text-xs)', { lineHeight: 'var(--text-xs--line-height)' }],
      },

      /* -------------------------------------- */
      /* RADIUS (dari figma)                     */
      /* -------------------------------------- */
      borderRadius: {
        xxs: '0.125rem',
        xs: '0.25rem',
        sm: '0.375rem',
        md: '0.5rem',
        lg: '0.625rem',
        xl: '0.75rem',
        '2xl': '1rem',
        '3xl': '1.25rem',
        '4xl': '1.5rem',
      },

      /* -------------------------------------- */
      /* COLORS (shadcn + figma)                */
      /* -------------------------------------- */
      colors: {
        /* shadcn original */
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',

        /* Figma Neutral */
        neutral: {
          25: 'var(--neutral-25)',
          50: 'var(--neutral-50)',
          100: 'var(--neutral-100)',
          200: 'var(--neutral-200)',
          300: 'var(--neutral-300)',
          400: 'var(--neutral-400)',
          500: 'var(--neutral-500)',
          600: 'var(--neutral-600)',
          700: 'var(--neutral-700)',
          800: 'var(--neutral-800)',
          900: 'var(--neutral-900)',
          950: 'var(--neutral-950)',
        },

        /* Primary dari Figma */
        figmaPrimary: {
          100: 'var(--primary-100)',
          200: 'var(--primary-200)',
          300: 'var(--primary-300)',
        },

        figmaAccent: {
          red: 'var(--accent-red)',
          green: 'var(--accent-green)',
          yellow: 'var(--accent-yellow)',
        },
      },

      /* -------------------------------------- */
      /* SPACING TOKEN (Figma spacing scale)     */
      /* -------------------------------------- */
      spacing: {
        xxs: '0.125rem',
        xs: '0.25rem',
        sm: '0.375rem',
        md: '0.5rem',
        lg: '0.75rem',
        xl: '1rem',
        '2xl': '1.25rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
        '5xl': '2.5rem',
        '6xl': '3rem',
        '7xl': '4rem',
        '8xl': '5rem',
        '9xl': '6rem',
        '10xl': '8rem',
        '11xl': '8.75rem',

        /* padding 120px = px-30 */
        30: '120px',
      },

      /* -------------------------------------- */
      /* SHADOW                                 */
      /* -------------------------------------- */
      boxShadow: {
        soft: '0px 0px 20px 0px #CBCACA40',
        card: '0px 0px 20px 0px #CBCACA40',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    function ({ addUtilities }) {
      addUtilities({
        /* XS */
        '.text-xs-regular': {
          fontSize: 'var(--text-xs)',
          fontWeight: '400',
          lineHeight: 'var(--text-xs--line-height)',
        },
        '.text-xs-medium': {
          fontSize: 'var(--text-xs)',
          fontWeight: '500',
          lineHeight: 'var(--text-xs--line-height)',
        },
        '.text-xs-semibold': {
          fontSize: 'var(--text-xs)',
          fontWeight: '600',
          lineHeight: 'var(--text-xs--line-height)',
        },
        '.text-xs-bold': {
          fontSize: 'var(--text-xs)',
          fontWeight: '700',
          lineHeight: 'var(--text-xs--line-height)',
        },

        /* SM */
        '.text-sm-regular': {
          fontSize: 'var(--text-sm)',
          fontWeight: '400',
          lineHeight: 'var(--text-sm--line-height)',
        },
        '.text-sm-medium': {
          fontSize: 'var(--text-sm)',
          fontWeight: '500',
          lineHeight: 'var(--text-sm--line-height)',
        },
        '.text-sm-semibold': {
          fontSize: 'var(--text-sm)',
          fontWeight: '600',
          lineHeight: 'var(--text-sm--line-height)',
        },
        '.text-sm-bold': {
          fontSize: 'var(--text-sm)',
          fontWeight: '700',
          lineHeight: 'var(--text-sm--line-height)',
        },

        /* MD */
        '.text-md-regular': {
          fontSize: 'var(--text-md)',
          fontWeight: '400',
          lineHeight: 'var(--text-md--line-height)',
        },
        '.text-md-medium': {
          fontSize: 'var(--text-md)',
          fontWeight: '500',
          lineHeight: 'var(--text-md--line-height)',
        },
        '.text-md-semibold': {
          fontSize: 'var(--text-md)',
          fontWeight: '600',
          lineHeight: 'var(--text-md--line-height)',
        },
        '.text-md-bold': {
          fontSize: 'var(--text-md)',
          fontWeight: '700',
          lineHeight: 'var(--text-md--line-height)',
        },

        /* LG */
        '.text-lg-regular': {
          fontSize: 'var(--text-lg)',
          fontWeight: '400',
          lineHeight: 'var(--text-lg--line-height)',
        },
        '.text-lg-medium': {
          fontSize: 'var(--text-lg)',
          fontWeight: '500',
          lineHeight: 'var(--text-lg--line-height)',
        },
        '.text-lg-semibold': {
          fontSize: 'var(--text-lg)',
          fontWeight: '600',
          lineHeight: 'var(--text-lg--line-height)',
        },
        '.text-lg-bold': {
          fontSize: 'var(--text-lg)',
          fontWeight: '700',
          lineHeight: 'var(--text-lg--line-height)',
        },
      });
    },
  ],
};
