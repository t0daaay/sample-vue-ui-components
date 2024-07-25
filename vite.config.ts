import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

export default defineConfig({
  plugins: [vue()],
  build: {
    outDir: "./dist",
    emptyOutDir: false,
    lib: {
      entry: resolve(__dirname, "./src/index.ts"),
      name: "sample-vue-ui-components",
      fileName: "sample-vue-ui-components",
      formats: ["es", "umd"],
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
