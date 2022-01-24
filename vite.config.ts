import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'http://52.80.159.11:7030'
      },
    }
  },
  resolve: {
    alias: {
      'src': path.resolve(__dirname, './src')
    }
  },
  plugins: [react()]
})
