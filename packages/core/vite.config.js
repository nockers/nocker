import path from "path"
import { defineConfig } from "vite"

export default defineConfig({
  build: {
    target: "es2015",
    sourcemap: true,
    commonjsOptions: {
      include: [/node_modules/],
    },
    lib: {
      entry: path.resolve(__dirname, "lib/index.ts"),
      name: "lib",
      fileName: (format) => `index.${format}.js`,
    },
  },
})
