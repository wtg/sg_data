'use strict'

module.exports = (connection, DataTypes) => {
    let Minutes = connection.define('minutes', {
        text: {
            type: DataTypes.TEXT,
            required: true
        }
    })

    Minutes.associate = models => {
        Minutes.belongsTo(models['meeting'])
        Minutes.belongsTo(models['membership'], { as: 'recordingMember' })
    }

    Minutes.queryIncludes = (connection) => {
        return [
            { model: connection.model('meeting') },
            { model: connection.model('membership'), as: 'recordingMember' }
        ]
    }

    return Minutes
}
