/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/index.html", "./src/components/**/*.jsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Open Sans"],
        mono: ["Space Mono"],
      },
      colors: {
        theme: {
          1: "#F1F5E7",
          2: "#92B973",
          3: "#515F46",
          4: "#207178",
        },
      },
    },
  },
  plugins: [],
};
