import type { AppRouteRecordRaw } from '@/router/types'

const testRoute: AppRouteRecordRaw = {
  path: 'test',
  name: 'TestModule',
  component: () => import('@/layout/route-container.vue'),
  redirect: '/test/overview',
  meta: {
    title: '测试模块',
    icon: 'Test',
    requiresAuth: false,
  },
  children: [
    {
      path: 'overview',
      name: 'TestOverview',
      component: () => import('@/views/test/index.vue'),
      meta: {
        title: '概览',
        icon: 'Overview',
      },
    },
    {
      path: 'report',
      name: 'TestReport',
      component: () => import('@/views/test/report.vue'),
      meta: {
        title: '报表',
        icon: 'Report',
      },
    },
  ],
}

export default testRoute
