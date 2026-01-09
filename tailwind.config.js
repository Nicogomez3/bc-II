/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
     "./index.html",
    "./assets/**/*.{js,html}",
    "./src/**/*.{html,js}",
  ],
  safelist: [
    "bg-[url('/public/img/portfolio2.jpg')]",
  ],

  theme: {
    screens: {
      'lg2': '900px',
    },
    extend: {
        fontFamily: {
        lora: ['Lora', 'serif'],
    },
    },
  },
  plugins: [],
};
