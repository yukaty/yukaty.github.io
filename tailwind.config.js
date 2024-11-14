/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'light-primary': '#34426A',
        'light-secondary': '#718096',
        'light-accent': '#63B3ED',
        'light-bg': '#F8F9FA',
        'light-card': '#FFFFFF',
        'dark-primary': '#CCD6E9',
        'dark-secondary': '#94A3BC',
        'dark-accent': '#5B8BE5',
        'dark-bg': '#13141C',
        'dark-card': '#1E202C',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Playfair Display', 'serif'],
      },
      boxShadow: {
        'light': '0 2px 4px rgba(45, 48, 71, 0.1)',
        'dark': '0 2px 4px rgba(0, 0, 0, 0.2)',
      }
    },
  },
  plugins: [],
}