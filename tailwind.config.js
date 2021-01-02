module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // false was default, or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        teal: {
          2020: '#61dafb'
        },
        gray: {
          2020: '#282c34'
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
