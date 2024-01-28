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
        },
        blue: {
          ...colors.blue,
          '1000': '#415E9B',
          '1100': '#4267B2',
        }
      },
      spacing: {
        '250px': '250px',
        '30vw': '30vw',
        '45%': '45%'
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

