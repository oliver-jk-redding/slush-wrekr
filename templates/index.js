var express = require('express')
var path = require('path')
var bodyParser = require('body-parser')
var session = require('express-session')

var app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(session({
  secret: 'top secret',
  saveUninitialized: true,
  resave: true
}))

var indexPath = path.join(__dirname, '/public/index.html')
var publicPath = express.static(path.join(__dirname, '/public'))
var api = require('./api/api')

app.use('/public', publicPath)
app.get('/', function(req,res) {res.sendFile(indexPath)})
app.use(api)

module.exports = app
