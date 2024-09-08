/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'daraz': '#f85606',
        'search_button': '#ffe4d4',
      }
    },
  },
  plugins: [],
}

