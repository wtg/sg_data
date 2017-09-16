'use strict'

module.exports = (connection, DataTypes) => {
    let Session = connection.define('session', {
        uniqueId: {
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
                'uniqueId', 'bodyUniqueId'
            ]),
            get() {
                return this.get('bodyUniqueId') + '/' + this.get('uniqueId')
            }
        }
    })

    Session.queryIncludes = (connection) => {
        return [{
            model: connection.model('body'),
            attributes: ['name', 'uniqueId']
        }]
    }

    Session.belongsTo(connection.import('./body'), {
        foreignKey: 'bodyUniqueId'
    })

    return Session
}
