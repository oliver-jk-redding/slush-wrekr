var express = require('express')
var router = express.Router()

var knex = require('./utils/connection')
var utils = require('./utils/index')

router.get('/', function(req,res) {
  res.end()
})

module.exports = router
