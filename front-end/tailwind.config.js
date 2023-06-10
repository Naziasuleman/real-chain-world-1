/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "sky-blue": "#509E82",
        blue: "#4C7489",
        slategray: {
          100: "rgba(76, 116, 137, 0.1)",
          200: "rgba(76, 116, 137, 0.8)",
        },
        gray: {
          100: "#2b2833",
          200: "rgba(43, 40, 51, 0.04)",
          300: "rgba(0, 0, 0, 0.2)",
          400: "rgba(0, 0, 0, 0.3)",
          500: "rgba(0, 0, 0, 0.5)",
          600: "rgba(43, 40, 51, 0.2)",
          700: "rgba(43, 40, 51, 0.8)",
        },
        lightseagreen: {
          100: "#509e82",
          200: "rgba(80, 158, 130, 0.5)",
          300: "rgba(80, 158, 130, 0.1)",
        },
        gainsboro: "rgba(217, 217, 217, 0)",
        black: "#000",
        lightslategray: "#6b8898",
        steelblue: "rgba(90, 165, 209, 0.1)",
        whitesmoke: "#f5f5f5",
        darkorange: "rgba(230, 137, 14, 0.1)",
        mediumpurple: "rgba(197, 133, 247, 0.1)",
        darkslategray: "rgba(34, 54, 91, 0.1)",
        offwhite: "#ede9fe",
        bgbutton: "#dcfce7",
        seagreen: "rgb(255 237 213)",
        "blue-for-button": "#4c7489",
      },
      fontFamily: {
        h2: "Montserrat",
        h6: "Montserrat",
        h4: "Inter",
        p: "Helvetica",
        "material-icons": "'Material Icons'",
      },
      borderRadius: { "3xs": "10px", "11xl": "30px", mini: "15px", xl: "20px" },
    },
    fontSize: {
      "2xl": "13px",
      "3xl": "16px",
      "4xl": "20px",
      "1xl": "22px",
      "5xl": "24px",
      "7xl": "26px",
      "9xl": "28px",
      "11xl": "30px",
      "13xl": "32px",
      "17xl": "36px",
      "21xl": "40px",
      "23xl": "44px",
      "27xl": "46px",
      "29xl": "48px",
      "32xl": "54px",
      "39xl": "58px",
    },
  },
  plugins: [],
};
