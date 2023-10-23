/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      grotesk: ["Space Grotesk", "sans-serif"],
    },
  },
  plugins: [],
  daisyui: {
    themes: [
      "black",
      {
        mytheme: {
          primary: "#000000",
          secondary: "#000000",
          accent: "#000000",
          neutral: "#000000",
          "base-100": "#000000",
          info: "#FFFFFFF",
          success: "#36d399",
          warning: "#fbbd23",
          error: "#f87272",
        },
      },
    ],
  },
};
