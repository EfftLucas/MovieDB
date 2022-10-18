/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'sans': ['Inter', 'sans-serif']
    },
    screens: {
      'phone': '320px',
      'desktop': '1140px',
      'table': '768px'

    }
  },
  plugins: [
    require('tailwind-scrollbar'),
    require('tailwind-scrollbar-hide')
  ],
}
