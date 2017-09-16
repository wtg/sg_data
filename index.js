'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const methodOverride = require('method-override')
const connection = require('./models')

connection.sync().then(() => {
    let app = express()

    app.use(bodyParser.urlencoded({extended: true}))
    app.use(bodyParser.json())
    app.use(cookieParser())
    app.use(methodOverride())

    app.use(require('./routes')(connection))

    app.listen(process.env.PORT || 3000, process.env.IP || 'localhost')
})
