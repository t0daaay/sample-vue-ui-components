import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          // ダッシュを含むすべてのタグをカスタム要素として扱う
          isCustomElement: (tag) => tag.includes("-"),
        },
      },
    }),
  ],
  // ビルドプロセスに関する設定を定義
  build: {
    // types ディレクトリが削除されないように false に設定している
    emptyOutDir: false,
    lib: {
      // エントリーポイントの設定
      entry: resolve(__dirname, "./src/index.ts"),
      // ライブラリ名の設定
      name: "sample-vue-ui-components",
    },
    // モジュールバンドラー Rollup のオプションの設定
    rollupOptions: {
      // vue を外部依存関係として指定し、バンドルしないようにする（使う側で vue をインストールすることを前提とする）
      external: ["vue"],
      output: {
        globals: {
          // 使う側でインストールした vue モジュールを、このライブラリ内でグローバル変数 Vue として読み込むことを可能にする
          vue: "Vue",
        },
      },
    },
  },
});
