/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors';
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        light: {
          '100':  '#c0c4c745'
        },
        black: {
          ...colors.black,
          '100': '#3A3B3C',
        },
        blue: {
          ...colors.blue,
          'facebook-100': '#415E9B',
          'facebook-150': '#4267B2',
        }
      },
    },
    container: {
      center: true,
      screens: {
        md: '1000px',
      }
     }
  },
  prefix: 'tw-',
  plugins: [],
}

