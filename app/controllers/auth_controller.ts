import { registerValidator } from '#validators/register'
import { loginValidator } from '#validators/login'
import User from '#models/user'
import { HttpContext } from '@adonisjs/core/http'

export default class AuthController {
  async register({ request, response }: HttpContext) {
    const payload = await request.validateUsing(registerValidator)
    const user = await User.create(payload)

    return response.created(user)
  }

  async login({ auth, request, response }: HttpContext) {
    const { email, password } = await request.validateUsing(loginValidator)
    const token = await auth.authenticate()

    return response.ok({ token })
  }

  // https://docs.adonisjs.com/guides/auth-access-tokens-guard
  async logout({ auth, response }: HttpContext) {
    await User.authTokens.delete(user)

    return response.ok({ message: 'Logged out successfully' })
  }
}
