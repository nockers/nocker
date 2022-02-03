const path = require("path")

module.exports = {
  stories: ["../src/**/*.stories.tsx"],
  addons: ["@storybook/addon-essentials"],
  framework: "@storybook/react",
  webpackFinal(config) {
    delete config.resolve.alias["emotion-theming"]
    delete config.resolve.alias["@emotion/styled"]
    delete config.resolve.alias["@emotion/core"]
    return config
  },
}
