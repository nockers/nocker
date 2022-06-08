exports.stories = ["../lib/**/*.stories.tsx"]

exports.addons = [
  "@storybook/addon-links",
  "@storybook/addon-essentials",
  "@storybook/addon-interactions",
  "storybook-tailwind-dark-mode",
  {
    name: "@storybook/addon-postcss",
    options: {
      postcssLoaderOptions: {
        implementation: require("postcss"),
      },
    },
  },
]

exports.features = {
  storyStoreV7: true,
}

exports.core = {
  builder: "webpack5",
}

// exports.core = {
//   builder: "@storybook/builder-vite"
// }

exports.framework = "@storybook/react"

exports.staticDirs = ["./public"]
