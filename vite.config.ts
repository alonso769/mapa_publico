import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  
  // CAMBIO NECESARIO PARA GITHUB PAGES: Usa el nombre del repositorio
  base: '/mapa_publico/', 

  build: {
    outDir: 'docs', 
  },

  server: {
    host: '0.0.0.0', 
    port: 2004,
  }
})