'use strict'

module.exports = (connection, DataTypes) => {
    const Person = connection.define('person', {
        rcsId: {
            type: DataTypes.STRING,
            primaryKey: true,
            required: true
        },
        studentId: {
            type: DataTypes.STRING(9)
        }
    })

    return Person
}
