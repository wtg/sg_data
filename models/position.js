'use strict'

module.exports = (connection, DataTypes) => {
    const Position = connection.define('position', {
        sessionUniqueId: {
            type: DataTypes.STRING,
            required: true
        },
        bodyUniqueId: {
            type: DataTypes.STRING,
            required: true
        },
        name: {
            type: DataTypes.STRING,
            required: true
        },
        voting: {
            type: DataTypes.BOOLEAN,
            required: true
        },
        officer: {
            type: DataTypes.BOOLEAN,
            required: true
        }
    })

    Position.belongsTo(connection.import('./session'), {
        targetKey: 'uniqueId',
        foreignKey: 'sessionUniqueId'
    })

    Position.belongsTo(connection.import('./session'), {
        targetKey: 'bodyUniqueId',
        foreignKey: 'bodyUniqueId'
    })

    Position.hasMany(connection.model('membership'), { foreignKey: 'positionId' })

    return Position
}
