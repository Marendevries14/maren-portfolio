/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{razor,cshtml,html}"],
  theme: {
    extend: {
      colors: {
        cream: "#F4EFE6",
        paper: "#FBF6ED",
        cocoa: "#4F3D38",
        primary: "#B96B59",
        accent: "#D8A94B",
        sage: "#9CA077",
        blue: "#5D7C8C",
        blush: "#D7A38F"
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Cormorant Garamond", "serif"]
      }
    }
  },
  plugins: []
}