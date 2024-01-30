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
          '1000': '#3A3B3C',
          '1100': '#5F6162',
          '1200': '#0D0D0E',
        },
        blue: {
          ...colors.blue,
          '1000': '#415E9B',
          '1100': '#4267B2',
          '1200': '#699BFF',
          '1300': '#2374E1'
        },
        grey: {
          '1000': '#808080',
        }
      },
      spacing: {
        '250px': '250px',
        '30vw': '30vw',
        '45%': '45%',
        '1000px': '1000px',
      }
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

