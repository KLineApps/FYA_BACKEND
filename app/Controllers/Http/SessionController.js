'use strict'

class SessionController {
  async store ({ request, response, auth }) {
    const { email, password } = request.all()

    if (!email || !password) {
      return response.json({
        err: 'Email or password not provided'
      })
    }

    const token = await auth.attempt(email, password)

    return token
  }
}

module.exports = SessionController
