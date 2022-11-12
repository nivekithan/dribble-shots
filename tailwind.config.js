/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,tsx,jsx}"],
  theme: {
    extend: {
      colors: {
        "primary-blue": "#4744E9",
        "gray-dark": {
          DEFAULT : "#A4A4A8",
          200: "#7D7D82",
        },
        "gray-light": "#B0B0B0",
      },
    },
  },
  plugins: [],
};
