'use strict'

module.exports = (connection, DataTypes) => {
    const Meeting = connection.define('meeting', {
        name: {
            type: DataTypes.STRING,
            required: true
        },
        date: {
            type: DataTypes.DATEONLY,
            required: true
        },
        location: {
            type: DataTypes.STRING,
            required: true
        }
    })

    Meeting.belongsTo(connection.import('./session'))

    return Meeting
}
