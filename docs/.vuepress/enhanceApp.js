export default({
  router,
}) => {
  router.beforeEach((to, from, next) => {
    if (to.path === '/') {
      next({
        path: '/overview/intro.html'
      })
    } else {
      next();
    }
  })
}