import { fileURLToPath, URL } from 'node:url'
import unocss from 'unocss/vite'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),unocss({
    configFile: fileURLToPath(new URL('../../unocss.config.ts', import.meta.url)),
  })],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
