// Route for registering employees

const bcrypt = require('bcrypt')
const adminsRouter = require('express').Router()
const Admin = require('../models/admin')

adminsRouter.get('/', async (request, response) => {
  const admins = await Admin
    .find({})
    .populate('notes', { content: 1, date: 1 })

  response.json(admins.map(Admin.format))
})

adminsRouter.post('/', async (request, response) => {
  try {
    const body = request.body

    const existingAdmin = await Admin.find({ privateEmail: body.privateEmail })
    if (existingAdmin.length > 0) {
      return response.status(400).json({ error: 'privateEmail must be unique' })
    }

    const saltRounds = 10
    const passwordHash = await bcrypt.hash(body.password, saltRounds)

    const admin = new Admin({
        idx: body.idx,
        privateEmail: body.privateEmail,
        workEmail: body.workEmail,
        firstName: body.firstName,
        lastName: body.lastName,
        store: body.store,
        employeeSince: body.employeeSince,
        passwordHash
    })

    const savedAdmin = await admin.save()

    response.json(Admin.format(savedAdmin))
  } catch (exception) {
    console.log(exception)
    response.status(500).json({ error: 'something went wrong...' })
  }
})

module.exports = adminsRouter
