'use strict'

module.exports = (connection, DataTypes) => {
    let SubbodyAttendance = connection.define('subbody_attendance', {
        status: {
            type: DataTypes.BOOLEAN,
            default: false
        },
        excused: {
            type: DataTypes.BOOLEAN,
            default: false
        },
        notes: {
            type: DataTypes.STRING,
            default: null
        }
    })

    SubbodyAttendance.associate = models => {
        SubbodyAttendance.belongsTo(models['subbody_meeting'])
        SubbodyAttendance.belongsTo(models['subbody_membership'])
    }

    return SubbodyAttendance
}
