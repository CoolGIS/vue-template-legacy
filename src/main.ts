import './index.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { VueQueryPlugin } from '@tanstack/vue-query'

import App from './App.vue'
import router from './router'

import '@/plugins/unocss'
import { queryClient } from '@/plugins/tanstack-query'

const app = createApp(App)
// 开启性能调试
app.config.performance = true

app.use(router)
app.use(createPinia())
app.use(VueQueryPlugin, {
  queryClient
})

app.mount('#app')
