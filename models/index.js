'use strict'

/**
 * @apiDefine QueryOptionalFields
 *
 * @apiParam    {String}    [q]                 Optional search query to filter results by
 * @apiParam    {Integer}   [offset]            Optional numerical offset to start at for pagination; `page` should not be set simultaneously
 * @apiParam    {Integer}   [page]              Optional page number to start at for pagination; `offset` should not be set simultaneously
 * @apiParam    {Integer}   [count]             Optional number of results to display for pagination
 */

/**
 * @apiDefine NotFoundError
 *
 * @apiErrorExample {json} Not Found Error
 *     HTTP/1.1 404 Not Found
 *     {
 *       "message": "Not Found",
 *       "errors": []
 *     }
 */

const fs = require('fs')
const path = require('path')
const Sequelize = require('sequelize')

const connection = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/sg_data')

let models = {}

fs.readdirSync(__dirname).filter(file => file.indexOf(".") !== 0 && file !== "index.js")
    .forEach(file => {
        let model = connection.import(path.join(__dirname, file))
        models[model.name] = model
    })

for (const name of Object.keys(models)) {
    if("associate" in models[name]) {
        models[name].associate(models)
    }
}

module.exports = connection
