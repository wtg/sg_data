'use strict'

const Sequelize = require('sequelize');
const showdown = require('showdown')
const converter = new showdown.Converter()

module.exports = (connection, DataTypes) => {
    let Update = connection.define('update', {
        sessionUniqueId: {
            type: DataTypes.STRING,
            required: true
        },
        bodyUniqueId: {
            type: DataTypes.STRING,
            required: true
        },
        title: {
            type: DataTypes.STRING,
            required: true
        },
        image: {
            type: DataTypes.BLOB,
            required: false
        },
        text: {
            type: DataTypes.TEXT,
            defaultValue: ''
        },
        textHtml: {
            type: DataTypes.VIRTUAL(DataTypes.STRING, [
                'text'
            ]),
            get() {
                return converter.makeHtml(this.get('text') || '')
            }
        },
        displayContact: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        }
    })

    Update.associate = models => {
        Update.belongsTo(models['session'], {
            targetKey: 'uniqueId',
            foreignKey: 'sessionUniqueId'
        })
        Update.belongsTo(models['session'], {
            targetKey: 'bodyUniqueId',
            foreignKey: 'bodyUniqueId'
        })
        Update.belongsTo(models['person'], { as: 'contact' })
    }

    Update.queryIncludes = (connection) => {
        return [
            {
                model: connection.model('session'),
                where: {
                    $and: {
                        uniqueId: { $eq: Sequelize.col('update.sessionUniqueId') },
                        bodyUniqueId: { $eq: Sequelize.col('update.bodyUniqueId') }
                    }
                }
            },
            { model: connection.model('person'), as: 'contact' }
        ]
    }

    return Update
}
