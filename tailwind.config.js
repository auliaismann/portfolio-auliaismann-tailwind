/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#DBB5B5",
        dark: "#987070",
        optional: "#C39898",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
