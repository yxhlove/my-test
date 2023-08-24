import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "/assets": resolve(__dirname, "src/assets"),
      "@": resolve(__dirname, "./src"),
    },
  },
  plugins: [react()],
});
