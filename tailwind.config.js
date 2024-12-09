/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'hero-color': '#08472b',
        brand: {
          1: "#17be75", //DONE
          2: "#08472b", //DONE
          3: "#9da2a7",
          4: "#b09a86",
          5: "#37AC1A",
          6: "#e5cd8a",
        },
      },
      container: {
        center: true,
        padding: "2rem",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1280px",
      },
    },
  },
  plugins: [],
};
