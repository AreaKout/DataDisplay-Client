import type { RouteMeta, RouteRecordRaw } from 'vue-router'

export interface AppRouteMeta extends RouteMeta {
	title?: string
	icon?: string
	requiresAuth?: boolean
	guestOnly?: boolean
	hiddenMenu?: boolean
	hiddenChildrenMenu?: boolean
}

export type AppRouteRecordRaw = RouteRecordRaw

declare module 'vue-router' {
	interface RouteMeta {
		title?: string
		icon?: string
		requiresAuth?: boolean
		guestOnly?: boolean
		hiddenMenu?: boolean
		hiddenChildrenMenu?: boolean
	}
}
