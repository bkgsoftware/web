/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      primary: "#cbd5e1",
      secondary: "#64748b",
      tertiary: "#334155",
      "dark-blue": "#3D5A80",
      "light-blue": "#98C1D9",
      blue: "#13b8ff",
      "light-gray": "#E0FBFC",
      "dark-gray": "#293241",
      "red-orange": "#EE6C4D",
      white: "#F4F4F4",
      "off-white": "#cac9c9",
      black: "#202426",
      orange: "#ff5a13",
      success: "#4BB543",
      // 'green': '#32936f',
      green: "#71ff13", // triadic green to our orange
      "dark-green": "#58bf0e",
      red: "#e73415",
      linkedinblue: "#0876b3",
      transparent: "#00000000",
    },
    extend: {},
  },
  plugins: [],
};
