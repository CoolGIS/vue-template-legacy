import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/pages/Home'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/pages/About')
    },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: () => import('@/pages/NotFound.vue') }
  ]
})

export default router
