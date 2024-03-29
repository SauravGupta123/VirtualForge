import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0",
  },
  root: './',
  build: {
      outDir: 'dist',
  },
  publicDir: 'assets'
})
