import '@/assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { VueQueryPlugin } from '@tanstack/vue-query'

import App from './App'
import router from './router'

import '@/plugins/unocss'
import { queryClient } from '@/plugins/tanstack-query'

const app = createApp(App)
// 开启性能调试
app.config.performance = true

app.use(router)
app.use(createPinia())
app.use(VueQueryPlugin, {
  queryClient,
  enableDevtoolsV6Plugin: true
})

app.mount('#app')
