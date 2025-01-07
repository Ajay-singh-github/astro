/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#fefced",
          200: "#ffffff",
          300: "#000000",
          400: "#ff9f5f",
          500: "#ffe437",
        },
        secondary: {
          100: "#ff6000",
          200: "#ffdf3b",
          300: "#fdad0b",
          400: "#b6b6b6",
          500: "#d9d9d9",
          600: "#f0e4bc",
          700: "#ffc194",
          800: "#ffd0b3",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [import("tailwindcss-animate")],
};
