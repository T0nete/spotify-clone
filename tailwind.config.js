/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        circular: ["CircularStd", "sans-serif"],
      },
      fontWeight: {
        light: 300,
        book: 400,
        medium: 500,
        bold: 700,
        black: 900,
      },
      colors: {
        "default-text": "#b3b3b3",
        black: {
          50: "#232323",
          100: "#282828",
          200: "#181818",
          300: "#121212",
          400: "#090909",
          500: "#050505",
          600: "#030303",
          900: "#000000",
        },
      },
    },
  },
  plugins: [],
};
