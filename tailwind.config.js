/** @type {import('tailwindcss').Config} */
module.exports = {
  // Ensure the content array points to all your new files
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // Important for the src structure
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'slate-950': '#020617',
      },
      animation: {
        // Defines the keyframe names used in the CSS file
        'blink': 'blink 1s step-end infinite',
        'gradient': 'gradient 3s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin-slow 10s linear infinite',
        'spin-reverse-slower': 'spin-reverse-slower 15s linear infinite',
      },
      keyframes: {
        // Keyframes for the typewriter cursor animation
        blink: {
          '0%, 100%': { 'border-color': 'transparent' },
          '50%': { 'border-color': '#6366f1' },
        },
        // Keyframes for the gradient text animation
        gradient: {
          '0%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
          '100%': { 'background-position': '0% 50%' },
        },
        // Keyframes for the floating image animation
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        // Keyframes for the rotating rings
        'spin-slow': {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        'spin-reverse-slower': {
          from: { transform: 'rotate(360deg)' },
          to: { transform: 'rotate(0deg)' },
        }
      }
    },
  },
  plugins: [],
}