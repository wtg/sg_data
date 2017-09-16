'use strict'

module.exports = (connection, DataTypes) => {
    const SubbodyPosition = connection.define('subbody_position', {
        name: {
            type: DataTypes.STRING,
            unique: true
        },
        voting: {
            type: DataTypes.BOOLEAN,
            required: true
        }
    })

    SubbodyPosition.belongsTo(connection.import('./subbody'))

    return SubbodyPosition
}
