/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        darkPrimary: "#000000",
        primaryDim: "#283141",
        secondary: "#FD6F00",
        secondaryDim: "#ffebcd",
        lightPrimary: "#EDECEC",
        lightPrimaryDim: "#F8F8F8",
        lightSecondary: "#28706C",
        lightaccent: "#ECBF49",
        lightaccent1: "#F36441",
        lightTextColor: "#445F68",
        lightFooter: "#545454",
      },

      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
