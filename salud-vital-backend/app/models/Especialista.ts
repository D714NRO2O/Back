import { BaseModel, column, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
import Disponibilidad from './Disponibilidad'

export default class Especialista extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public nombre_completo: string

  @column()
  public especialidad: string

  @column()
  public registro_profesional: string

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: Date

  @column.dateTime({ autoCreate: true })
  public createdAt: Date

  @column.dateTime()
  public deletedAt?: Date | null

  @hasMany(() => Disponibilidad)
  public disponibilidades: HasMany<typeof Disponibilidad>
}
