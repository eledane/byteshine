import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    // Split vendor chunks so React is cached separately from your app code
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
        },
      },
    },
    // Inline tiny assets instead of extra HTTP requests
    assetsInlineLimit: 4096,
    // Generate source maps only in dev
    sourcemap: false,
    cssCodeSplit: true,
  },
});
