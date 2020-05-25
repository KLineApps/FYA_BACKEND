'use strict'

const Helpers = use('Helpers')

class FileController {
  async index ({ params, response }) {
    return response.download(Helpers.tmpPath(`uploads/${params.name}`))
  }
}

module.exports = FileController
