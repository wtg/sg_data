'use strict'

const Sequelize = require('sequelize')
const moment = require('moment')

module.exports = (connection, DataTypes) => {
    let Subbody = connection.define('subbody', {
        uniqueId: {
            type: DataTypes.STRING,
            primaryKey: true,
            required: true
        },
        sessionUniqueId: {
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
        },
        fullUniqueId: {
            type: new DataTypes.VIRTUAL(DataTypes.STRING, [
                'bodyUniqueId', 'sessionUniqueId', 'uniqueId'
            ]),
            get() {
                return this.get('bodyUniqueId') + '/' + this.get('sessionUniqueId') + '/' + this.get('uniqueId')
            }
        }
    })

    Subbody.associate = models => {
        Subbody.belongsTo(models['session'], {
            targetKey: 'uniqueId',
            foreignKey: 'sessionUniqueId'
        })

        Subbody.belongsTo(models['session'], {
            targetKey: 'bodyUniqueId',
            foreignKey: 'bodyUniqueId'
        })
    }

    Subbody.defaultSort = 'name'

    Subbody.queryIncludes = () => {
        return [{
            model: connection.model('session'),
            where: {
                $and: {
                    uniqueId: { $eq: Sequelize.col('subbody.sessionUniqueId') },
                    bodyUniqueId: { $eq: Sequelize.col('subbody.bodyUniqueId') }
                }
            }
        }]
    }

    return Subbody
}
