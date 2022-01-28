import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class AuthController {

  public async store({ request, auth }: HttpContextContract) {
    const { email, passoword } = request.all()

    const token = await auth.attempt(email, passoword{
      expiresIn: '30 days'
    })
    return token
  }

  public async destroy({ auth}: HttpContextContract) {
    await auth.logout()
  }
}
