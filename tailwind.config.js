module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // false was default, or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      colors: {
        teal: {
          2020: '#61dafb'
        },
        gray: {
          2020: '#282c34'
        },
        r_black: {
          2020: '#373940'
        },
        r_gray: {
          2020: '#63676d'
        },
        r_white: {
          2020: '#f7f7f7'
        },
        glow_green: {
          2020: '#51ff0d'
        }
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
