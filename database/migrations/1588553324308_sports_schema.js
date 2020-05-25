'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SportsSchema extends Schema {
  up () {
    this.create('sports', (table) => {
      table.increments()
      table.string('desc_sport')
      table.string('address')
      table.string('lat')
      table.string('long')
      table.string('image')
      table.string('price')
      table.timestamps()
    })
  }

  down () {
    this.drop('sports')
  }
}

module.exports = SportsSchema
