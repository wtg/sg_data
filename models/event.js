'use strict'

module.exports = (connection, DataTypes) => {
    const Event = connection.define('event', {
        name: {
            type: DataTypes.STRING,
            required: true
        }
    })

    Event.associate = models => {
        Event.belongsTo(models['session'])
    }

    return Event
}
