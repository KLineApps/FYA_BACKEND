'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SubscriptionSchema extends Schema {
  up () {
    this.create('subscriptions', (table) => {
      table.increments()
      table.integer('id_event').notNullable()
      table.integer('id_user').notNullable()
      table.enu('status_subscription', ['subscribed', 'cancelled']).defaultTo('subscribed')
      table.timestamps()
    })
  }

  down () {
    this.drop('subscriptions')
  }
}

module.exports = SubscriptionSchema
