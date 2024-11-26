import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'root',
      redirect: to => {
        return { path: '/home'}
      },
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView
    },
    {
      path: '/ProjectPage/2022_SuEtAl_TTAC',
      name: '2022_SuEtAl_TTAC',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ProjectPage/2022_SuEtAl_TTAC.vue')
    },
    {
      path: '/404',
      name: '404',
      component: () => import('../views/404.vue')
      // component: () => import('../components/404/ghost.vue')
    },
    // {
    //   path: '/HappyNewYear',
    //   name: 'NewYear',
    //   component: () => import('../views/NewYear.vue')
    // },
    {
      path: '/:catchAll(.*)',
      name: 'error',
      redirect: '/404',
    }
  ]
})

export default router
