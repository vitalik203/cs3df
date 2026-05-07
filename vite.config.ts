import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite"; // Оновлено тут

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: true, // важливо
    allowedHosts: [".ngrok-free.app", ".ngrok-free.dev"],
  },
});
