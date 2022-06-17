import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Combo extends BaseModel {
  @column({ isPrimary: true })
  public id: number
  @column()
  public produto1:string
  @column()
  public produto2:string
  @column()
  public produto3:string
  @column()
  public produto4:string
  @column()
  public valor:number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
