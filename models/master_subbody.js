'use strict'

const Sequelize = require('sequelize')
const moment = require('moment');

module.exports = (connection, DataTypes) => {
    const MasterSubbody = connection.define('master_subbody', {
        uniqueId: {
            type: DataTypes.STRING,
            primaryKey: true,
            required: true
        },
        bodyUniqueId: {
            type: DataTypes.STRING,
            primaryKey: true,
            required: true
        },
        name: {
            type: DataTypes.STRING,
            required: true
        }
    })

    MasterSubbody.belongsTo(connection.import('./master_position'), {
        as: "masterPresidingPosition"
    })

    MasterSubbody.belongsTo(connection.model('body'), {
        targetKey: 'uniqueId',
        foreignKey: 'bodyUniqueId'
    })

    return MasterSubbody
}
