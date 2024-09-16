/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        navyblue: '#223B58',
        primary: '#3E7FB9',
      },
      fontFamily: {
        'cs-canela': ['CS Canela', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
