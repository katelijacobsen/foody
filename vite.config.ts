import { defineConfig } from 'vite'
import svgr from "vite-plugin-svgr";
import react from '@vitejs/plugin-react'
import deno from '@deno/vite-plugin'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    deno(),
    react(),
    svgr(),
    tailwindcss(),
  ],
  optimizeDeps: {
    exclude: ["@jakobsaadbye/teilen-sql"],
  },
})
