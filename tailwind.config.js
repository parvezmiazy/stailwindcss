const defaultTheme = require ("tailwindcss/defaultTheme");
module.exports = {
  mode:'jit',
  purge:["./public/**/*.{html,js}"],
  darkMode:"media",
  theme: {
    screens:{
sm:'540px',
lg:'1000px',
"4k":'2560px'
    },
    fontFamily:{
    'sans':['Roboto',...defaultTheme.fontFamily.sans]
    },
    extend: {},
  },
  varients:{
    extend: {},
  },
  plugins: [],
}