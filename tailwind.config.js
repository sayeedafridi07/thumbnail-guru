/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#03A47C",
        secondary: "#FFFCF0",
        metal: "#1A1A1A",
        metal2: "#515151",
        input: "#4E5562",
      },
      fontFamily: {
        jost: ["Jost", "sans-serif"],
        lato: ["Lato", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        quickSand: ["Quicksand", "sans-serif"],
      },
    },
  },
  plugins: [],
};
