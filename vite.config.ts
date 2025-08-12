import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/soku/',
  plugins: [react()],
  build: { outDir: 'dist' }
})
