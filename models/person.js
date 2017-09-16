'use strict'

module.exports = (connection, DataTypes) => {
    const Person = connection.define('person', {
        username: {
            type: DataTypes.STRING,
            unique: true
        },
        studentId: {
            type: DataTypes.STRING(9)
        }
    })

    return Person
}
