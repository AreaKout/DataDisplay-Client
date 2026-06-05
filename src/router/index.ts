import { createRouter, createWebHistory } from 'vue-router'

import { setupRouterGuard } from './guard'
import { routes } from './routers'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

setupRouterGuard(router)

export default router
