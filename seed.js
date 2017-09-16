'use strict'

const connection = require('./models')

connection.sync({ force: true }).then(() => {
    let promises = []

    connection.model('body').bulkCreate([
        {
            name: 'Student Senate',
            uniqueId: 'senate'
        },
        {
            name: 'Executive Board',
            uniqueId: 'eboard'
        },
        {
            name: 'Judicial Board',
            uniqueId: 'jboard'
        },
        {
            name: 'Undergraduate Council',
            uniqueId: 'uc'
        },
        {
            name: 'Graduate Council',
            uniqueId: 'gc'
        }
    ])


    .then(() => connection.model('session').create({
        name: '48th Student Senate',
        bodyUniqueId: 'senate',
        uniqueId: '48'
    })).then(() => connection.model('session').create({
        name: '47th Student Senate',
        bodyUniqueId: 'senate',
        uniqueId: '47'
    })).then(() => connection.model('session').create({
        name: '2017-18 Executive Board',
        bodyUniqueId: 'eboard',
        uniqueId: '17-18'
    })).then(() => connection.model('session').create({
        name: '2017-18 Judicial Board',
        bodyUniqueId: 'jboard',
        uniqueId: '17-18'
    }))

    .then(() => connection.model('person').create({
        rcsId: 'etzinj'
    })).then(() => connection.model('person').create({
        rcsId: 'merroh'
    }))

    .then(() => connection.model('position').create({
        name: 'Student Life Committee Chairperson',
        bodyUniqueId: 'senate',
        sessionUniqueId: '48',
        voting: false,
        officer: true
    })).then(() => connection.model('position').create({
        name: 'Student Life Committee Chairperson',
        bodyUniqueId: 'senate',
        sessionUniqueId: '47',
        voting: false,
        officer: true
    }))

    .then(() => connection.model('subbody').create({
        name: 'Student Life Committee',
        uniqueId: 'slc',
        sessionUniqueId: '48',
        bodyUniqueId: 'senate',
        presidingPositionId: 1
    })).then(() => connection.model('subbody').create({
        name: 'Student Life Committee',
        uniqueId: 'slc',
        sessionUniqueId: '47',
        bodyUniqueId: 'senate',
        presidingPositionId: 1
    }))

    .then(() => connection.model('membership').create({
        personRcsId: 'merroh',
        startDate: '2017-04-07',
        positionId: 1,
    })).then(() => connection.model('membership').create({
        personRcsId: 'etzinj',
        startDate: '2016-04-30',
        endDate: '2017-04-07',
        positionId: 2
    }))
})
