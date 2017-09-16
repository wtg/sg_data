'use strict'

module.exports = (connection, DataTypes) => {
    const Subbody = connection.define('subbody', {
        uniqueId: {
            type: DataTypes.STRING,
            primaryKey: true,
            required: true,
            unique: true
        },
        name: {
            type: DataTypes.STRING,
            required: true
        }
    })

    Subbody.belongsTo(connection.import('./session'))
    Subbody.belongsTo(connection.import('./position'), {
        as: "presidingPosition"
    })

    return Subbody
}
