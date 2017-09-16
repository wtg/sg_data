'use strict'

module.exports = (connection, DataTypes) => {
    const Update = connection.define('update', {
        title: {
            type: DataTypes.STRING,
            required: true
        }
    })

    Update.belongsTo(connection.import('./session'))

    return Update
}
