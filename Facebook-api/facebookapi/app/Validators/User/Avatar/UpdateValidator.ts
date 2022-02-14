import { HttpContextContract } from "@ioc:Adonis/HttpContext"
import { schema } from '@ioc:Adonis/Core/Validator'


export default class UpdateValidator {
    constructor(private ctx: HttpContextContract) {}
}

public schema = schema.create({
    file: Schema.file({
        size: '5mb',
        extnames: ['jpg', 'png', 'jpeg']
    })
})

public cacheKey = this.ctx.routeKey

public messages = {}