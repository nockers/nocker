import path from "path"
import plugin from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import { dependencies, peerDependencies } from "./package.json"

export default defineConfig({
  plugins: [plugin({ jsxRuntime: "classic" })],
  build: {
    target: "es2015",
    sourcemap: true,
    rollupOptions: {
      external: [
        ...Object.keys(peerDependencies),
        ...Object.keys(dependencies),
      ].map((name) => new RegExp(name)),
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
  resolve: {
    alias: {
      "@nocker/client": "../client/lib/index.ts",
      "@nocker/core": "../core/lib/index.ts",
      "@nocker/react": "../react/lib/index.ts",
    },
  },
})
