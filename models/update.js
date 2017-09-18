'use strict'

module.exports = (connection, DataTypes) => {
    let Update = connection.define('update', {
        title: {
            type: DataTypes.STRING,
            required: true
        }
    })

    Update.associate = models => {
        Update.belongsTo(models['session'])
    }

    Update.queryIncludes = (connection) => {
        return [
            { model: connection.model('session') }
        ]
    }

    return Update
}
