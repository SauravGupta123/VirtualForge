// tailwind.config.js

module.exports = {
  purge: {
    content: [
      "./src/components/services/**/*.{js,jsx,ts,tsx}", // Include JS, JSX, TS, and TSX files
    ],
  },
  theme: {
    extend: {
      // Define a custom background color with a linear gradient
      backgroundImage: theme => ({
        'gradient': 'linear-gradient(180deg, #111132, #0c0c1d)',
      }),
    },
  },
  plugins: [require("daisyui")],
};
