'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserSchema extends Schema {
  up () {
    this.table('users', (table) => {
      // alter table
      table.enu('profile_type', ['normal', 'teacher']).defaultTo('normal')
      table.string('cref')
    })
  }

  down () {
    this.table('users', (table) => {
      // reverse alternations
      table.dropColumn('profile_type')
      table.dropColumn('cref')
    })
  }
}

module.exports = UserSchema
