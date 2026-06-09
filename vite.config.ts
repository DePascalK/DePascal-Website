import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import flowbiteReact from "flowbite-react/plugin/vite";
import { resolve } from "node:path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), flowbiteReact()],
  build: {
    rolldownOptions: {
      input: {
        main: resolve(import.meta.dirname, 'index.html'),
        subpage1: resolve(import.meta.dirname, 'subpage1/index.html'),
        game_page: resolve(import.meta.dirname, 'game_page/index.html')
      },
    },
  },
  server: {
    fs: {
      strict: false
    }
  },
});