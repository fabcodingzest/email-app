/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#E54065',
        secondary: '#636363',
        neutral: '#CFD2DC',
        light: '#F2F2F2',
        btn: '#E1E4EA',
      },
    },
  },
  plugins: [],
}
