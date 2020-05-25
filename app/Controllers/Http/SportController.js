'use strict'

const Sports = use('App/Models/Sports')
const Helpers = use('Helpers')
const Env = use('Env')
const sharp = require('sharp')

class SportController {
  async store ({ request, response }) {
    const data = request.only(
      [
        'desc_sport',
        'address',
        'lat',
        'long',
        'price'
      ])
    const image = request.input('image')

    let filename = ''
    try {
      if (image) {
        const buf = Buffer.from(image, 'base64')
        const pathUpload = Helpers.tmpPath('uploads')
        filename = `${Date.now()}.jpg`

        sharp(buf).resize(300, 300).toFile(`${pathUpload}/${filename}`)
      }
      const sports = await Sports.create({ ...data, image: filename })

      return { ...sports.$attributes, image: `${Env.get('APP_URL')}/files/${filename}` }
    } catch (e) {
      return response.status(e.status).send({
        error: {
          message: 'Houve algum problema em salvar o dado'
        }
      })
    }
  }

  async getAllSports (response) {
    try {
      return Sports.all()
    } catch (e) {
      return response.status(404).send({
        error: {
          message: 'Nenhum dado encontrado'
        }
      })
    }
  }

  async getSportById (response, id) {
    try {
      return Sports.findBy('id', id)
    } catch (e) {
      return response.status(404).send({
        error: {
          message: 'Nenhum dado encontrado'
        }
      })
    }
  }

  async index ({ params, response }) {
    const id = params.id

    if (id) {
      return this.getSportById(response, id)
    }

    return this.getAllSports()
  }
}

module.exports = SportController
