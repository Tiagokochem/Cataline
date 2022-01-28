import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'


export default class Acl {
  public async handle({}: HttpContextContract, next: () => Promise<void>, allowedRoles: string[] ) {

    if (!allowedRoles.includes(user.role)){
      return response.unauthorized({error: {message: 'acess denied'}})
    }

    await next()
  }
}
