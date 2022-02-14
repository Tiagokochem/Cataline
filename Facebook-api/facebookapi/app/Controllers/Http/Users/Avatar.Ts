import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { UpdateValidator} from 'App/Validators/User/Avatar'
import Database from '@ioc:Adonis/Lucid/Database'
import  Application  from '@ioc:Adonis/Core/Application'
import fs from 'fs'


export default class UserAvatarController {

    public async update({request, auth}: HttpContextContract ) {

        const response = await Database.transaction(async(trx) => {
            const { file } = await request.validate(UpdateValidator)

            const user = auth.user!.useTransaction(trx)
    
       
            const searchPayload = { }
            const savePayload = {  
            filecategory: 'avatar' as any,
            fileName: `${new Date().getTime()}.${file.extname}`
         }
    
    
            const avatar = await user.related('avatar').firstOrCreate(searchPayload, savePayload )
    
            await file.move(Application.tmpPath('uploads'), {
                name: avatar.fileName,
                overwrite: true
            })
    
            return avatar
        })
        return response
    }
       
    public async destroy({request, auth}: HttpContextContract ) {

         await Database.transaction(async(trx) => {

            const user = auth.user!.useTransaction(trx)    
    
            const avatar = await user.related('avatar').query().where({filecategory: 'avatar'}).firstOrFail()
    
            await avatar.delete()

            fs.unlinkSync(Application.tmpPath('uploads', avatar.fileName))
          
        })
    }
}

