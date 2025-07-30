import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/E-Commerce-website/', // 👈 exactly your repo name
  plugins: [react()],
})
