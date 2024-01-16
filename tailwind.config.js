const {nextui} = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [nextui({
    themes: {
      "light" : {
        extend: "light",
        colors: {
          background: "#FFF9FC",
          secondary: "#E5E7EB"
        }
      },
      "dark": {
        extend: "dark",
        colors: {
          background: "#000000",
          secondary: "#2F3336"
        }
      }
    }
  })],
}

