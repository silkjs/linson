import path from "path";
import { defineConfig } from "rollup";
import { babel } from "@rollup/plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import json from "@rollup/plugin-json";
import postcss from "rollup-plugin-postcss";

export default defineConfig({
  input: path.resolve(__dirname, "../package/desktop.ts"),
  output: [
    // {
    //   file: "dist/bundle.iife.js",
    //   format: "iife",
    //   name: "linson",
    //   extend: true,
    // },
    {
      file: "dist/bundle.cjs.js",
      format: "cjs",
    },
    {
      file: "dist/bundle.esm.js",
      format: "esm",
    },
  ],
  plugins: [
    resolve({
      extensions: [".ts", ".tsx"],
    }),
    babel({
      extensions: [".ts", ".tsx"],
    }),
    postcss({
      extensions: [".css", ".scss"],
      extract: "index.css",
    }),
    json(),
  ],
  external: ["vue"],
});
