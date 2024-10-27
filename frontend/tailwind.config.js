/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", //it's mean tailwind css apply this file
    "./src/**/*.{js,ts,jsx,tsx}", //also it's mean tailwind src folder all type of file & folder applied
  ],
  //define a customize color like so on this config file
  theme: {
    extend: {
      colors: {
        primary: "#FFCE1A",
        secondary: "#0D0842",
        blackBG: "#F3F3F3", 
        favorite: "#FF5841",
      },
      fontFamily: {
        primary: ["'Montserrat'", "sans-serif"], // Ensure correct formatting
        secondary: ["'Nunito Sans'", "sans-serif"],
      },
    },
  },
  plugins: [],
};
