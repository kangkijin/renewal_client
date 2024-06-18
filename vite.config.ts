import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

import eslintPlugin from "vite-plugin-eslint";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), eslintPlugin()],
  define: { "process.env": {} },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
    extensions: [".js", ".json", ".jsx", ".mjs", ".ts", ".tsx", ".vue"],
  },
  optimizeDeps: {
    entries: ["./src/**/*.{vue,js,jsx,ts,tsx}"],
  },
  build: {
    // https://terser.org/docs/options/#format-options
    terserOptions: {
      format: {
        comments: false,
      },
    },
  },
  server: {
    port: 4000,
    proxy: {
      "/api": {
        target: "http://localhost:8080",
        changeOrigin: true,
        secure: false,
        ws: true,
      },
    },
  },
});
