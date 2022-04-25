import path from "path";
import { defineConfig } from "rollup";
import { babel } from "@rollup/plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import json from "@rollup/plugin-json";
import postcss from "rollup-plugin-postcss";
import autoprefixer from "autoprefixer";

export default defineConfig([
  {
    input: path.resolve(__dirname, "./package/linson.ts"),
    output: [
      {
        file: path.resolve(__dirname, "./dist/linson.iife.js"),
        format: "iife",
        name: "linson",
        globals: {
          vue: "Vue",
        },
        extend: true,
      },
      {
        file: path.resolve(__dirname, "./dist/linson.cjs.js"),
        format: "cjs",
      },
      {
        file: path.resolve(__dirname, "./dist/linson.esm.js"),
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
        plugins: [autoprefixer()],
        extensions: [".css", ".scss"],
        extract: "linson.css",
      }),
      json(),
    ],
    external: ["vue"],
  },
]);
