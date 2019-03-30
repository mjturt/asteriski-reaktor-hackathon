// Admin login route

const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const loginRouter = require('express').Router()
const Admin = require('../models/admin')
const config = require('../utils/config')

loginRouter.post('/', async (request, response) => {
  const body = request.body

  const user = await Admin.findOne({ privateEmail: body.privateEmail })
  const passwordCorrect = user === null ?
    false :
    await bcrypt.compare(body.password, user.passwordHash)

  if (!(user && passwordCorrect)) {
    return response.status(401).send({ error: 'invalid email or password' })
  }

  const userForToken = {
    email: user.email,
    id: user._id
  }

  console.log(config.secret)

  const token = jwt.sign(userForToken, config.secret)

    response.status(200).send({
        token,
        idx: user.idx,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        bonusPoints: user.bonusPoints,
        memberSince: user.memberSince
    })
})

module.exports = loginRouter
