import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
    {
      path: '/list',
      component: './list',
    },
    {
      path: '/add',
      component: './add',
    },
  ],
  // fastRefresh: {},
  qiankun: {
    slave: {},
  },
});
