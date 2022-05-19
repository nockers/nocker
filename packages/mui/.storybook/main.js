exports.stories = ["../src/**/*.stories.tsx"]

exports.addons = [
  "@storybook/addon-links",
  "@storybook/addon-essentials",
  "@storybook/addon-interactions",
]

exports.framework = "@storybook/react"

exports.staticDirs = ["./public"]

exports.webpackFinal = (config) => {
  delete config.resolve.alias["emotion-theming"]
  delete config.resolve.alias["@emotion/styled"]
  delete config.resolve.alias["@emotion/core"]
  return config
}
