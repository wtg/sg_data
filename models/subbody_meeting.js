'use strict'

module.exports = (connection, DataTypes) => {
    let SubbodyMeeting = connection.define('subbody_meeting', {
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

    SubbodyMeeting.associate = models => {
        SubbodyMeeting.belongsTo(models['subbody'])
    }

    return SubbodyMeeting
}
