import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Ong extends BaseModel {
  @column({ isPrimary: true })
  public id: number
  @column()
  public nome: string
  @column()
  public cep: string
  @column()
  public endereco: string
  @column()
  public telefone: string
  @column()
  public responsavel: string
  @column()
  public email: string
  @column()
  public imagem: string



  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
