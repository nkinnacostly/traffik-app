/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#161622",

        secondary: {
          DEFAULT:
            "linear-gradient(90deg, rgba(255,83,144,1) 0%, rgba(245,179,65,1) 49%, rgba(104,175,107,1) 100%)",
          100: "#FF9001",
          200: "#FF8E01",
        },
        black: {
          DEFAULT: "#000",
          100: "#1E1E2D",
          200: "#232533",
        },
        gray: {
          100: "#CDCDE0",
        },
        // buttonBg: {
        //   background: "rgb(255,83,144)",
        //   background:
        //     "linear-gradient(90deg, rgba(255,83,144,1) 0%, rgba(245,179,65,1) 49%, rgba(104,175,107,1) 100%)",
        // },
      },
      fontFamily: {
        nlight: ["NetflixSans-Light", "sans-serif"],
        nregular: ["NetflixSans-Regular", "sans-serif"],
        nmedium: ["NetflixSans-Medium", "sans-serif"],
        nbold: ["NetflixSans-Bold", "sans-serif"],
      },
    },
  },
  plugins: [],
};
