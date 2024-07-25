/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#3f51b5",
        "primary-content": "#f7f8fc",
        "primary-dark": "#32408f",
        "primary-light": "#606fc7",

        secondary: "#b57c3f",
        "secondary-content": "#000000",
        "secondary-dark": "#8f6232",
        "secondary-light": "#c79560",

        background: "#15161e",
        foreground: "#20222d",
        border: "#35384b",

        copy: "#fbfbfc",
        "copy-light": "#d2d4df",
        "copy-lighter": "#969bb5",

        success: "#3fb53f",
        warning: "#b5b53f",
        error: "#b53f3f",

        "success-content": "#000000",
        "warning-content": "#000000",
        "error-content": "#fcf7f7",
      },
      fontFamily: {
        inter: ["Poppins", "sans-serif"],
      },
      animation: {
        blob: "blob 7s infinite",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
      },
    },
  },
  plugins: [],
  variants: {
    fill: ['hover', 'focus'], 
  },
};
