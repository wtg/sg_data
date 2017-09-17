const epilogue = require('epilogue')
const express = require('express')

module.exports = connection => {
    let router = express.Router()

    epilogue.initialize({
        app: router,
        sequelize: connection
    })

    for(let name of Object.keys(connection.models)) {
        const tName = connection.model(name).getTableName()

        let configuration = {
            model: connection.model(name),
            endpoints: [`/${tName}`, `/${tName}/:id`]
        }

        if('queryIncludes' in connection.model(name)) {
            configuration.include = connection.model(name).queryIncludes(connection)
        }

        let resource = epilogue.resource(configuration)
    }

    router.get('/', (req, res) => {
        var output = ''
        for (var key in router.stack) {
            if (router.stack.hasOwnProperty(key)) {
                var val = router.stack[key]
                if(val.route) {
                    val = val.route
                    if(val.stack[0].method === 'get') {
                        output += `<li><a href="${val.path}">${val.path} (${val.stack[0].method})</a></li>`
                    } else {
                        output += `<li>${val.path} (${val.stack[0].method})</li>`
                    }
                }
            }
        }

        res.send('<ul>' + output + '</ul>')
    })

    return router
}
