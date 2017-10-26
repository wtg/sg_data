'use strict'

const Sequelize = require('sequelize')
const moment = require('moment')

module.exports = (connection, DataTypes) => {
    let Subbody = connection.define('subbody', {
        bodyUniqueId: {
            type: DataTypes.STRING,
            primaryKey: true,
            required: true
        },
        sessionUniqueId: {
            type: DataTypes.STRING,
            primaryKey: true,
            required: true
        },
        uniqueId: {
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

    Subbody.associate = models => {
        Subbody.belongsTo(models['session'], {
            targetKey: 'uniqueId',
            foreignKey: 'sessionUniqueId'
        })

        Subbody.belongsTo(models['session'], {
            targetKey: 'bodyUniqueId',
            foreignKey: 'bodyUniqueId'
        })

        Subbody.belongsTo(models['position'], {
            as: 'presidingOfficerPosition'
        })
    }

    Subbody.defaultSort = 'name'

    Subbody.queryIncludes = () => {
        return [{
            model: connection.model('session'),
            where: {
                $and: {
                    uniqueId: { $eq: { $col: 'subbody.sessionUniqueId' } },
                    bodyUniqueId: { $eq: { $col: 'subbody.bodyUniqueId' } }
                }
            },
            include: [{
                model: connection.model('body')
            }]
        }, {
            model: connection.model('position'),
            as: 'presidingOfficerPosition',
            include: [{
                model: connection.model('membership'),
                include: [{
                    model: connection.model('person'),
                    attributes: ['name', 'image', 'email', 'rcsId']
                }]
            }]
        }]
    }

    Subbody.milestones = {
        list: {
            fetch: {
                after: function(req, res, context) {
                    for(let subbody of context.instance) {
                        subbody = subbodyMembershipFilter(subbody)
                    }

                    return context.continue
                }
            }
        },
        read: {
            fetch: {
                after: function(req, res, context) {
                    context.instance = subbodyMembershipFilter(context.instance)
                    return context.continue
                }
            }
        }
    }

    return Subbody
}


function subbodyMembershipFilter (subbody) {
    if(!subbody.dataValues.presidingOfficerPositionId || !subbody.dataValues.presidingOfficerPosition.dataValues.memberships) {
        return subbody
    }

    let memberships = []

    for(let m of subbody.dataValues.presidingOfficerPosition.dataValues.memberships) {
        if(m.dataValues.bodyUniqueId === subbody.dataValues.bodyUniqueId && m.dataValues.sessionUniqueId === subbody.dataValues.sessionUniqueId) {
            memberships.push(m)
        }
    }

    subbody.dataValues.presidingOfficerPosition.dataValues.memberships = memberships

    return subbody
}