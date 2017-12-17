'use strict'

const epilogue = require('epilogue')
const express = require('express')
const jwt = require('jsonwebtoken')

function authorizationMiddleware (req, res, context) {
    return new Promise(function(resolve) {
        if(!!req.header('Authorization')) {
            const token = req.header('Authorization').split('Bearer ').pop()
            try {
                const decoded = jwt.verify(token, process.env.AUTH_SECRET)

                if(decoded.rcsId) {
                    resolve(context.continue)
                } else {
                    res.status(401).send({ message: "Unauthenticated" })
                    resolve(context.stop)
                }
            } catch (e) {
                res.status(401).send({ message: "Invalid authorization token" })
                resolve(context.stop)
            }
        } else if(req.method === 'GET') {
            resolve(context.continue)
        } else {
            res.status(401).send({ message: "Unauthorized" })
            resolve(context.stop)
        }
    })
}

module.exports = connection => {
    let router = express.Router()

    epilogue.initialize({
        app: router,
        sequelize: connection
    })

    for(let name of Object.keys(connection.models)) {
        const model = connection.model(name)
        const tName = model.getTableName()

        let templateUrl = ''
        for(const k of model.primaryKeyAttributes) {
            templateUrl += `/:${k}`
        }

        let configuration = {
            model: model,
            endpoints: [`/${tName}`, `/${tName}${templateUrl}`],
            search: {
                operator: '$iLike'
            }
        }

        if('queryIncludes' in model) {
            configuration.include = model.queryIncludes(connection)
        }

        if('defaultSort' in model) {
            configuration.sort = { default: model.defaultSort }
        }

        let resource = epilogue.resource(configuration)

        resource.all.auth(authorizationMiddleware)

        if('milestones' in model) {
            resource.use(model.milestones)
        }
    }

    router.get('/', (req, res) => {
        let output = ''
        for (let key in router.stack) {
            if (router.stack.hasOwnProperty(key)) {
                let val = router.stack[key]
                if(val.route) {
                    val = val.route
                    if(val.stack[0].method === 'get') {
                        output += `<li><a href="/api/${val.path}">/api/${val.path} (${val.stack[0].method})</a></li>`
                    } else {
                        output += `<li>/api/${val.path} (${val.stack[0].method})</li>`
                    }
                }
            }
        }

        res.send('<ul>' + output + '</ul>')
    })

    return router
}
