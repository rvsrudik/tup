/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          50: '#FDFEFF',
          100: '#F0F0F0',
          200: '#67738299',
          300: '#818283',
          800: '#1B1A1F',
          900: '#1A1C1F',
        },
        slate: {
          50: '#FBFBFE',
          200: '#F4F4FA',
          500: '#5C6C83',
          700: '#5C5E83',
        },
        blue: {
          100: '#E1EAFF',
        },
        purple: {
          200: '#8288B6',
          300: '#DAB8D5',
          800: '#733E84',
          900: '#410D53',
        },
        red: {
          100: '#F0E3EE',
        },
      },
      boxShadow: {
        md: '0px 1px 12.3px 0px #3964711C',
      },
      fontFamily: {
        montserrat: ['Montserrat'],
      },
    },
  },
  plugins: [],
};
