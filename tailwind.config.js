module.exports = {
  darkMode: "class",
  content: ["src/ui/**/*.tsx", "src/pages/*.tsx", "src/pages/**/**/*.tsx"],
  theme: {
    extend: {}
  },
  plugins: [require("@tailwindcss/forms")]
};
