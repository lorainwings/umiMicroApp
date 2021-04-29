import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      path: '/',
      component: '@/pages/index',
      routes: [{ path: '/app', microApp: 'app' }],
    },
  ],
  qiankun: {
    master: {
      apps: [
        {
          name: 'app',
          entry: 'http://localhost:8000',
        },
      ],
    },
  },
  // fastRefresh: {},
});
