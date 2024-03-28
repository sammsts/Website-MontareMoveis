/** @type {import('tailwindcss').Config} */
const path = require('path');

module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  entry: './src/App.css',
  output: {
      path: path.resolve(__dirname, 'public'),
      filename: 'bundle.css'
  },
  theme: {
    extend: {
      colors: {
        'location-orange': '#b86527',
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio')
  ],
}
