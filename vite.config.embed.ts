import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue(), dts()],
  build: {
    lib: {
      entry: 'src/embed.ts',
      formats: ['umd'],
      name: "job",
    },
    rollupOptions: {
      output: {
        dir: 'dist-embed',
        assetFileNames: '[name][extname]',
        chunkFileNames: '[chunks]/[name].[hash].js',
        entryFileNames: 'jobs.js',
      },
    },
  },
  define: {
    "process.env": {}
  }
})