export default [
  {
    path: '/',
    name: 'listing',
    component: require('components/Listing')
  },
  {
    path: '/projects/:id',
    name: 'project',
    component: require('components/Project')
  },
  {
    path: '*',
    redirect: '/'
  }
]
