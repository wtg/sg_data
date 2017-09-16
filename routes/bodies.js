'use strict'

const express = require('express')

module.exports = connection => {
    const router = express.Router()

    router.post('/', (req, res) => {
        let promise
        if(Array.isArray(req.body)) {
            promise = connection.model('body').bulkCreate(req.body)
        } else {
            promise = connection.model('body').create(req.body)
        }

        promise.then(
            result => res.json(result),
            error => res.status(400).json(error.errors)
        )
    })

    router.get('/', (req, res) => {
        connection.model('body').findAll({raw: true}).then(result => res.json(result))
    })

    return router
}
