// Admin login route

const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const adminLoginRouter = require('express').Router()
const Admin = require('../models/admin')
const config = require('../utils/config')

adminLoginRouter.post('/', async (request, response) => {
  const body = request.body

  const admin = await Admin.findOne({ privateEmail: body.privateEmail })
  const passwordCorrect = admin === null ?
    false :
    await bcrypt.compare(body.password, admin.passwordHash)

  if (!(admin && passwordCorrect)) {
    return response.status(401).send({ error: 'invalid email or password' })
  }

  const adminForToken = {
    privateEmail: admin.privateEmail,
    id: admin._id
  }

  console.log(config.adminSecret)

  const token = jwt.sign(adminForToken, config.adminSecret)

    response.status(200).send({
        token,
        idx: admin.idx,
        privateEmail: admin.privateEmail,
        workEmail: admin.workEmail,
        firstName: admin.firstName,
        lastName: admin.lastName,
        store: admin.store,
        employeeSince: admin.employeeSince
    })
})

module.exports = adminLoginRouter
