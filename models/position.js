'use strict'

module.exports = (connection, DataTypes) => {
    const Position = connection.define('position', {
        name: {
            type: DataTypes.STRING,
            unique: true
        },
        voting: {
            type: DataTypes.BOOLEAN,
            required: true
        }
    })

    Position.belongsTo(connection.import('./session'))

    return Position
}
