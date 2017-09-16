'use strict'

module.exports = (connection, DataTypes) => {
    const Event = connection.define('event', {
        name: {
            type: DataTypes.STRING,
            required: true
        }
    })

    Event.belongsTo(connection.import('./session'))

    return Event
}
