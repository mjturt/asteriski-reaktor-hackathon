// Show all users in admin panel

// Not ready yet

const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const showUsersRouter = require('express').Router()
const config = require('../utils/config')
const User = require('../models/user')

const getTokenFrom = (request) => {
  const authorization = request.get('authorization')
  if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
    return authorization.substring(7)
  }
  return null
}

showUsersRouter.get('/', async (request, response) => {
//console.log(request.get('authorization'))
    try {
        const token = getTokenFrom(request)
        console.log(token)
        const decodedToken = jwt.verify(token, config.adminSecret)

        if (!token || !decodedToken.id) {
            return response.status(401).json({ error: 'token missing or invalid' })
        }

        //if (body.content === undefined) {
            //return response.status(400).json({ error: 'content missing' })
        //}

        User.find({}, function(err, users) {
            var userMap = {};
            users.forEach(function(user) {
                userMap[user._id] = user;
            });
            response.send(userMap);
        })

    } catch (exception) {
        if (exception.name === 'JsonWebTokenError') {
            response.status(401).json({ error: exception.message })
        } else {
            console.log(exception)
            response.status(500).json({ error: 'something went wrong...' })
        } }
})

module.exports = showUsersRouter
