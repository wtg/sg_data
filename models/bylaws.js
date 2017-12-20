'use strict'

const Sequelize = require('sequelize')
const _ = require('lodash')
const showdown = require('showdown')
const converter = new showdown.Converter()

module.exports = (connection, DataTypes) => {
    const Bylaws = connection.define('bylaws', {
        bodyUniqueId: {
            type: DataTypes.STRING,
            required: true
        },
        sessionUniqueId: {
            type: DataTypes.STRING,
            required: true
        },
        text: {
            type: DataTypes.TEXT,
            required: true
        },
        textHtml: {
            type: DataTypes.VIRTUAL(DataTypes.STRING, [
                'text'
            ]),
            get() {
                return converter.makeHtml(this.get('text') || '')
            }
        },
        date: {
            type: DataTypes.DATEONLY
        },
        draft: {
            type: DataTypes.BOOLEAN
        }
    })

    Bylaws.associate = models => {
        Bylaws.belongsTo(models['session'], {
            targetKey: 'uniqueId',
            foreignKey: 'sessionUniqueId'
        })

        Bylaws.belongsTo(models['session'], {
            targetKey: 'bodyUniqueId',
            foreignKey: 'bodyUniqueId'
        })
    }

    Bylaws.queryIncludes = (connection) => {
        return [
            {
                model: connection.model('session'),
                where: {
                    $and: {
                        uniqueId: { $eq: Sequelize.col('bylaws.sessionUniqueId') },
                        bodyUniqueId: { $eq: Sequelize.col('bylaws.bodyUniqueId') }
                    }
                }
            }
        ]
    }

    return Bylaws
}
