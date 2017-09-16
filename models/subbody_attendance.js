'use strict'

module.exports = (connection, DataTypes) => {
    const SubbodyAttendance = connection.define('subbody_attendance', {
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

    SubbodyAttendance.belongsTo(connection.import('./subbody_meeting'))
    SubbodyAttendance.belongsTo(connection.import('./subbody_membership'))

    return SubbodyAttendance
}
