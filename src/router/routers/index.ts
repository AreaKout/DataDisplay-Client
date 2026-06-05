import type { AppRouteRecordRaw } from '@/router/types'

import otherRoutes from './other'

const moduleRouteFiles = import.meta.glob<{ default: AppRouteRecordRaw | AppRouteRecordRaw[] }>(
  './modules/*.ts',
  { eager: true },
)

export const moduleRoutes = Object.values(moduleRouteFiles).flatMap((mod) => {
  const routeOrRoutes = mod.default
  return Array.isArray(routeOrRoutes) ? routeOrRoutes : [routeOrRoutes]
})

export const ROOT_REDIRECT = '/test/overview'

const layoutRoute: AppRouteRecordRaw = {
  path: '/',
  component: () => import('@/layout/app-layout.vue'),
  redirect: ROOT_REDIRECT,
  children: moduleRoutes,
}

export const routes: AppRouteRecordRaw[] = [
  layoutRoute,
  ...otherRoutes,
]
