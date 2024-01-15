export default [{
  path: 'my-requests',
  name: 'my-requests',
  component: () => import('@/views/requests/Index.vue'),
},
{
  path: 'incoming-requests',
  name: 'incoming-requests',
  component: () => import('@/views/requests/Incoming.vue'),
}]
