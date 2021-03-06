import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      // ↓ template内でassetを参照するとビルド前は表示されない
      '@': resolve(__dirname, 'src'),
      '@@': resolve(__dirname, '.'),
      // ↓ template内でassetを参照するとビルドが通らない
      '~': resolve(__dirname, 'src'),
      '~~': resolve(__dirname, '.'),
    },
  },
  plugins: [vue()],
})
