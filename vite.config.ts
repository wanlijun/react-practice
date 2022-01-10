import { defineConfig } from 'vite'
import PontPlugin from './pont.plugin';
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), PontPlugin()]
})
