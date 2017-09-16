'use strict'

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
