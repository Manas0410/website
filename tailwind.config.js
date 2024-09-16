/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "text-color-1": "#021b79",
        "text-color-2": "#0575e6",
      },
    },
  },
  plugins: [],
};
