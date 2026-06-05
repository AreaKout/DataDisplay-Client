import type { RouteMeta, RouteRecordRaw } from 'vue-router'

export interface AppRouteMeta extends RouteMeta {
	title?: string
	requiresAuth?: boolean
	guestOnly?: boolean
}

export type AppRouteRecordRaw = RouteRecordRaw

declare module 'vue-router' {
	interface RouteMeta {
		title?: string
		requiresAuth?: boolean
		guestOnly?: boolean
	}
}
