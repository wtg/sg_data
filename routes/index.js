'use strict'

const fs = require('fs')
const path = require('path')
const express = require('express')

module.exports = connection => {
    let router = express.Router()

    fs.readdirSync(__dirname).filter(file => file.indexOf(".") !== 0 && file !== "index.js")
        .forEach(file => {
            router.use(`/${file.split('.')[0]}`, require(path.join(__dirname, file))(connection))
        })

    return router
}
