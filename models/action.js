'use strict'

module.exports = (connection, DataTypes) => {
    const Action = connection.define('action', {
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
        },
        voteCount: {
            type: DataTypes.VIRTUAL(DataTypes.STRING, [
                'votesFor', 'votesAgainst', 'abstentions'
            ]),
            get() {
                return `${this.getDataValue('votesFor')}-${this.getDataValue('votesAgainst')}-${this.getDataValue('abstentions')}`
            }
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

    Action.queryIncludes = (connection) => {
        return [
            { model: connection.model('meeting') },
            { model: connection.model('membership'), as: 'movingMember' },
            { model: connection.model('membership'), as: 'secondingMember' },
            { model: connection.model('subbody'), as: 'movingSubbody' }
        ]
    }

    return Action
}
