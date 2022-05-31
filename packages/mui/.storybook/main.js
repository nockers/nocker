exports.stories = ["../src/**/*.stories.tsx"]

exports.addons = [
  "@storybook/addon-links",
  "@storybook/addon-essentials",
  "@storybook/addon-interactions",
]

exports.features = {
  storyStoreV7: true,
}

exports.core = {
  builder: "@storybook/builder-vite",
}

exports.framework = "@storybook/react"

exports.staticDirs = ["./public"]
