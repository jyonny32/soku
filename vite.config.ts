import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',            // Root path for Vercel deployment
  build: {
    outDir: 'dist',     // Default output folder for Vercel
    emptyOutDir: true,  // Clears the folder before building
  },
  server: {
    port: 3000,         // Local dev port
    open: true          // Automatically opens browser on dev
  }
})
git add vite.config.ts
git commit -m "Vercel: set base=/ and outDir=dist"
git push
