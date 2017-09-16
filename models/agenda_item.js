'use strict'

module.exports = (connection, DataTypes) => {
    const AgendaItem = connection.define('agenda_item', {
        name: {
            type: DataTypes.STRING,
            required: true
        },
        presenter: {
            type: DataTypes.STRING,
            default: null
        },
        section: {
            type: DataTypes.STRING
        }
    })

    AgendaItem.belongsTo(connection.import('./meeting'))

    return AgendaItem
}
