'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EventSchema extends Schema {
  up () {
    this.create('events', (table) => {
      table.increments()
      table.string('name').notNullable().unique()
      table.text('desc')
      table.timestamp('date').defaultTo(this.fn.now())
      table.string('duration')
      table.integer('state').notNullable()
      table.integer('subscribers')
      table.integer('max_subscribers').notNullable()
      table.integer('min_subscribers').notNullable()
      table.string('location').notNullable()
      table.string('lat').notNullable()
      table.string('long').notNullable()
      table.integer('user_creator').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('events')
  }
}

module.exports = EventSchema
