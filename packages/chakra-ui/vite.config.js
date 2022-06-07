import path from "path"
import plugin from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import { dependencies, peerDependencies } from "./package.json"

export default defineConfig({
  plugins: [plugin({ jsxRuntime: "classic" })],
  optimizeDeps: {
    include: ["@nocker/client"],
  },
  build: {
    target: "esnext",
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
      formats: ["es", "cjs"],
      fileName: (format) => `index.${format}.js`,
    },
  },
  resolve: {
    alias: {
      "@nocker/client": "../client/lib/index.ts",
    },
  },
})
