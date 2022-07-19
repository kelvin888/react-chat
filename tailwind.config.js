/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      purple: {
        900: "#7358f3",
      },
      gray: {
        300: "#e6e6e6",
        600: "#cccccc",
        700: "#120b0b",
      },
      white: "#ffffff",
      black: "#000000",
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
