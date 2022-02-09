import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import {schema, rules} from "@ioc:Adonis/Core/Validator";

export default class UpdateValidator {
    constructor(private ctx: HttpContextContract){}


    public schema = Schema.create({
        key: schema.string({ trim: true}, [rules.exists({ table 'user_keys', column: 'key'})]),
        name: this.schema.string({ trim: true}),
        password: this.schema.string({ trim: true}, [rules.confirmed('passwordConfirmation')])
    })

public cacheKey = this.ctx.routeKey

public messages = {}

}

