'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EventSchema extends Schema {
  up () {
    this.create('events', (table) => {
      table.increments()
      table.string('name').notNullable().unique()
      table.text('desc')
      table.timestamp('date').notNullable()
      table.string('duration')
      table.integer('state')
      table.integer('subscribers')
      table.integer('max_subscribers')
      table.integer('min_subscribers')
      table.string('location')
      table.string('lat')
      table.string('long')
      table.integer('user_creator')
      table.timestamps()
    })
  }

  down () {
    this.drop('events')
  }
}

module.exports = EventSchema
