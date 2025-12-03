// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Include mdx
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        slate: { 950: '#020617' },
      },
      keyframes: {
        blink: {
          '0%, 100%': { 'border-color': 'transparent' },
          '50%': { 'border-color': '#6366f1' },
        },
        gradient: {
          '0%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
          '100%': { 'background-position': '0% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'spin-slow': {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        'spin-reverse-slower': {
          from: { transform: 'rotate(360deg)' },
          to: { transform: 'rotate(0deg)' },
        },
      },
      animation: {
        blink: 'blink 1s step-end infinite',
        gradient: 'gradient 3s linear infinite',
        float: 'float 6s ease-in-out infinite',
        'spin-slow': 'spin-slow 10s linear infinite',
        'spin-reverse-slower': 'spin-reverse-slower 15s linear infinite',
      },
    },
  },
  plugins: [],
};