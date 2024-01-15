export default [
  {
    path: 'users',
    name: 'users',
    component: () => import('@/views/references/Users.vue'),
  },
  {
    path: 'roles',
    name: 'roles',
    component: () => import('@/views/references/Roles.vue'),
  },
  {
    path: 'tasks',
    name: 'tasks',
    component: () => import('@/views/references/Tasks.vue'),
  }
]
