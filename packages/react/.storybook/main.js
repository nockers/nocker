exports.stories = ["../lib"]

exports.addons = [
  "@storybook/addon-links",
  "@storybook/addon-essentials",
  "@storybook/addon-interactions",
  "@storybook/addon-postcss",
]

exports.features = {
  storyStoreV7: true,
}

exports.core = {
  get builder() {
    return process.env.NODE_ENV === "production"
      ? "webpack5"
      : "@storybook/builder-vite"
  },
}

exports.framework = "@storybook/react"
