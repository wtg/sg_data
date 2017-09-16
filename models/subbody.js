'use strict'

const Sequelize = require('sequelize')
const moment = require('moment');

module.exports = (connection, DataTypes) => {
    const Subbody = connection.define('subbody', {
        uniqueId: {
            type: DataTypes.STRING,
            primaryKey: true,
            required: true
        },
        sessionUniqueId: {
            type: DataTypes.STRING,
            primaryKey: true,
            required: true
        },
        bodyUniqueId: {
            type: DataTypes.STRING,
            primaryKey: true,
            required: true
        },
        name: {
            type: DataTypes.STRING,
            required: true
        },
        fullUniqueId: {
            type: new DataTypes.VIRTUAL(DataTypes.STRING, [
                'bodyUniqueId', 'sessionUniqueId', 'uniqueId'
            ]),
            get() {
                return this.get('bodyUniqueId') + '/' + this.get('sessionUniqueId') + '/' + this.get('uniqueId')
            }
        }
    })

    Subbody.queryIncludes = () => {
        return [{
            model: connection.model('position'),
            attributes: ['name', 'voting', 'officer'],
            as: "presidingPosition",
            include: [{
                model: connection.model('membership'),
                attributes: ['personRcsId', 'current'],
                where: {
                    $and: {
                        endDate: {
                            $or: {
                                $eq: null,
                                $gt: moment().format('YYYY-MM-DD')
                            }
                        },
                        startDate: {
                            $lte: moment().format('YYYY-MM-DD')
                        }
                    }
                }
            }]
        }, {
            model: connection.model('session'),
            attributes: ['fullUniqueId','uniqueId', 'bodyUniqueId', 'name'],
            where: {
                $and: {
                    uniqueId: { $eq: Sequelize.col('subbody.sessionUniqueId') },
                    bodyUniqueId: { $eq: Sequelize.col('subbody.bodyUniqueId') }
                }
            }
        }]
    }

    Subbody.belongsTo(connection.import('./session'), {
        targetKey: 'uniqueId',
        foreignKey: 'sessionUniqueId'
    })

    Subbody.belongsTo(connection.import('./session'), {
        targetKey: 'bodyUniqueId',
        foreignKey: 'bodyUniqueId'
    })

    Subbody.belongsTo(connection.import('./position'), {
        as: "presidingPosition"
    })

    return Subbody
}
