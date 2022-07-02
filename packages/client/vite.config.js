import path from "path"
import { defineConfig } from "vite"
import { dependencies } from "./package.json"

export default defineConfig({
  build: {
    target: "es2015",
    sourcemap: true,
    rollupOptions: {
      external: [...Object.keys(dependencies)].map((name) => new RegExp(name)),
    },
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
