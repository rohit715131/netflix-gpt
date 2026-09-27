import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: "127.0.0.1", // 🚀 Forces Vite to use raw IP routing
    hmr: {
      host: "127.0.0.1", // ✅ Fixes the specific WebSocket failing loop error
    },
  },
});
