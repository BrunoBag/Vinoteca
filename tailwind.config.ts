import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        // Colores inspirados en vinos de Mendoza
        malbec: {
          50: '#fdf4f3',
          100: '#fde8e6',
          200: '#fad5d2',
          300: '#f6b6b0',
          400: '#f08b82',
          500: '#e86259',
          600: '#d44b42',
          700: '#b23b33',
          800: '#93322d',
          900: '#7a2e2a',
          950: '#421512',
        },
        wine: {
          50: '#fdf2f2',
          100: '#fde3e3',
          200: '#fccccc',
          300: '#f8a8a8',
          400: '#f27777',
          500: '#e84c4c',
          600: '#d42929',
          700: '#b21e1e',
          800: '#941d1d',
          900: '#7c1d1d',
          950: '#430a0a',
        },
        burgundy: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#ef4444',
          600: '#dc2626',
          700: '#7f1d1d',
          800: '#991b1b',
          900: '#7f1d1d',
          950: '#450a0a',
        },
        cream: {
          50: '#fefcf9',
          100: '#fdf8f1',
          200: '#f9f0e2',
          300: '#f5e7d3',
          400: '#f0ddc4',
          500: '#ebd4b5',
          600: '#d4c1a4',
          700: '#b8a182',
          800: '#9c8160',
          900: '#7d6a4f',
          950: '#4a3f2f',
        }
      },
      fontFamily: {
        'serif': ['var(--font-playfair)', 'serif'],
        'sans': ['var(--font-inter)', 'sans-serif'],
      }
    },
  },
  plugins: [],
} satisfies Config;
