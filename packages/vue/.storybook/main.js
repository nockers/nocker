exports.stories = ["../lib/**/*.stories.ts"]

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

// exports.core = {
//   builder: "webpack5",
// }

exports.core = {
  get builder() {
    return process.env.NODE_ENV === "development"
      ? "@storybook/builder-vite"
      : "webpack5"
  },
}

exports.framework = "@storybook/vue3"
