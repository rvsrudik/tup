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
          700: '#5C5E83',
        },
        purple: {
          800: '#733E84',
          900: '#410D53',
        },
      },
    },
  },
  plugins: [],
};
