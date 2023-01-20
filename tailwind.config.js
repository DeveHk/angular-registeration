/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      dropShadow: {
        'gl' : '#93362F 1px 0 5px'
      } 
    },  },
  plugins: [],
}