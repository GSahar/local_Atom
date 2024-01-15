// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path:'/',
    redirect: '/idm'
  },
  {

        path: '/idm',
        name: 'Index',
        component: () => import('@/views/Index.vue'),
        children: [
          {
            path: 'my-requests',
            name: 'my-requests',
            component: () => import('@/views/requests/Index.vue'),
          },
          {
            path: '/incoming-requests',
            name: 'incoming-requests',
            component: () => import('@/views/requests/Incoming.vue'),
          }
        ]

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
