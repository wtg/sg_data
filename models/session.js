'use strict'

module.exports = (connection, DataTypes) => {
    const Session = connection.define('session', {
        uniqueId: {
            type: DataTypes.STRING,
            primaryKey: true,
            required: true,
            unique: true,
            set(value) {
                this.setDataValue('uniqueId', this.getDataValue('bodyUniqueId') + '/' + value)
            }
        },
        name: {
            type: DataTypes.STRING,
            required: true
        }
    })

    Session.belongsTo(connection.import('./body'))

    return Session
}
