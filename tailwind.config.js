/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        "-webkit-500": "500px",
      },
      screens: {
        "-webkit-md": {
          raw: "(min-width: 768px) and (-webkit-min-device-pixel-ratio: 2)",
        },
      },
      fontFamily: {
        "-webkit-heading": [
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica",
          "Arial",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
        ],
      },
    },
  },
  plugins: [],
};
