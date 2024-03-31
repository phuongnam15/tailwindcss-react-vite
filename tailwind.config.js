/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        popi: "Poppins, sans-serif",
        meri: "Merriweather, serif",
      },
      height: {
        400: "400px",
        500: "500px",
        550: "550px",
        600: "600px",
      },
      fontSize: {
        22: "22px",
      },
    },
  },
  plugins: [],
};
