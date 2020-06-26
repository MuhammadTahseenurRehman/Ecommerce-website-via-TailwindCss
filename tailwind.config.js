module.exports = {
  purge: [],
  theme: {
    fontFamily: {
      gotham: ["Gotham Pro , sans-serif"],
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      xxl: "1590px",
    },
    colors: {
      white: "#ffffff",

      orange: {
        100: "#feedd3",
        200: "#fe7865",
        300: "#e6604d",
        400: "#f55c46",
      },

      blue: {
        100: "#f5f8fc",
        200: "#efedfe",
        300: "#5bd5e6",
      },

      green: {
        100: "#fffbf8",
        200: "#e8fbf7",
        300: "#fbe6b0",
      },

      gray: {
        100: "#ececee",
        200: "#dfdafe",
        300: "#83838b",
      },

      pink: {
        100: "#fedae8",
      },

      black: {
        100: "#2c2e3f",
        200: "#141517",
        300: "#2c3e3f",
        400: "#2d2539",
      },

      yellow: {
        100: "#fec365",
      },
    },
    maxHeight: {
      "0": "0",
      "1/4": "25%",
      "1/2": "50%",
      "3/4": "75%",
      full: "100%",
      "176": "44rem",
    },
    extend: {
      fontSize: {
        "8xl": "6rem",
      },
      spacing: {
        "80" : "20rem",
        "96" : "24rem",
        "112": "28rem",
        "144": "36rem",
        "176": "44rem",
      },
    },
  },
  variants: {},
  plugins: [],
};
