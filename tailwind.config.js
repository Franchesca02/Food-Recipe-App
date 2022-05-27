module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
    },
    extend: {
      colors: {
        Wine: "#a80d02",
        White: "#ffffff",
        black: "#000000",
        Gray: "#cfcdcc",
        Grey: "#858585",
        Green: "#044016",
        Yellow: "#fabf41",
        Dark: "#050405",
      },
      Font: {
        Inter: "Inter",
      },
    },
  },
  plugins: [],
};
