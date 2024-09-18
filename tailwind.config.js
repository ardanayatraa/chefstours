/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",  
    "./dist/**/*.{html,js}"  
  ],
  theme: {
    extend: {
      colors: {
        navyblue: '#223B58',
        primary: '#3E7FB9',
      },
      fontFamily: {
        'cs-canela': ['CS Canela', 'sans-serif'],
        'general-sans': ['General Sans', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      screens: {
        xs: "480px",
        sm: "600px",
        md: "768px", 
        lg: "960px",
        xl: "1280px",
        "2xl": "1440px",
      },
      plugins: [
        require('flowbite/plugin')
    ]

    },
  },
  plugins: [],
}
