/** @type {import('tailwindcss').Config} */
const path = require('path');

module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  entry: './src/App.css',
  output: {
      path: path.resolve(__dirname),
      filename: 'bundle.css'
  },
  theme: {
    extend: {},
  },
  plugins: [],
}

