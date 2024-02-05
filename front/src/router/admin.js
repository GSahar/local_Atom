export default [
  {
    path: 'users',
    name: 'users',
    component: () => import('@/views/admin/Users.vue'),
  },
  {
    path: 'users/new',
    name: 'createUser',
    component: () => import('@/views/admin/EditingUser.vue'),
    props: true
  },
  {
    path: 'users/:id',
    name: 'editingUser',
    component: () => import('@/views/admin/EditingUser.vue'),
    props: true
  },
  {
    path: 'roles',
    name: 'roles',
    component: () => import('@/views/admin/Roles.vue'),
  },
  {
    path: 'roles/:id',
    name: 'editingRole',
    component: () => import('@/views/admin/EditingRole.vue'),
    props: true
  },
  {
    path: 'tasks',
    name: 'tasks',
    component: () => import('@/views/admin/Tasks.vue'),
  },
  {
    path: 'tasks/:id',
    name: 'editingTask',
    component: () => import('@/views/admin/EditingTask.vue'),
    props: true
  },
]
