import type { AppRouteRecordRaw } from '@/router/types'

import otherRoutes from './other'

const moduleRouteFiles = import.meta.glob<{ default: AppRouteRecordRaw | AppRouteRecordRaw[] }>(
  './modules/*.ts',
  { eager: true },
)

const moduleRoutes = Object.values(moduleRouteFiles).flatMap((mod) => {
  const routeOrRoutes = mod.default
  return Array.isArray(routeOrRoutes) ? routeOrRoutes : [routeOrRoutes]
})

export const ROOT_REDIRECT = '/test'

export const routes: AppRouteRecordRaw[] = [
  {
    path: '/',
    redirect: ROOT_REDIRECT,
  },
  ...moduleRoutes,
  ...otherRoutes,
]
