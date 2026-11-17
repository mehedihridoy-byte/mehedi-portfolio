/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          950: '#07090E',
          900: '#0B0F17',
          850: '#101622',
          800: '#151D2C',
          700: '#1E293B',
          600: '#334155',
        },
        accent: {
          emerald: '#10B981',
          teal: '#14B8A6',
          cyan: '#06B6D4',
          sky: '#0EA5E9',
          amber: '#F59E0B',
        },
      },
      fontFamily: {
        sans: [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'sans-serif',
        ],
        mono: [
          'JetBrains Mono',
          'Fira Code',
          'monospace',
        ],
      },
      boxShadow: {
        'glow-emerald': '0 0 30px -5px rgba(16, 185, 129, 0.2)',
        'glow-cyan': '0 0 30px -5px rgba(6, 182, 212, 0.2)',
        'card-glow': '0 0 20px 0 rgba(0, 0, 0, 0.5), inset 0 1px 0 0 rgba(255, 255, 255, 0.05)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
};
