const api = require('express').Router()
module.exports = api

api.use('/Users', require('./user'))
api.use('/Albums', require('./album'))
api.use('/Photos', require('./photo'))

api.use((req, res, next) => {
    const error = new Error('Not Found')
    error.status = 404
    next(error)
})