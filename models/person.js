'use strict'

const showdown = require('showdown')
const converter = new showdown.Converter()

module.exports = (connection, DataTypes) => {
    let Person = connection.define('person', {
        rcsId: {
            type: DataTypes.STRING,
            primaryKey: true,
            required: true
        },
        name: {
            type: DataTypes.STRING,
            default: null
        },
        image: {
            type: DataTypes.STRING,
            default: null,
            validate: {
                isUrl: true
            }
        },
        biography: {
            type: DataTypes.TEXT,
            default: null
        },
        biographyHtml: {
            type: DataTypes.VIRTUAL(DataTypes.STRING, [
                'biography'
            ]),
            get() {
                return converter.makeHtml(this.get('biography') || '')
            }
        },
        email: {
            type: DataTypes.STRING(255),
            default: null,
            validate: {
                isEmail: true
            }
        },
        hometown: {
            type: DataTypes.STRING,
            default: null
        },
        classYear: {
            type: DataTypes.STRING,
            default: null
        },
        major: {
            type: DataTypes.STRING,
            default: null
        },
        committees: {
            type: DataTypes.STRING,
            default: null
        },
        campusInvolvements: {
            type: DataTypes.STRING,
            default: null
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
