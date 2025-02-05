/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:'class',
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {},
    colors : {
      "primary" : "#C1DCDC",
      "white": "#ffffff",
      "black":"#1E1E1E",
      "bg-dark":"#202020"
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '2.5rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
  },
  plugins: [],
}

