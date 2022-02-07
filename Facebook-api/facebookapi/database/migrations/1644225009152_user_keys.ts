import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class UserKeys extends BaseSchema {
  protected tableName = 'user_keys'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table
        .integer('user_id')
        .unsigned()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
    
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
