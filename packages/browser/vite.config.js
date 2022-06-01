import path from "path"
import { defineConfig } from "vite"
import { dependencies, peerDependencies } from "./package.json"

console.log([
  ...Object.keys(peerDependencies),
  ...Object.keys(dependencies),
  "react-dom/client",
])

export default defineConfig({
  optimizeDeps: {
    include: ["@nocker/mui", "@nocker/client"],
  },
  build: {
    target: "esnext",
    sourcemap: true,
    rollupOptions: {
      external: [
        ...Object.keys(peerDependencies),
        ...Object.keys(dependencies),
        "react-dom/client",
        "@sentry/browser",
        "@sentry/minimal",
      ],
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
