'use strict'

module.exports = (connection, DataTypes) => {
    const Project = connection.define('project', {
        name: {
            type: DataTypes.STRING,
            required: true
        },
        description: {
            type: DataTypes.TEXT,
            defaultValue: ''
        },
        bodyUniqueId: {
            type: DataTypes.STRING,
            required: true
        },
        sessionUniqueId: {
            type: DataTypes.STRING,
            required: true
        },
        subbodyUniqueId: {
            type: DataTypes.STRING,
            required: false
        }
    })

    Project.associate = models => {
        Project.belongsTo(models['session'], {
            targetKey: 'uniqueId',
            foreignKey: 'sessionUniqueId'
        })

        Project.belongsTo(models['session'], {
            targetKey: 'bodyUniqueId',
            foreignKey: 'bodyUniqueId'
        })

        Project.belongsTo(models['subbody'], {
            targetKey: 'uniqueId',
            foreignKey: 'subbodyUniqueId',
            required: false
        })

        Project.belongsTo(models['subbody'], {
            targetKey: 'sessionUniqueId',
            foreignKey: 'sessionUniqueId',
            required: false
        })

        Project.belongsTo(models['subbody'], {
            targetKey: 'bodyUniqueId',
            foreignKey: 'bodyUniqueId',
            required: false
        })

        Project.belongsTo(models['person'], {
            as: 'contactPerson',
            required: false
        })
    }

    Project.queryIncludes = () => {
        return [{
            model: connection.model('session'),
            where: {
                $and: {
                    uniqueId: { $eq: { $col: 'project.sessionUniqueId' } },
                    bodyUniqueId: { $eq: { $col: 'project.bodyUniqueId' } }
                }
            }
        }, {
            model: connection.model('person'),
            required: false,
            as: 'contactPerson'
        }, {
            model: connection.model('subbody'),
            required: false,
            where: {
                $and: {
                    uniqueId: { $eq: { $col: 'project.subbodyUniqueId' } },
                    sessionUniqueId: { $eq: { $col: 'project.sessionUniqueId' } },
                    bodyUniqueId: { $eq: { $col: 'project.bodyUniqueId' } }
                }
            }
        }]
    }

    return Project
}
