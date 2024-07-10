/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {},
    colors : {
      "primary" : "#C1DCDC",
      "white": "#ffffff",
      "black":"#1E1E1E",
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

