var express = require('express')
var app = express()
var port = process.env.PORT || 8080
var needle = require('needle')

var configs = require('./config.js')
var config = new configs()

var allowCrossDomain = function (req, res, next) {
  res.header('Access-Control-Allow-Origin', 'localhost:3000')
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
  res.header('Access-Control-Allow-Headers', 'Content-Type')

  next()
}

var bodyParser = require('body-parser')
app.use(bodyParser.json()) // support json encoded bodies
app.use(bodyParser.urlencoded({	extended: true })) // support encoded bodies
app.use(allowCrossDomain)

app.get('/api/test', function (req, res) {
  res.send('testing')
})

// start the server
app.listen(port)
console.log('Server started!!! At http://localhost:' + port)
