'use strict'

const Sequelize = require('sequelize')

module.exports = (connection, DataTypes) => {
    const AgendaItem = connection.define('agenda_item', {
        bodyUniqueId: {
            type: DataTypes.STRING,
            required: true
        },
        sessionUniqueId: {
            type: DataTypes.STRING,
            required: true
        },
        meetingNum: {
            type: DataTypes.INTEGER,
            required: true
        },
        name: {
            type: DataTypes.STRING,
            required: true
        },
        presenter: {
            type: DataTypes.STRING,
            defaultValue: null
        },
        parentId: {
            type: DataTypes.INTEGER,
            defaultValue: null
        },
        order: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        }
    })

    AgendaItem.associate = models => {
        AgendaItem.belongsTo(models['meeting'], {
            targetKey: 'sessionUniqueId',
            foreignKey: 'sessionUniqueId'
        })

        AgendaItem.belongsTo(models['meeting'], {
            targetKey: 'bodyUniqueId',
            foreignKey: 'bodyUniqueId'
        })

        AgendaItem.belongsTo(models['meeting'], {
            targetKey: 'meetingNum',
            foreignKey: 'meetingNum'
        })
    }

    AgendaItem.queryIncludes = (connection) => {
        return [
            {
                model: connection.model('meeting'),
                where: {
                    $and: {
                        bodyUniqueId: { $eq: Sequelize.col('agenda_item.bodyUniqueId') },
                        sessionUniqueId: { $eq: Sequelize.col('agenda_item.sessionUniqueId') },
                        meetingNum: { $eq: Sequelize.col('agenda_item.meetingNum') }
                    }
                }
            }
        ]
    }

    return AgendaItem
}
