import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'

export default class CreateUsers extends BaseSeeder {
  public async run () {
   await User.createMany([
     {
      name: 'Yung'
      email: 'admin@cataline.io',
      password: 'secret',
      role: 'admin'
     },
     {
       name: 'João'
      email: 'normal@cataline.io',
      password: 'secret',
      role: 'normal'
     }
   ])
  }
}
