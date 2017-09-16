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

    Attendance.belongsTo(connection.import('./meeting'))
    Attendance.belongsTo(connection.import('./membership'))

    return Attendance
}
