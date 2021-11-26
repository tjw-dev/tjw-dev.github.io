module.exports = {
  purge: {
    content: ["./src/**/*.{jsx,tsx}"],
  },
  darkMode: "class",
  theme: {
    extend: {
      animation: {},
      keyframes: {},
      fontFamily: {
        title: ["'TJW Title', sans-serif"],
        "title-light": ["'TJW Title Light', sans-serif"],
      },
    },
  },
  variants: {
    extend: {
      animation: ["hover"],
    },
  },
  plugins: [],
}
