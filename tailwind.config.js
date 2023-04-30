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
        black3: "#666666",
        black2: "#adadad",
        black1: "#dbdbdb",
      },
    },
  },
  // corePlugins: {
  //   preflight: false,
  // },
};
