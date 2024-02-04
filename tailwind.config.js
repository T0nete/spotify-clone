/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "default-text": "#b3b3b3",
        black: {
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
