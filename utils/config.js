if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

let port = 3001
let mongoUrl = "mongodb://127.0.0.1/reaktor"
let secret = "asdasd"

if (process.env.NODE_ENV === 'test') {
  port = 3001
    mongoUrl = mongoUrl = "mongodb://127.0.0.1/reaktor"
    secret = "asdasd"
}

module.exports = {
    mongoUrl,
    port,
    secret
}
