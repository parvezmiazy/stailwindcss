module.exports = {
  mode:'jit',
  purge:["./public/**/*.{html,js}"],
  theme: {
    extend: {
    screens:{
      sm:"540px",
      lg:"1000px",
      "4k":"2560px"
    },
    },
  },
  varients:{
    extend: {},
  },
  plugins: [],
}