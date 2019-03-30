// This probably should be in some env file :)

require('dotenv').config()

let port = 3001
let mongoUrl = "mongodb://127.0.0.1/reaktor"
let secret = "asdasd"

module.exports = {
    mongoUrl,
    port,
    secret
}
