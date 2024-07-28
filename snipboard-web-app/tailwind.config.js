/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        'outline-blue': '0 0 0 3px rgba(37, 99, 235, 0.6)', // Custom shadow
      },
      fontFamily: {
        leagueSpartan: ["leagueSpartan", "sans-serif"],
      },
      colors: {
        darkBlue: "#022135",
        blue: "#7BB7E0",
        lightBlue: "#DDE9F1",
        lightRed: "#FF4C4C",
        darkRed: "#560216"
      }
    },
  },
  plugins: [],
}

