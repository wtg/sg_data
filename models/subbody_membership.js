'use strict'

module.exports = (connection, DataTypes) => {
    let SubbodyMembership = connection.define('subbody_membership', {
        startDate: {
            type: DataTypes.DATEONLY
        },
        endDate: {
            type: DataTypes.DATEONLY,
            default: 'NULL'
        }
    })

    SubbodyMembership.associate = models => {
        SubbodyMembership.belongsTo(models['person'])
        SubbodyMembership.belongsTo(models['subbody_position'])
    }

    return SubbodyMembership
}
