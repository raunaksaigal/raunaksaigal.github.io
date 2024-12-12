/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "Saira-Stencil-One": ["Saira Stencil One", "sans-serif"],
        "Russo": ["Russo One", "sans-serif"],
        "Ultra": ["Ultra", "serif"],
       },
       backgroundColor: {
        "p1" : "#FDFCDC",
        "p2" : "#FED9B7",
        "p3" : "#F07167",
        "p4" : "#00AFB9",
        "p5" : "#0081A7",
       }
    },
  },
  plugins: [
    require('tailwindcss-3d'),
  ],
}

