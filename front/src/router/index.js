// Composables
import { createRouter, createWebHistory } from 'vue-router'
import requests from './requests'
import admin from './admin'

var childrenRoutes = [
  requests,
  admin,
  {
    path: '/personal',
    name: 'Personal',
    component: () => import('@/views/personal/Index.vue'),
  }
];

const routes = [
  {
    path:'/',
    redirect: '/idm'
  },
  {

        path: '/idm',
        name: 'Index',
        component: () => import('@/views/Index.vue'),
        children: childrenRoutes.flat()

  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/auth/Login.vue'),
  },
  {
    path: '/change-password',
    name: 'change-password',
    component: () => import('@/views/auth/Change.vue'),
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
