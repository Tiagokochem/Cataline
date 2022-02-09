import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import {schema, rules} from "@ioc:Adonis/Core/Validator";

export default class UpdateValidator {
    constructor(private ctx: HttpContextContract){}


    public schema = Schema.create({
        name: this.schema.string({ trim: true}),
        username: schema.string({ trim: true}),
        email: schema.string({ trim: true}, [rules.email()]),
        password: this.schema.string({ trim: true}, [rules.confirmed('passwordConfirmation')])
    })

public cacheKey = this.ctx.routeKey

public messages = {}

}

