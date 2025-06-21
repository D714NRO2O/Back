import { BaseModel, column } from '@adonisjs/lucid/orm'
import { DateTime } from 'luxon'

export default class Specialist extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare nombreCompleto: string

  @column()
  declare especialidad: string

  @column()
  declare registroProfesional: string

  @column()
  declare isActive: boolean

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
