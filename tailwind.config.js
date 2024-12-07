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
    },
  },
  plugins: [
    require('tailwindcss-3d'),
  ],
}

