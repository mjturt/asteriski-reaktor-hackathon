const mongoose = require('mongoose')
require('dotenv').config()

const url = "mongodb://127.0.0.1:27017/?gssapiServiceName=mongodb/reaktor"

mongoose.connect(url)
mongoose.Promise = global.Promise
