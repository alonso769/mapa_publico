import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Determina la URL base automáticamente
// Si estamos en VERCEL, usa '/'. Si no (como en GitHub Pages), usa el nombre del repositorio.
const isVercel = process.env.VERCEL_ENV;
const BASE_URL = isVercel ? '/' : '/mapa_publico/';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  
  // Usamos la variable dinámica que cambia según el entorno
  base: BASE_URL, 

  build: {
    outDir: 'docs', 
  },

  server: {
    host: '0.0.0.0', 
    port: 2004,
  }
})