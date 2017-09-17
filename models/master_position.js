'use strict'

module.exports = (connection, DataTypes) => {
    const MasterPosition = connection.define('master_position', {
        name: {
            type: DataTypes.STRING,
            required: true
        }
    })

    MasterPosition.hasMany(connection.model('position'), { foreignKey: 'masterPositionId' })

    return MasterPosition
}
