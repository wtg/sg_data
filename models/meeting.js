'use strict'

const Sequelize = require('sequelize')
const moment = require('moment')
const showdown = require('showdown')
const converter = new showdown.Converter()

module.exports = (connection, DataTypes) => {
    let Meeting = connection.define('meeting', {
        bodyUniqueId: {
            type: DataTypes.STRING,
            primaryKey: true,
            required: true
        },
        sessionUniqueId: {
            type: DataTypes.STRING,
            primaryKey: true,
            required: true
        },
        meetingNum: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        date: {
            type: DataTypes.DATEONLY,
            required: true
        },
        displayDate: {
            type: DataTypes.VIRTUAL(DataTypes.STRING, [ 'date' ]),
            get() {
                return moment(this.date).format('MMMM Do, YYYY')
            }
        },
        location: {
            type: DataTypes.STRING,
            required: true
        },
        minutesText: {
            type: DataTypes.TEXT,
            required: true,
            defaultValue: ""
        },
        minutesHtml: {
            type: DataTypes.VIRTUAL(DataTypes.STRING, [
                'minutesText'
            ]),
            get() {
                return converter.makeHtml(this.get('minutesText') || '')
            }
        }
    })

    Meeting.associate = models => {
        Meeting.belongsTo(models['session'], {
            targetKey: 'uniqueId',
            foreignKey: 'sessionUniqueId'
        })

        Meeting.belongsTo(models['session'], {
            targetKey: 'bodyUniqueId',
            foreignKey: 'bodyUniqueId'
        })

        Meeting.belongsTo(models['membership'], { as: 'recordingMember' })
    }

    Meeting.queryIncludes = (connection) => {
        return [
            {
                model: connection.model('session'),
                where: {
                    $and: {
                        uniqueId: { $eq: Sequelize.col('meeting.sessionUniqueId') },
                        bodyUniqueId: { $eq: Sequelize.col('meeting.bodyUniqueId') }
                    }
                }
            }
        ]
    }

    return Meeting
}
