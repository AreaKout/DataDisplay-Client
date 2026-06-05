import { computed } from 'vue'
import type { RouteRecordRaw } from 'vue-router'

import { moduleRoutes } from '@/router/routers'

export interface AppMenuItem {
  title: string
  path: string
  icon?: string
  children?: AppMenuItem[]
}

function joinPath(parentPath: string, currentPath: string): string {
  const parent = parentPath.replace(/\/$/, '')
  const current = currentPath.replace(/^\//, '')
  if (!parent) {
    return `/${current}`
  }
  return `${parent}/${current}`
}

function routeToMenuItem(route: RouteRecordRaw, basePath = ''): AppMenuItem | null {
  if (route.meta?.hiddenMenu) {
    return null
  }

  const routePath = route.path.startsWith('/') ? route.path : joinPath(basePath, route.path)

  if (!route.meta?.title) {
    return null
  }

  if (route.meta.hiddenChildrenMenu) {
    return {
      title: route.meta.title,
      icon: route.meta.icon,
      path: route.redirect ? routePath : routePath,
    }
  }

  const children = (route.children ?? [])
    .map((child) => routeToMenuItem(child, routePath))
    .filter((item): item is AppMenuItem => Boolean(item))

  return {
    title: route.meta.title,
    icon: route.meta.icon,
    path: routePath,
    children,
  }
}

export function useMenuRoutes() {
  const menuItems = computed(() =>
    moduleRoutes
      .map((route) => routeToMenuItem(route))
      .filter((item): item is AppMenuItem => Boolean(item)),
  )

  return {
    menuItems,
  }
}
