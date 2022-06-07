exports.stories = ["../lib"]

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
  builder: "webpack5",
}

// exports.core = {
//   builder: "@storybook/builder-vite"
// }

exports.typescript = {
  reactDocgen: "react-docgen",
}

exports.framework = "@storybook/react"
