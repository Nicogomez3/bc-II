/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    '../index.html',
    '../assets/**/*.{js,html}',
    '../public/**/*.{html,js}'
  ],
  safelist: [
    "bg-[url('/public/img/portfolio2.jpg')]",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
