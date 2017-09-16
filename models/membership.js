'use strict'

const moment = require('moment')

module.exports = (connection, DataTypes) => {
    const Membership = connection.define('membership', {
        startDate: {
            type: DataTypes.DATEONLY,
            defaultValue: DataTypes.NOW
        },
        endDate: {
            type: DataTypes.DATEONLY,
            default: 'NULL'
        },
        current: {
            type: DataTypes.VIRTUAL(DataTypes.BOOLEAN, [
                'startDate', 'endDate'
            ]),
            get() {
                return (!this.endDate || moment(this.endDate).isAfter(moment())) &&
                    (!moment(this.startDate).isAfter(moment()));
            }
        }
    })

    Membership.belongsTo(connection.import('./person'))
    Membership.belongsTo(connection.import('./position'))

    return Membership
}
