import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm'

export default class UserKey extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public key: string

  @column()
  public user_id: number
  
}
