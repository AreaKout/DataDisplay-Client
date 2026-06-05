import type { AppRouteRecordRaw } from '@/router/types'

const otherRoutes: AppRouteRecordRaw[] = [
	{
		path: '/login',
		name: 'Login',
		component: () => import('@/views/login/index.vue'),
		meta: {
			title: '登录',
			guestOnly: true,
		},
	},
	{
		path: '/404',
		name: 'NotFound',
		component: () => import('@/views/not-found/index.vue'),
		meta: {
			title: '页面不存在',
		},
	},
	{
		path: '/:pathMatch(.*)*',
		redirect: '/404',
	},
]

export default otherRoutes
