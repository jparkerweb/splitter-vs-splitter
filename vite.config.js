import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: process.env.GITHUB_ACTIONS ? '/splitter-vs-splitter/' : '/',
  build: {
    outDir: process.env.GITHUB_ACTIONS ? 'dist' : 'dist-local',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html')
      }
    }
  }
}); 