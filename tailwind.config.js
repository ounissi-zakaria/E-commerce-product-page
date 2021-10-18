const colors = require('tailwindcss/colors')

module.exports = {
  mode: "jit",
  purge: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      "sans": ["'Kumbh Sans'"],
    },
    extend: {
      colors: {
        primary: colors.orange,
        secondary: colors.blueGray,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
