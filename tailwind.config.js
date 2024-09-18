/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "text-color-1": "#021b79",
        "text-color-2": "#0575e6",
        "text-color-3": "#999",
        "text-color-4": "rgb(75, 80, 94)",
      },
      screens: {
        "custom-lg": "800px", // Custom media query for min-width 800px
      },
    },
  },
  plugins: [],
};
