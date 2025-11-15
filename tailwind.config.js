/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      /* -------------------------------------- */
      /* FONT FAMILY                             */
      /* -------------------------------------- */
      fontFamily: {
        sans: ["var(--font-quicksand)", "sans-serif"],
      },

      /* -------------------------------------- */
      /* FONTS FROM FIGMA                        */
      /* -------------------------------------- */
      fontSize: {
        "display-3xl": ["var(--text-display-3xl)", { lineHeight: "var(--text-display-3xl--line-height)" }],
        "display-2xl": ["var(--text-display-2xl)", { lineHeight: "var(--text-display-2xl--line-height)" }],
        "display-xl": ["var(--text-display-xl)", { lineHeight: "var(--text-display-xl--line-height)" }],
        "display-lg": ["var(--text-display-lg)", { lineHeight: "var(--text-display-lg--line-height)" }],
        "display-md": ["var(--text-display-md)", { lineHeight: "var(--text-display-md--line-height)" }],
        "display-sm": ["var(--text-display-sm)", { lineHeight: "var(--text-display-sm--line-height)" }],
        "display-xs": ["var(--text-display-xs)", { lineHeight: "var(--text-display-xs--line-height)" }],

        xl: ["var(--text-xl)", { lineHeight: "var(--text-xl--line-height)" }],
        lg: ["var(--text-lg)", { lineHeight: "var(--text-lg--line-height)" }],
        md: ["var(--text-md)", { lineHeight: "var(--text-md--line-height)" }],
        sm: ["var(--text-sm)", { lineHeight: "var(--text-sm--line-height)" }],
        xs: ["var(--text-xs)", { lineHeight: "var(--text-xs--line-height)" }],
      },

      /* -------------------------------------- */
      /* COLORS (shadcn tetap utuh)             */
      /* -------------------------------------- */
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      colors: {
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
        chart: {
          1: 'hsl(var(--chart-1))',
          2: 'hsl(var(--chart-2))',
          3: 'hsl(var(--chart-3))',
          4: 'hsl(var(--chart-4))',
          5: 'hsl(var(--chart-5))',
        },

        /* -------------------------------------- */
        /* ADD Figma Color Tokens (SAFE)          */
        /* -------------------------------------- */
        neutral: {
          25: "var(--neutral-25)",
          50: "var(--neutral-50)",
          100: "var(--neutral-100)",
          200: "var(--neutral-200)",
          300: "var(--neutral-300)",
          400: "var(--neutral-400)",
          500: "var(--neutral-500)",
          600: "var(--neutral-600)",
          700: "var(--neutral-700)",
          800: "var(--neutral-800)",
          900: "var(--neutral-900)",
          950: "var(--neutral-950)",
        },
        figmaPrimary: {
          100: "var(--primary-100)",
          200: "var(--primary-200)",
          300: "var(--primary-300)",
        },
        figmaAccent: {
          red: "var(--accent-red)",
          green: "var(--accent-green)",
          yellow: "var(--accent-yellow)",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
