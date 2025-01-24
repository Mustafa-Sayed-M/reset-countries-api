/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Dark:
        'bg-dark-color-1': '#202d36',
        'bg-dark-color-2': '#2b3743',
        // Light:
        'bg-light-color-1': '#ffffff',
        'bg-light-color-2': '#fafafa',
      }
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
  },
  plugins: [],
  darkMode: ['selector'],
}