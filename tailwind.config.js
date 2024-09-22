/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#62106c',
        secondary: '#98132f',
      },
      backgroundImage: {
        'gradient-to-transparent': 'linear-gradient(to right, #742581, transparent)',
      },
    },
  },
  plugins: [],
}
