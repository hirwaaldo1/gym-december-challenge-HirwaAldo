/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#072140",
          50: "#14519A",
          100: "#3070B3",
        },
        grey: {
          DEFAULT: "#9A9A9A",
          50: "#83909F",
          100: "#0d1217",
          200: "##E8ECEF",
          300: "#E2E2E2",
          400: "#E8ECEF",
          500: "#727272",
        },
      },
      maxWidth: {
        "8xl": "104rem",
        "7xl": "87.5rem",
      },
      backgroundImage: {
        "header-gradient": "linear-gradient(to right, #20252A 0%, #FFF 70%)",
      },
      lineHeight: {
        1.6: "1.1666666667",
        1.625: "1.625",
        1.3: "1.3",
        1.5: "1.5",
        1.2: "1.2",
        0.76: "0.7647058824",
        1.25: "1.25",
      },
      letterSpacing: {
        0.12: "0.0125rem",
        1.2: "1.2",
      },
      fontSize: {
        2.1: "2rem",
        0.87: "0.875rem",
        2.625: "2.625rem",
        1.75: "1.75rem",
        8.125: "8.125rem",
        5.625: "5.625rem",
        1.375: "1.375rem",
      },
      padding: {
        0.12: "0.125rem",
      },
      minWidth: {
        260.25: "20.2514rem",
        608: "38rem",
      },
    },
  },
  plugins: [],
};
