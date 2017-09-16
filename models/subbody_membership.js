'use strict'

module.exports = (connection, DataTypes) => {
    const SubbodyMembership = connection.define('subbody_membership', {
        startDate: {
            type: DataTypes.DATEONLY
        },
        endDate: {
            type: DataTypes.DATEONLY,
            default: 'NULL'
        }
    })

    SubbodyMembership.belongsTo(connection.import('./person'))
    SubbodyMembership.belongsTo(connection.import('./subbody_position'))

    return SubbodyMembership
}
