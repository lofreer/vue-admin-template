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
      {
        path: '/403',
        component: () => import('@/views/403.vue'),
        meta: {title: '403'}
      },
      {
        path: '/404',
        component: () => import('@/views/404.vue'),
        meta: {title: '404'}
      }
    ],
  },
  {
    path: '/login',
    component: () => import('@/views/login.vue'),
    meta: {title: '登录'}
  },
  {
    path: '*',
    redirect: '/404'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
