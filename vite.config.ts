import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { viteStaticCopy } from 'vite-plugin-static-copy'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    assetsDir: 'assets',
    rollupOptions: {
      input: {
        popup: 'src/popup/popup.html',
      },
      output: {
        entryFileNames: '[name]/index-[hash].js',
        assetFileNames: '[name]/index-[hash][extname]',
      },
    },
  },
  plugins: [
    vue(),
    viteStaticCopy({
      targets: [{ src: 'manifest.json', dest: '' }],
    }),
  ],
})
