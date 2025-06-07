import { BaseModel, column, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm'
import Especialista from './Especialista'

export default class Disponibilidad extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public especialistaId: number

  @column()
  public dia_semana: 'lunes' | 'martes' | 'miércoles' | 'jueves' | 'viernes' | 'sábado' | 'domingo'

  @column()
  public hora_inicio: string

  @column()
  public hora_fin: string

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: Date

  @column.dateTime({ autoCreate: true })
  public createdAt: Date

  @belongsTo(() => Especialista)
  public especialista: BelongsTo<typeof Especialista>
}
