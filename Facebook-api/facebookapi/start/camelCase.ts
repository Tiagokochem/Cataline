import { BaseModel } from '@ioc:Adonis/Lucid/Orm'
import { BaseModel } from '@ioc:Adonis/Core/Helpers'

BaseModel.namingStrategy.serializedName = (_model, key) => {
    return String.camelCase(key)
}


