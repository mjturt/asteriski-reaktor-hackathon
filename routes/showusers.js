// Show all users in admin panel

// Not ready yet

const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const showUsersRouter = require('express').Router()
const config = require('../utils/config')
const User = require('../models/user')

const gettokenfrom = (request) => {
    const authorization = request.get('authorization')
    if (authorization && authorization.tolowercase().startswith('bearer ')) {
        return authorization.substring(7)
    }
    return null
}

showUsersRouter.get('/', async (request, response) => {
    User.find({}, function(err, users) {
        var userMap = {};
        users.forEach(function(user) {
            userMap[user._id] = user;
        });
        response.send(userMap);
    })
})

module.exports = showUsersRouter
