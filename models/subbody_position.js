'use strict'

module.exports = (connection, DataTypes) => {
    let SubbodyPosition = connection.define('subbody_position', {
        name: {
            type: DataTypes.STRING,
            unique: true
        },
        voting: {
            type: DataTypes.BOOLEAN,
            required: true
        }
    })

    SubbodyPosition.associate = models => {
        SubbodyPosition.belongsTo(models['subbody'])
    }

    return SubbodyPosition
}
