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

    app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    })

    app.use('/api', require('./routes')(connection))
    app.use('/erd', express.static(path.resolve('./erd.svg')))
    app.use('/', express.static(path.resolve('./docs')))

    app.listen(process.env.PORT || 3000, () => {
        console.log('Listening on port ' + (process.env.PORT || 3000))
    })
})
