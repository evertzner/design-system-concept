/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./lib/**/*.{html,js,svelte,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        sustainability: {
          100: '#d7ecda',
          200: '#b0d9b5',
          300: '#88c691',
          400: '#61b36c',
          500: '#39a047',
          600: '#2e8039',
          700: '#22602b',
          800: '#17401c',
          900: '#0b200e'
        },
        test: '#17ac98'
      }
    }
  },
  plugins: []
};
