/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "200px",
      md: "540px",
      mmd: "767px",
      lg: "1080px",
    },
    extend: {
      colors: {
        "--background": "#f0eadd",
        "--body": "#333",
      },
    },
  },
  plugins: [],
};
