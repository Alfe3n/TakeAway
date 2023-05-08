/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1200px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        black: "#000000",
        white: "#ffffff",
        darkblue: "#03314B",
        lightgreen: "#E5FEF0",
        lightgrey: "rgb(241, 246, 244)",
      },
    },
  },
  // corePlugins: {
  //   preflight: false,
  // },
};
