exports.stories = ["../lib/**/*.stories.tsx"]

exports.addons = [
  "@storybook/addon-links",
  "@storybook/addon-essentials",
  "@storybook/addon-interactions",
  "@chakra-ui/storybook-addon",
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
