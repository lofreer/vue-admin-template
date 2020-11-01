import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('@/layout'),
    redirect: '/home',
    children: [
      {
        path: '/home',
        component: () => import('@/views/home'),
        meta: {title: '首页'}
      },
      {
        path: '/page1',
        component: () => import('@/views/catalog/page1'),
        meta: {title: '页面一'}
      },
      {
        path: '/page2',
        component: () => import('@/views/catalog/page2'),
        meta: {title: '页面二'}
      },
    ]
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
