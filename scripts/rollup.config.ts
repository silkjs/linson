import path from "path";
import { defineConfig } from "rollup";
import { babel } from "@rollup/plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import json from "@rollup/plugin-json";
import postcss from "rollup-plugin-postcss";

export default defineConfig([
  {
    input: path.resolve(__dirname, "../package/linson.ts"),
    output: [
      {
        file: "dist/linson.iife.js",
        format: "iife",
        name: "linson",
        globals: {
          vue: "Vue",
        },
        extend: true,
      },
      {
        file: "dist/linson.cjs.js",
        format: "cjs",
      },
      {
        file: "dist/linson.esm.js",
        format: "esm",
      },
    ],
    plugins: [
      resolve({
        extensions: [".ts", ".tsx"],
      }),
      babel({
        babelHelpers: "bundled",
        extensions: [".ts", ".tsx"],
      }),
      postcss({
        extensions: [".css", ".scss"],
        extract: "linson.css",
      }),
      json(),
    ],
    external: ["vue"],
  },
]);
