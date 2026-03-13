import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
  base:"FEDF-LAB-EXAM-2500030484",
  server:{
    port:2009
  }
})
