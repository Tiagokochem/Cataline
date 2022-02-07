import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class UsersSchema extends BaseSchema {
  protected tableName = 'users'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.increments('name')
      table.increments('username').unique()
      table.string('email').notNullable()
      table.string('password', 180).notNullable()
      table.string('remember_me_token').nullable()
      table.timestamp(true)

      /**
       * Uses timestampz for PostgreSQL and DATETIME2 for MSSQL
       */
    
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
