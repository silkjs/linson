import fs from "fs";
import path from "path";
import { defineConfig } from "rollup";
import { babel } from "@rollup/plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import postcss from "rollup-plugin-postcss";
import autoprefixer from "autoprefixer";

const root = path.resolve(__dirname, "../package/widgets");

const configs = fs
  .readdirSync(root)
  .filter((item) => fs.statSync(path.resolve(root, item)).isDirectory())
  .map((item) => {
    return {
      input: path.resolve(root, item, "index.ts"),
      output: path.resolve(__dirname, "../dist/esm/widgets", item, "index.js"),
    };
  });

export default defineConfig(
  configs.map((config) => ({
    external: ["vue"],
    input: config.input,
    output: [
      {
        file: config.output,
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
        plugins: [autoprefixer()],
      }),
    ],
  }))
);
