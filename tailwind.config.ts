import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'Cairo', 'sans-serif'],
      },
      colors: {
        primary: '#FF0033',
        surface: '#1C1F2A',
        background: '#0D0D0D',
        accent: '#FFD700',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(255, 0, 51, 0.2)',
        'glow-lg': '0 0 40px rgba(255, 0, 51, 0.3)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
};

export default config;