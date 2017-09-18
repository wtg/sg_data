'use strict'

module.exports = (connection, DataTypes) => {
    const Attendance = connection.define('attendance', {
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

    Attendance.associate = models => {
        Attendance.belongsTo(models['meeting'])
        Attendance.belongsTo(models['membership'])
    }

    return Attendance
}
