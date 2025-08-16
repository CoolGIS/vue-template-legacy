import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import legacy from '@vitejs/plugin-legacy'
import vueDevTools from 'vite-plugin-vue-devtools'
import { analyzer } from 'vite-bundle-analyzer'

// https://vitejs.dev/config/
export default defineConfig({
  base: '',
  plugins: [
    vue(),
    vueJsx(),
    legacy({
      // legacy 兼容性问题配置
      polyfills: false,
      renderLegacyChunks: false
      // widely-available 兼容性问题配置，需同时配置
      // modernTargets:'edge>=79, firefox>=67, chrome>=64, safari>=12, chromeAndroid>=64, iOS>=12',
      // modernPolyfills: true
    }),
    vueDevTools(),
    analyzer({ analyzerMode: 'static' })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  define: {
    // 去除选项式API
    __VUE_OPTIONS_API__: false
  }
})
