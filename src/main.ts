import './index.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { VueQueryPlugin } from '@tanstack/vue-query'
import App from './App.vue'
import router from './router'
import { queryClient } from '@/plugins/tanstack-query'

const app = createApp(App)

app.use(router)
app.use(createPinia())
app.use(VueQueryPlugin, {
  queryClient
})

app.mount('#app')
