import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: 'src/lib.ts',
      formats: ['es'],
      name: "job",
    },
    rollupOptions: {
      output: {
        assetFileNames: '[name][extname]',
        chunkFileNames: '[chunks]/[name].[hash].js',
        entryFileNames: 'index.js',
        // globals: {
        //   vue: "Vue"
        // }
      },
      external: ['vue', 'moment'],
    },
  },
})
