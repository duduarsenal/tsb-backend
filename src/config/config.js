require('dotenv').config();
const jwt = require('jsonwebtoken')

const PORT = process.env.PORT
const URI = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@tsbdb.4n1vwiy.mongodb.net/?retryWrites=true&w=majority`
const SECRET = process.env.SECRET

module.exports = { URI, PORT, SECRET, jwt}