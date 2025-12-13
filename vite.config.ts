import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Vercel define automáticamente la variable 'VERCEL' como '1' durante el build.
const isVercel = process.env.VERCEL === '1';

// Lógica automática:
// - Si es Vercel: usa la raíz '/'
// - Si NO es Vercel (es GitHub Pages o Local): usa '/mapa_publico/'
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