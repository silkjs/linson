import { defineConfig } from "rollup";
import { babel } from "@rollup/plugin-babel";

export default defineConfig({
  input: "../package/desktop.tsx",
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
    babel({
      babelHelpers: "bundled",
      extensions: [".ts", ".tsx"],
    }),
  ],
  external: ["vue"],
});
