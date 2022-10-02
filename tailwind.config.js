/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main': '#5CB33C',
        'main-light': '#9EC091',
        'night': '#0c0e0e',
        'yellow': '#F5B433',
      },
      boxShadow: {
        '3xl': '0 0 20px rgba(168, 168, 168, 0.15)',
      }
    },
  },
  plugins: [],
}
