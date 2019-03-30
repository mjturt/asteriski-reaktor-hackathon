const express = require('express')
const http = require('http')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const middleware = require('./utils/middleware')
const usersRouter = require('./routes/register')
const loginRouter = require('./routes/login')
const config = require('./utils/config')
const User = require('./models/user')

mongoose.connect(config.mongoUrl)
mongoose.Promise = global.Promise

app.use(cors())
app.use(bodyParser.json())
app.use(express.static('build'))
app.use(middleware.logger)

app.use('/api/login', loginRouter)
app.use('/api/register', usersRouter)

app.use(middleware.error)

const server = http.createServer(app)

server.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`)
})

server.on('close', () => {
  mongoose.connection.close()
})

module.exports = {
  app, server
}
