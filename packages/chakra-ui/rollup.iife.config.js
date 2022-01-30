import commonjs from "@rollup/plugin-commonjs"
import resolve from "@rollup/plugin-node-resolve"
import typescript from "@rollup/plugin-typescript"
import replace from "rollup-plugin-replace"
import { terser } from "rollup-plugin-terser"

export default [
  {
    input: "src/index.ts",
    output: {
      file: "public/main.js",
      format: "iife",
      name: "knockr",
      sourcemap: false,
    },
    plugins: [
      resolve(),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
      replace({ "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV) }),
      terser(),
    ],
  },
]
