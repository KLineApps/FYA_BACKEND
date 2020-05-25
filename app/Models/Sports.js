'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

const Env = use('Env')

class Sports extends Model {
  static get computed () {
    return ['url_image']
  }

  getUrlImage ({ image }) {
    return `${Env.get('APP_URL')}/files/${image}`
  }

  static boot () {
    super.boot()
  }
}

module.exports = Sports
