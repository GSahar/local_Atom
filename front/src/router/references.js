export default [
  {
    path: 'users',
    name: 'users',
    component: () => import('@/views/references/Users.vue'),
  },
  {
    path: 'users/:id',
    name: 'editingUser',
    component: () => import('@/views/references/EditingUser.vue'),
    props: true
  },
  {
    path: 'roles',
    name: 'roles',
    component: () => import('@/views/references/Roles.vue'),
  },
  {
    path: 'roles/:id',
    name: 'editingRole',
    component: () => import('@/views/references/EditingRole.vue'),
    props: true
  },
  {
    path: 'tasks',
    name: 'tasks',
    component: () => import('@/views/references/Tasks.vue'),
  },

]
