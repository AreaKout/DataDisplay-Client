import type { AppRouteRecordRaw } from '@/router/types'

const testRoute: AppRouteRecordRaw = {
  path: '/test',
  name: 'Test',
  component: () => import('@/views/test/index.vue'),
  meta: {
    title: '测试页',
    requiresAuth: false,
  },
}

export default testRoute
