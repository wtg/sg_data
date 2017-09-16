'use strict'

module.exports = (connection, DataTypes) => {
    const Minutes = connection.define('minutes', {
        text: {
            type: DataTypes.TEXT,
            required: true
        }
    })

    Minutes.belongsTo(connection.import('./meeting'))
    Minutes.belongsTo(connection.import('./membership'), { as: 'recordingMember' })

    return Minutes
}
