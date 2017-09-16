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
            endpoints: [`/${tName}`, `/${tName}/:uniqueId`]
        }

        if('queryIncludes' in connection.model(name)) {
            configuration.include = connection.model(name).queryIncludes(connection)
        }

        let resource = epilogue.resource(configuration)
    }

    return router
}
