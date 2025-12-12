import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Determina la URL base automáticamente
// VERCEL_ENV existe en Vercel, por lo tanto, usa '/'. En otro lado, usa '/mapa_publico/'.
const isVercel = process.env.VERCEL_ENV;
const BASE_URL = isVercel ? '/' : '/mapa_publico/';

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