// eslint-disable-next-line @typescript-eslint/no-var-requires
const colors = require("tailwindcss/colors")

module.exports = {
  content: ["./.storybook/preview.tsx", "./lib/**/*.tsx", "./lib/**/*.ts"],
  theme: {
    fontFamily: {
      sans: ["'M PLUS 1p'"],
      serif: ["'M PLUS 1p'", "sans-serif"],
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
