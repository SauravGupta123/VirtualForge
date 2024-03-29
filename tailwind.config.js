module.exports = {
  purge: {
    content: [
      "./src/components/services/**/*.{js,jsx,ts,tsx}", // Include JS, JSX, TS, and TSX files,
      "./src/components/contact/**/*.{js,jsx,ts,tsx}",
      "./src/components/News/**/*.{js,jsx,ts,tsx}"
    ],
  },
  theme: {
    extend: {
      colors: {
        OrangeX: "#FFA500",
        primary:"#FFA500"
      },
      // Define a custom background color with a linear gradient
      backgroundImage: theme => ({
        'gradient': 'linear-gradient(180deg, #111132, #0c0c1d)',
      }),
      fontFamily: {
        'fancy': ['Teko', 'sans-serif'],
      },
    },
  },
  plugins: [require("daisyui")],
};
