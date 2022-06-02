import path from "path"
import { defineConfig } from "vite"
import { dependencies, peerDependencies } from "./package.json"
import plugin from "@vitejs/plugin-react"

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
        /@mui/,
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
