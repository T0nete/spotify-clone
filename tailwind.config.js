/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "default-text": "#b3b3b3",
        black: {
          100: "#030303",
          200: "#050505",
          300: "#090909",
          400: "#121212",
          900: "#000000",
        },
      },
    },
  },
  plugins: [],
};
