import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  root: '.', // Set root to project directory
  build: {
    rollupOptions: {
      input: 'index.html', // Path to your index.html
    },
  },
})
