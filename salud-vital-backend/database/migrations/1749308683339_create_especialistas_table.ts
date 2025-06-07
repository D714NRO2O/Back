import { BaseSchema } from '@adonisjs/lucid/schema'

export default class Especialistas extends BaseSchema {
  protected tableName = 'especialistas'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('nombre_completo', 255).notNullable()
      table.string('especialidad', 255).notNullable()
      table.string('registro_profesional', 100).notNullable().unique()
      table.timestamp('deleted_at').nullable()
      table.timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
