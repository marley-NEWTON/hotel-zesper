import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/hotel-zesper/' // ⚠️ hakikisha ni jina sahihi la repo yako
})