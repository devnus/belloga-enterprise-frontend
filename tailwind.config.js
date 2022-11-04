const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        mainBlue: "#33b9ff",
        mainLightBlue: "#33e3ff",
        mainGreen: "#3bff94",
        gradTop: "#33b9ff",
        gradBottom: "#a4f0ff",
        lightGray: "#f8fafc",
      },
    },
  },
  plugins: [],
};
