import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

export default defineConfig({
  plugins: [vue()],
  build: {
    emptyOutDir: false, // types ディレクトリが削除されないように false に設定している
    lib: {
      entry: resolve(__dirname, "./src/index.ts"),
      name: "sample-vue-ui-components",
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
  },
});
