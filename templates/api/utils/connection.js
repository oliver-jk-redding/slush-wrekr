var env = process.env.NODE_ENV || 'development'
var config = require('../../knexfile')[env]

var knex = require('knex')(config)

module.exports = knex