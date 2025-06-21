import { BaseSchema } from '@adonisjs/lucid/schema'

export default class Specialists extends BaseSchema {
  protected tableName = 'specialists'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('nombre_completo').notNullable()
      table.string('especialidad').notNullable()
      table.string('registro_profesional').notNullable().unique()
      table.boolean('is_active').defaultTo(true)
      table.timestamps(true, true)
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
