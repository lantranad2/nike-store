/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./sections/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-poppins)"],
      },
      screens: {
        xs: { max: "575px" },
        "xs-2": { max: "480px" },
        "xs-3": { max: "375px" },
        "xs-4": { max: "320px" },
        "xs-5": { max: "280px" },
      },
    },
  },
  plugins: [],
};
