import User from '#models/user'
import hash from '@adonisjs/core/services/hash'

export default class UserSeeder {
  async run() {
    await User.createMany([
      {
        nombreUsuario: 'admin',
        password: await hash.make('admin123'),
      },
      {
        nombreUsuario: 'gestion',
        password: await hash.make('gestion123'),
      },
    ])
  }
}
