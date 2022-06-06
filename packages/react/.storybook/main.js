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
  get builder() {
    return process.env.NODE_ENV === "production"
      ? "webpack5"
      : "@storybook/builder-vite"
  },
}

exports.typescript = {
  reactDocgen: "react-docgen-typescript",
}

exports.framework = "@storybook/react"

exports.staticDirs = ["./public"]
