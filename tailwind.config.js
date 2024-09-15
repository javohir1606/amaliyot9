/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        white: "var(--white-bg)",
      },
      container: {
        center: true,
        screens: {
          lg: "1050px",
        },
      },
    },
  },
  plugins: [],
};
