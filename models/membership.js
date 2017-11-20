'use strict'

const Sequelize = require('sequelize')
const moment = require('moment')

module.exports = (connection, DataTypes) => {
    let Membership = connection.define('membership', {
        sessionUniqueId: {
            type: DataTypes.STRING
        },
        bodyUniqueId: {
            type: DataTypes.STRING
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
        yearOnly: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        current: {
            type: DataTypes.VIRTUAL(DataTypes.BOOLEAN, [
                'startDate', 'endDate'
            ]),
            get() {return (!this.endDate || moment(this.endDate).isAfter(moment())) &&
                    (!moment(this.startDate).isAfter(moment()));
            }
        },
        term: {
            type: DataTypes.VIRTUAL(DataTypes.STRING, [
                'startDate', 'endDate', 'yearOnly'
            ]),
            get() {
                const dateFormat = this.yearOnly ? 'YYYY' : 'MMM YYYY'
                return moment(this.startDate).format(dateFormat) + '–' +
                    (!this.endDate ? 'present' : moment(this.endDate).format(dateFormat))
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
