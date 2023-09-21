/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#353f4f",
        secondary: "#47b8c1",
        tertiary: "#353f4f",
        light: "#e6e2f9",
        lighter: "#f6f5fa",
        accent: "#5a56c7",
      },
      fontFamily: {
        primary: ["Plus Jakarta Sans", "sans-serif"],
      },
      backgroundImage: {
        "pricing-bg":
          "url('https://cdn.mywanderlinx.com/site/images/bg-05.jpg')",
      },
    },
  },
  plugins: [],
};
