'use strict'

module.exports = (connection, DataTypes) => {
    const Membership = connection.define('membership', {
        startDate: {
            type: DataTypes.DATEONLY
        },
        endDate: {
            type: DataTypes.DATEONLY,
            default: 'NULL'
        }
    })

    Membership.belongsTo(connection.import('./person'))
    Membership.belongsTo(connection.import('./position'))

    return Membership
}
