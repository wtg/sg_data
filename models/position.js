'use strict'

module.exports = (connection, DataTypes) => {
    let Position = connection.define('position', {
        bodyUniqueId: {
            type: DataTypes.STRING,
            required: true
        },
        name: {
            type: DataTypes.STRING,
            required: true
        },
        voting: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        officer: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        presidingOfficer: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    })

    Position.associate = models => {
        Position.belongsTo(models['body'], {
            targetKey: 'uniqueId',
            foreignKey: 'bodyUniqueId'
        })

        Position.hasMany(models['membership'], {
            foreignKey: 'positionId'
        })
    }

    Position.queryIncludes = (connection) => {
        return [
            { model: connection.model('body') },
            {
                model: connection.model('membership'),
                include: [{
                    model: connection.model('person'),
                    attributes: ['name', 'image']
                }]
            }
        ]
    }

    // Position.milestones = {
    //     list: {
    //         fetch: {
    //             after: function(req, res, context) {
    //                 for(let position of context.instance) {
    //                     position.dataValues.memberships.sort((a, b) => {
    //                         return (Number((b.dataValues.name.match(/(\d+)/g)[0])) - Number(a.dataValues.name.match(/(\d+)/g)[0]));
    //                     })
    //                 }
    //
    //                 return context.continue
    //             }
    //         }
    //     }
    // }

    return Position
}
