// Route for registering customers

const bcrypt = require('bcrypt')
const usersRouter = require('express').Router()
const User = require('../models/user')

usersRouter.get('/', async (request, response) => {
  const users = await User
    .find({})
    .populate('notes', { content: 1, date: 1 })

  response.json(users.map(User.format))
})

usersRouter.post('/', async (request, response) => {
  try {
    const body = request.body

    const existingUser = await User.find({ email: body.email })
    if (existingUser.length > 0) {
      return response.status(400).json({ error: 'email must be unique' })
    }

    const saltRounds = 10
    const passwordHash = await bcrypt.hash(body.password, saltRounds)

    const user = new User({
        idx: body.idx,
        email: body.email,
        firstName: body.firstName,
        lastName: body.lastName,
        passwordHash,
        bonusPoints: body.bonusPoints,
        memberSince: body.memberSince
    })

    const savedUser = await user.save()

    response.json(User.format(savedUser))
  } catch (exception) {
    console.log(exception)
    response.status(500).json({ error: 'something went wrong...' })
  }
})

module.exports = usersRouter
