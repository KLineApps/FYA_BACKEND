'use strict'

const User = use('App/Models/User')
const Helpers = use('Helpers')

const fs = Helpers.promisify(require('fs'))
const Env = use('Env')

class UserController {
  async store ({ request, response }) {
    const data = request.only(['username', 'email', 'password', 'name'])
    const photoProfile = request.input('photoProfile')

    try {
      const hasUser = await User.findBy('email', data.email)

      if (hasUser) {
        return {
          error: true,
          message: 'Este email já está em uso'
        }
      }

      let filename = 'photoProfileDefault.jpg'
      if (photoProfile) {
        const buf = Buffer.from(photoProfile, 'base64')
        const pathUpload = Helpers.tmpPath('uploads')
        filename = `${Date.now()}.jpg`

        fs.writeFileSync(`${pathUpload}/${filename}`, buf, 'utf8')
      }
      const user = await User.create({
        ...data,
        photo_profile: filename
      })

      return {
        ...user.$attributes,
        photo_profile: `${Env.get('APP_URL')}/files/${filename}`
      }
    } catch (error) {
      return {
        error: true,
        message: error.message
      }
    }
  }
}

module.exports = UserController
