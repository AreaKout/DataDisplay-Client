import type { Router } from 'vue-router'

import { isAuthed } from './auth'

export function setupRouterGuard(router: Router): void {
  router.beforeEach((to) => {
    const authed = isAuthed()

    if (to.meta.requiresAuth && !authed) {
      return {
        path: '/login',
        query: { redirect: to.fullPath },
      }
    }

    if (to.meta.guestOnly && authed) {
      return {
        path: '/',
      }
    }

    return true
  })
}
