'use strict'

module.exports = (connection, DataTypes) => {
    let Position = connection.define('position', {
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
            default: false
        },
        officer: {
            type: DataTypes.BOOLEAN,
            default: false
        },
        presidingOfficer: {
            type: DataTypes.BOOLEAN,
            default: false
        }
    })

    Position.associate = models => {
        Position.belongsTo(models['body'], {
            targetKey: 'uniqueId',
            foreignKey: 'bodyUniqueId'
        })

        Position.hasMany(models['membership'], {
            foreignKey: 'positionId'
        })
    }

    Position.queryIncludes = (connection) => {
        return [
            { model: connection.model('body') },
            { model: connection.model('membership') }
        ]
    }

    return Position
}
