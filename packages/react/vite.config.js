import path from "path"
import plugin from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import { dependencies, peerDependencies } from "./package.json"

export default defineConfig({
  plugins: [plugin({ jsxRuntime: "classic" })],
  build: {
    target: "esnext",
    sourcemap: true,
    rollupOptions: {
      external: [
        ...Object.keys(peerDependencies),
        ...Object.keys(dependencies),
        /react-icons/,
      ],
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
  /**
   * config for `vite build`
   * Failed to resolve entry for package "@nocker/client".
   */
  resolve: {
    alias: {
      "@nocker/client": "../client/lib/index.ts",
      "@nocker/core": "../core/lib/index.ts",
    },
  },
})
