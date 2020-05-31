'use strict'

const Event = use('App/Models/Event')

class EventController {
  async index ({ request, response }) {
    return Event.all()
  }

  async store ({ request, response, auth }) {
    try {
      const eventRequestData = request.only([
        'name',
        'desc',
        'duration',
        'max_subscribers',
        'min_subscribers',
        'location',
        'lat',
        'long'
      ])

      const eventData = { ...eventRequestData, user_creator: auth.user.id, subscribers: 0, state: 0 }

      const result = await Event.create(eventData)

      if (result) {
        return response.status(201).send({
          message: 'Evento criado com sucesso!'
        })
      }

      return response.status(400).send({
        message: 'Houve algum erro ao criar o evento!'
      })
    } catch (e) {
      return response.status(400).send({
        message: 'Houve algum erro ao criar o evento!'
      })
    }
  }
}

module.exports = EventController
