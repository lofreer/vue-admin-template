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
        path: '/about',
        component: () => import('@/views/about'),
        meta: {title: '关于'}
      }
    ]
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
