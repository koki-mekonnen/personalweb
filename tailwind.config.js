/** @type {import('tailwindcss').Config} */
module.exports = {

  darkMode: "class",
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        "nature-light": "url('/darkback.jpg')",
        "nature-dark": "url('/shortback.jpg')",
      },


      fontFamily: {
        'burtons': "burtons",
      }
    },
  },

  variants: {
    extend: {

      backgroundImage: ["dark"],
    },

  },
  plugins: [],
}
