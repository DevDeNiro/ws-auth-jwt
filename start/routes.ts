import router from '@adonisjs/core/services/router'

router
  .group(() => {
    router.post('/register', 'AuthController.register')
    router.post('/login', 'AuthController.login')
    router.post('/logout', 'AuthController.logout')
  })
  .prefix('/auth')

router.get('/', async () => {
  return {
    message: 'Hello world',
  }
})
