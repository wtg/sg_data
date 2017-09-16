'use strict'

module.exports = (connection, DataTypes) => {
    const Action = connection.define('action', {
        description: {
            type: DataTypes.STRING,
            required: true
        },
        text: {
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
        votesAbstaining: {
            type: DataTypes.INTEGER,
            default: 0
        }
    })

    Action.belongsTo(connection.import('./meeting'))
    Action.belongsTo(connection.import('./membership'), { as: 'movingMember' })
    Action.belongsTo(connection.import('./membership'), { as: 'secondingMember' })
    Action.belongsTo(connection.import('./subbody'), { as: 'movingSubbody' })

    return Action
}
