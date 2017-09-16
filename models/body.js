'use strict'

module.exports = (connection, DataTypes) => {
    const Body = connection.define('body', {
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

    return Body
}
