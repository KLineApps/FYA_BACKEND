'use strict'

const Event = use('App/Models/Event')
const Subscription = use('App/Models/Subscription')

class SubscriptionController {
  async index ({ request, response, auth }) {
    return Subscription.findBy('id_user', auth.user.id)
  }

  async store ({ request, response, auth }) {
    const idEvent = request.input('id_event')

    try {
      if (!idEvent) {
        return response.status(400).send({
          message: 'Nenhum evento selecionado!'
        })
      }

      const event = await Event.find(idEvent)

      if (!event) {
        return response.status(400).send({
          message: 'Evento não encontrado!'
        })
      }

      if (event.user_creator === auth.user.id) {
        return response.status(400).send({
          message: 'Você não pode se cadastrar em um evento criado por você!'
        })
      }

      const result = await Subscription.create({
        id_event: idEvent,
        id_user: auth.user.id
      })

      if (!result) {
        return response.status(400).send({
          message: 'Houve algum erro ao se inscrever no evento!'
        })
      }

      return response.status(201).send({
        message: 'Inscrito no evento com sucesso!'
      })
    } catch (e) {
      return response.status(400).send({
        message: 'Houve algum erro ao se inscrever no evento!'
      })
    }
  }
}

module.exports = SubscriptionController
