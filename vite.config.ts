import { defineConfig } from "vite";
import VueJSX from "@vitejs/plugin-vue-jsx";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    VueJSX({
      isCustomElement: (tag) => tag.includes("wz-"),
    }),
  ],
});
