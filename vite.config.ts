import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath, URL } from "url"; // 추가

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  /* 추가: S */
  resolve: {
    alias: {
      "~apis": fileURLToPath(new URL("./src/apis", import.meta.url)),
      "~assets": fileURLToPath(new URL("./src/assets", import.meta.url)),
      "~components": fileURLToPath(
        new URL("./src/components", import.meta.url)
      ),
      "~pages": fileURLToPath(new URL("./src/pages", import.meta.url)),
      "~recoil": fileURLToPath(new URL("./src/recoil", import.meta.url)),
      "~types": fileURLToPath(new URL("./src/types", import.meta.url)),
      "~": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  // SCSS 전역 사용
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "~assets/styles/main" as *;`,
      },
    },
  },
  /* 추가: E */
});
