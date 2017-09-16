'use strict'

module.exports = (connection, DataTypes) => {
    const SubbodyMeeting = connection.define('subbody_meeting', {
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

    SubbodyMeeting.belongsTo(connection.import('./subbody'))

    return SubbodyMeeting
}
