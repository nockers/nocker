import path from "path"
import { defineConfig } from "vite"

export default defineConfig({
  build: {
    sourcemap: false,
    commonjsOptions: {
      include: [/node_modules/],
    },
    lib: {
      name: "nock",
      entry: path.resolve(__dirname, "lib/index.ts"),
      formats: ["iife"],
      fileName: "index",
    },
  },
  resolve: {
    alias: {
      "@nocker/browser": "../browser/lib/index.ts",
      "@nocker/client": "../client/lib/index.ts",
      "@nocker/core": "../core/lib/index.ts",
      "@nocker/mui": "../mui/lib/index.ts",
      "@nocker/react": "../react/lib/index.ts",
    },
  },
  define: {
    "process.env": process.env,
  },
})
