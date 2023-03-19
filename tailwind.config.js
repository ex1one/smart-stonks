// tailwind.config.js
module.exports = {
  content: ["{pages,app}/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    colors: {
      white: "#fff",
      dark: {
        800: "#262840",
        900: "#060714",
      },
      gray: {
        100: "#F2F3F6",
        200: "#F1F1F6",
        500: "#DDE0E8",
        900: "#7780A1",
      },
      purple: {
        dark: "#2A27C9",
        "dark-light": "#514CFF",
        "dark-light-10": "#EAEAFA",
        "dark-light-15": "#E5E4FF",
      },
      green: "#76DECC",
      pink: "#EA6CBC",
      red: "#FB4539",
    },
    extend: {},
  },
  plugins: [],
}
