'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const methodOverride = require('method-override')

const connection = require('./models')
const epilogue = require('epilogue')

connection.sync().then(() => {
    let app = express()

    app.use(bodyParser.urlencoded({extended: true}))
    app.use(bodyParser.json())
    app.use(cookieParser())
    app.use(methodOverride())

    epilogue.initialize({
        app: app,
        sequelize: connection
    });

    epilogue.resource({
        model: connection.model('body'),
        endpoints: ['/bodies', '/bodies/:uniqueId']
    }).delete.auth(function(req, res, context) {
        throw new epilogue.Errors.ForbiddenError("Error: can't delete a body");
        return context.error(403, "Error: can't delete a body");
    })

    epilogue.resource({
        model: connection.model('session'),
        endpoints: ['/sessions', '/sessions/:uniqueId'],
        include: [{
            model: connection.model('body')
        }]
    });

    // app.use('/', require('./routes')(connection))

    app.listen(3000)
})
