'use strict'

module.exports = (connection, DataTypes) => {
    let Person = connection.define('person', {
        rcsId: {
            type: DataTypes.STRING,
            primaryKey: true,
            required: true
        },
        studentId: {
            type: DataTypes.STRING(9)
        }
    })

    Person.associate = models => {
        Person.hasMany(models['membership'], {
            foreignKey: 'personRcsId'
        })
    }

    Person.queryIncludes = (connection) => {
        return [{
            model: connection.model('membership')
        }]
    }

    return Person
}
