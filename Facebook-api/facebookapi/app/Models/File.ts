import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'
import { FileCategory } from 'App/Utils/fileCategories'


export default class File extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public filecategory: FileCategory

  @column()
  public fileName: number

  @column()
  public ownerId: 'number'


}
