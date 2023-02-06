/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
      fontFamily: {
        sans: [
          'Poppins, sans-serif', 
        ],
      },
    extend: {
      colors: {
        sjrblue: '#2192FF',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
