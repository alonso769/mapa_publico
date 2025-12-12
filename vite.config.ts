import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Determina la URL base ahora usando la variable que configuramos en Vercel (VITE_BASE_URL)
// Si VERCEL_ENV existe (en Vercel), o si VITE_BASE_URL está definido, úsalo. 
// Si no, usa el valor de GitHub Pages.
const VERCEL_OVERRIDE_URL = process.env.VITE_BASE_URL;

const BASE_URL = VERCEL_OVERRIDE_URL ? VERCEL_OVERRIDE_URL : '/mapa_publico/';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  
  base: BASE_URL, 

  build: {
    outDir: 'docs', 
  },

  server: {
    host: '0.0.0.0', 
    port: 2004,
  }
})