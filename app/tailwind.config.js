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
        },
        slate: {
          50: '#FBFBFE',
          200: '#F4F4FA',
          700: '#5C5E83',
        },
        blue: {
          100: '#E1EAFF',
        },
        purple: {
          300: '#DAB8D5',
          800: '#733E84',
          900: '#410D53',
        },
        red: {
          100: '#F0E3EE',
        },
      },
    },
  },
  plugins: [],
};
