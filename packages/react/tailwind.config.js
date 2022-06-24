// eslint-disable-next-line @typescript-eslint/no-var-requires
const colors = require("tailwindcss/colors")

module.exports = {
  content: ["./.storybook/preview.tsx", "./lib/**/*.tsx", "./lib/**/*.ts"],
  theme: {
    fontFamily: {
      sans: [
        "-apple-system",
        "BlinkMacSystemFont",
        "Roboto",
        "'Segoe UI semibold'",
        "'Helvetica Neue'",
        "HelveticaNeue",
        "YuGothic",
        "'Yu Gothic'",
        "'Segoe UI'",
        "Verdana",
        "Meiryo",
        "sans-serif",
      ],
    },
    extend: {
      colors: {
        nocker: colors.blue,
      },
    },
  },
  darkMode: "class",
  corePlugins: {
    preflight: false,
  },
}
