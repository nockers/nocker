exports.stories = ["../lib/**/*.stories.tsx"]

exports.addons = [
  "@storybook/addon-links",
  "@storybook/addon-essentials",
  "@storybook/addon-interactions",
]

exports.features = {
  storyStoreV7: true,
}

exports.core = {
  get builder() {
    return process.env.NODE_ENV === "development"
      ? "@storybook/builder-vite"
      : "webpack5"
  },
}

// exports.core = {
//   builder: "@storybook/builder-vite"
// }

exports.framework = "@storybook/react"

exports.staticDirs = ["./public"]

/**
 * ModuleParseError: Module parse failed: The keyword 'protected' is reserved (36:20)
 */
// exports.webpackFinal = async (config) => {
//   console.log(config.resolve)
//   console.log(path.resolve("../client/lib/index.ts"))
//   config.resolve.alias["@nocker/client"] = path.resolve(
//     "../client/lib/index.ts",
//   )
//   return config
// }
