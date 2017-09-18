'use strict'

const Sequelize = require('sequelize')

module.exports = (connection, DataTypes) => {
    const Action = connection.define('action', {
        actionIndicator: {
            type: DataTypes.VIRTUAL(DataTypes.STRING, [
                'bodyUniqueId', 'sessionUniqueId', 'meetingNum', 'actionNum'
            ]),
            get() {
                return this.getDataValue('bodyUniqueId')[0].toUpperCase() + '.' +
                    this.getDataValue('sessionUniqueId') + '.' +
                    this.getDataValue('meetingNum') + '.' +
                    this.getDataValue('actionNum')
            }
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
        meetingNum: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        actionNum: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        description: {
            type: DataTypes.STRING,
            required: true
        },
        text: {
            type: DataTypes.TEXT,
            required: true
        },
        status: {
            type: DataTypes.TEXT,
            required: true
        },
        votesFor: {
            type: DataTypes.INTEGER,
            default: 0
        },
        votesAgainst: {
            type: DataTypes.INTEGER,
            default: 0
        },
        abstentions: {
            type: DataTypes.INTEGER,
            default: 0
        }
    })

    Action.associate = models => {
        Action.belongsTo(models['meeting'], {
            targetKey: 'sessionUniqueId',
            foreignKey: 'sessionUniqueId'
        })

        Action.belongsTo(models['meeting'], {
            targetKey: 'bodyUniqueId',
            foreignKey: 'bodyUniqueId'
        })

        Action.belongsTo(models['meeting'], {
            targetKey: 'meetingNum',
            foreignKey: 'meetingNum'
        })

        Action.belongsTo(models['membership'], { as: 'movingMember' })
        Action.belongsTo(models['membership'], { as: 'secondingMember' })

        Action.belongsTo(models['subbody'], { as: 'movingSubbody' })
    }

    Action.defaultSort = 'bodyUniqueId,-sessionUniqueId,-meetingNum,-actionNum'

    Action.queryIncludes = (connection) => {
        return [
            { model: connection.model('membership'), as: 'movingMember' },
            { model: connection.model('membership'), as: 'secondingMember' },
            {
                model: connection.model('subbody'),
                as: 'movingSubbody',
                required: false,
                where: {
                    $and: {
                        uniqueId: { $eq: Sequelize.col('action.movingSubbodyUniqueId') },
                        sessionUniqueId: { $eq: Sequelize.col('action.sessionUniqueId') },
                        bodyUniqueId: { $eq: Sequelize.col('action.bodyUniqueId') }
                    }
                }
            },
            {
                model: connection.model('meeting'),
                where: {
                    $and: {
                        meetingNum: { $eq: Sequelize.col('action.meetingNum') },
                        sessionUniqueId: { $eq: Sequelize.col('action.sessionUniqueId') },
                        bodyUniqueId: { $eq: Sequelize.col('action.bodyUniqueId') }
                    }
                }
            }
        ]
    }

    return Action
}
