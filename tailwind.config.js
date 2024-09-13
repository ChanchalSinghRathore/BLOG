/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'max-1226': { 'max': '1226px' }, // Custom breakpoint for max-width 1226px
        'max-826': { 'max': '826px' }, // Custom breakpoint for max-width 1226px
        'max-576': { 'max': '576px' }, // Custom breakpoint for max-width 1226px
      },
    },
  },
  plugins: [],
}