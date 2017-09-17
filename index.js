'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const methodOverride = require('method-override')
const path = require('path')
const connection = require('./models')

connection.sync().then(() => {
    let app = express()

    app.use(bodyParser.urlencoded({extended: true}))
    app.use(bodyParser.json())
    app.use(cookieParser())
    app.use(methodOverride())

    app.use('/api/v1', require('./routes')(connection))
    app.use('/erd', express.static(path.resolve('./erd.svg')))
    app.use('/', express.static(path.resolve('./docs')))

    app.listen(process.env.PORT || 3000, () => {
        console.log('Listening on port ' + (process.env.PORT || 3000))
    })
})
