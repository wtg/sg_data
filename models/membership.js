'use strict'

const Sequelize = require('sequelize')
const moment = require('moment')

module.exports = (connection, DataTypes) => {
    let Membership = connection.define('membership', {
        sessionUniqueId: {
            type: DataTypes.STRING,
            required: true
        },
        bodyUniqueId: {
            type: DataTypes.STRING,
            required: true
        },
        name: {
            type: DataTypes.STRING,
            required: true
        },
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

    Membership.associate = models => {
        Membership.belongsTo(models['person'])
        Membership.belongsTo(models['position'])
        Membership.belongsTo(models['session'], {
            targetKey: 'uniqueId',
            foreignKey: 'sessionUniqueId'
        })
        Membership.belongsTo(models['session'], {
            targetKey: 'bodyUniqueId',
            foreignKey: 'bodyUniqueId'
        })
    }

    Membership.queryIncludes = (connection) => {
        return [
            { model: connection.model('person') },
            { model: connection.model('position') },
            {
                model: connection.model('session'),
                where: {
                    $and: {
                        uniqueId: { $eq: Sequelize.col('membership.sessionUniqueId') },
                        bodyUniqueId: { $eq: Sequelize.col('membership.bodyUniqueId') }
                    }
                }
            }
        ]
    }

    return Membership
}
