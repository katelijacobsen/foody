/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    extend: {
      colors: {
        primary: "#22223B",
        secondary: "#C9ADA7",
        tertiary: "#4A4E69",
        ourWhite: "#F2E9E4",
      }
    },
  },
  plugins: [],
};
