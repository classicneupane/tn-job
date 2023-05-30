import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue(), dts()],
  build: {
    lib: {
      entry: 'src/lib/index.ts',
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
