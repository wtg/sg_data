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

    .then(() => connection.model('session').bulkCreate([
        {
            name: '48th Student Senate',
            bodyUniqueId: 'senate',
            uniqueId: '48'
        },
        {
            name: '47th Student Senate',
            bodyUniqueId: 'senate',
            uniqueId: '47'
        },
        {
            name: '46th Student Senate',
            bodyUniqueId: 'senate',
            uniqueId: '46'
        },
        {
            name: '2017-18 Executive Board',
            bodyUniqueId: 'eboard',
            uniqueId: '17-18'
        },
        {
            name: '2017-18 Judicial Board',
            bodyUniqueId: 'jboard',
            uniqueId: '17-18'
        },
        {
            name: '2017-18 Undergraduate Council',
            bodyUniqueId: 'uc',
            uniqueId: '17-18'
        },
        {
            name: '2017-18 Graduate Council',
            bodyUniqueId: 'gc',
            uniqueId: '17-18'
        }
    ]))

    .then(() => connection.model('person').bulkCreate([
        { rcsId: 'etzinj' },
        { rcsId: 'meese' },
        { rcsId: 'warnes3' },
        { rcsId: 'merroh' },
        { rcsId: 'gabbis' },
        { rcsId: 'bushn' },
        { rcsId: 'gardnm4' },
        { rcsId: 'venusj2' },
        { rcsId: 'speras' },
        { rcsId: 'ilorip' },
        { rcsId: 'millej19' }
    ]))

    .then(() => connection.model('position').bulkCreate([
        {
            name: 'Grand Marshal',
            bodyUniqueId: 'senate',
            voting: false,
            officer: true
        },
        {
            name: 'Vice Chairperson of the Senate',
            bodyUniqueId: 'senate',
            voting: false,
            officer: true
        },
        {
            name: 'Student Government Communications Chairperson',
            bodyUniqueId: 'senate',
            voting: false,
            officer: true
        },
        {
            name: 'Student Life Committee Chairperson',
            bodyUniqueId: 'senate',
            voting: false,
            officer: true
        },
        {
            name: 'Academic Affairs Committee Chairperson',
            bodyUniqueId: 'senate',
            voting: false,
            officer: true
        },
        {
            name: 'Facilities and Services Chairperson',
            bodyUniqueId: 'senate',
            voting: false,
            officer: true
        },
        {
            name: 'Community Relations Committee Chairperson',
            bodyUniqueId: 'senate',
            voting: false,
            officer: true
        },
        {
            name: 'Senate-Executive Board Liaison',
            bodyUniqueId: 'senate',
            voting: false,
            officer: true
        },
        {
            name: 'Internal Reforms Committee Chairperson',
            bodyUniqueId: 'senate',
            voting: false,
            officer: true
        },
        {
            name: 'Class of 2018 Senator',
            bodyUniqueId: 'senate',
            voting: true,
            officer: false
        },
        {
            name: 'Class of 2019 Senator',
            bodyUniqueId: 'senate',
            voting: true,
            officer: false
        },
        {
            name: 'Class of 2020 Senator',
            bodyUniqueId: 'senate',
            voting: true,
            officer: false
        },
        {
            name: 'Class of 2021 Senator',
            bodyUniqueId: 'senate',
            voting: true,
            officer: false
        },
        {
            name: 'Greek Senator (Panhellenic)',
            bodyUniqueId: 'senate',
            voting: true,
            officer: false
        },
        {
            name: 'Web Technologies Group Chairperson',
            bodyUniqueId: 'senate',
            voting: false,
            officer: true
        }
    ]))

    .then(() => connection.model('membership').bulkCreate([
        {
            personRcsId: 'etzinj',
            name: '152nd Grand Marshal',
            startDate: '2017-04-07',
            positionId: 1,
            sessionUniqueId: '48',
            bodyUniqueId: 'senate'
        },
        {
            personRcsId: 'ilorip',
            name: '151st Grand Marshal',
            startDate: '2016-04-15',
            endDate: '2017-04-07',
            positionId: 1,
            sessionUniqueId: '47',
            bodyUniqueId: 'senate'
        },
        {
            personRcsId: 'warnes3',
            name: 'Student Government Communications Committee',
            startDate: '2017-04-07',
            positionId: 3,
            sessionUniqueId: '47',
            bodyUniqueId: 'senate'
        },
        {
            personRcsId: 'merroh',
            name: 'Student Life Committee Chairperson',
            startDate: '2017-04-07',
            positionId: 4,
            sessionUniqueId: '48',
            bodyUniqueId: 'senate'
        },
        {
            personRcsId: 'gabbis',
            name: 'Academic Affairs Committee Chairperson',
            startDate: '2017-04-07',
            positionId: 5,
            sessionUniqueId: '48',
            bodyUniqueId: 'senate'
        },
        {
            personRcsId: 'bushn',
            name: 'Facilities and Services Committee Chairperson',
            startDate: '2017-04-07',
            positionId: 6,
            sessionUniqueId: '48',
            bodyUniqueId: 'senate'
        },
        {
            personRcsId: 'gardnm4',
            name: 'Community Relations Committee Chairperson',
            startDate: '2017-04-07',
            positionId: 7,
            sessionUniqueId: '48',
            bodyUniqueId: 'senate'
        },
        {
            personRcsId: 'venusj2',
            name: 'Senate-Executive Board Liaison',
            startDate: '2017-04-07',
            positionId: 8,
            sessionUniqueId: '48',
            bodyUniqueId: 'senate'
        },
        {
            personRcsId: 'speras',
            name: 'Internal Reforms Committee Chairperson',
            startDate: '2017-04-07',
            positionId: 9,
            sessionUniqueId: '48',
            bodyUniqueId: 'senate'
        },
        {
            personRcsId: 'meese',
            name: 'Class of 2018 Senator',
            startDate: '2017-04-07',
            positionId: 10,
            sessionUniqueId: '48',
            bodyUniqueId: 'senate'
        },
        {
            personRcsId: 'merroh',
            name: 'Class of 2018 Senator',
            startDate: '2017-04-07',
            positionId: 10,
            sessionUniqueId: '48',
            bodyUniqueId: 'senate'
        },
        {
            personRcsId: 'speras',
            name: 'Class of 2018 Senator',
            startDate: '2017-04-07',
            positionId: 10,
            sessionUniqueId: '48',
            bodyUniqueId: 'senate'
        },
        {
            personRcsId: 'speras',
            name: 'Class of 2018 Senator',
            startDate: '2016-04-15',
            endDate: '2017-04-07',
            positionId: 10,
            sessionUniqueId: '47',
            bodyUniqueId: 'senate'
        },
        {
            personRcsId: 'etzinj',
            name: 'Class of 2018 Senator',
            startDate: '2016-04-15',
            endDate: '2017-04-07',
            positionId: 10,
            sessionUniqueId: '47',
            bodyUniqueId: 'senate'
        },
        {
            personRcsId: 'etzinj',
            name: 'Class of 2018 Senator',
            startDate: '2015-04-15',
            endDate: '2016-04-15',
            positionId: 10,
            sessionUniqueId: '46',
            bodyUniqueId: 'senate'
        },
        {
            personRcsId: 'etzinj',
            name: 'Class of 2018 Senator',
            startDate: '2014-09-27',
            endDate: '2015-04-15',
            positionId: 10,
            sessionUniqueId: '46',
            bodyUniqueId: 'senate'
        },
        {
            personRcsId: 'bushn',
            name: 'Class of 2019 Senator',
            startDate: '2017-04-07',
            positionId: 11,
            sessionUniqueId: '48',
            bodyUniqueId: 'senate'
        },
        {
            personRcsId: 'millej19',
            name: 'Greek Senator (Panhellenic)',
            startDate: '2017-04-07',
            positionId: 14,
            sessionUniqueId: '48',
            bodyUniqueId: 'senate'
        },
        {
            personRcsId: 'etzinj',
            name: 'Student Life Committee Chairperson',
            startDate: '2016-04-15',
            endDate: '2017-04-07',
            positionId: 4,
            sessionUniqueId: '47',
            bodyUniqueId: 'senate'
        },
        {
            personRcsId: 'ilorip',
            name: 'Student Life Committee Chairperson',
            startDate: '2015-04-15',
            endDate: '2016-04-15',
            positionId: 4,
            sessionUniqueId: '46',
            bodyUniqueId: 'senate'
        },
        {
            personRcsId: 'meese',
            name: 'Vice Chairperson of the Senate',
            startDate: '2017-04-07',
            positionId: 2,
            sessionUniqueId: '48',
            bodyUniqueId: 'senate'
        },
        {
            personRcsId: 'venusj2',
            name: 'Vice Chairperson of the Senate',
            startDate: '2016-04-15',
            endDate: '2017-04-07',
            positionId: 2,
            sessionUniqueId: '47',
            bodyUniqueId: 'senate'
        },
        {
            personRcsId: 'meese',
            name: 'Student Government Communications Committee',
            startDate: '2017-02-01',
            endDate: '2017-04-07',
            positionId: 3,
            sessionUniqueId: '47',
            bodyUniqueId: 'senate'
        },
        {
            personRcsId: 'etzinj',
            name: 'Web Technologies Group Chairperson',
            startDate: '2015-04-15',
            endDate: '2016-04-15',
            positionId: 15,
            sessionUniqueId: '46',
            bodyUniqueId: 'senate'
        },
    ]))

    .then(() => connection.model('meeting').bulkCreate([
        {
            sessionUniqueId: '48',
            bodyUniqueId: 'senate',
            date: '2017-04-10',
            location: 'Ellsworth Room (RU 3602)'
        }
    ]))

    .then(() => connection.model('action').bulkCreate([
        {
            sessionUniqueId: '48',
            bodyUniqueId: 'senate',
            meetingNum: 1,
            description: 'Confirmation of Interim Officer Appointments',
            text: "The Rensselaer Union 48th Student Senate hereby RESOLVES:\n1. To confirm the Grand Marshal’s interim appointments of:\n    1. Jennie Miller '19 as Interim Parliamentarian;\n    2. David Raab '19 as Interim Rules and Elections Chair;\n    3. Varun Rao '18 as Interim Academic Affairs Chair;\n    4. Austin Miller '17 as Interim Facilities and Services Chair;\n    5. Ellie Mees '18 as Interim Student Life Chair;\n    6. Ellie Mees '18 as Interim Student Government Communications Chair;\n    7. Leo Gallo '19 as Interim Community Relations Chair; and\n    8. Sidney Kochman ’19 as Interim Web Technologies Chair.",
            status: "Passed",
            votesFor: 19,
            votesAgainst: 0,
            abstentions: 0,
            movingMemberId: 17,
            secondingMemberId: 18
        },
        {
            sessionUniqueId: '48',
            bodyUniqueId: 'senate',
            meetingNum: 1,
            description: 'Internal Reforms Committee Formation',
            text: "The Rensselaer Union 48th Student Senate hereby RESOLVES:\n1. To establish the Internal Reforms Committee as a standing committee of the Student Senate.",
            status: "Passed",
            votesFor: 18,
            votesAgainst: 0,
            abstentions: 1,
            movingMemberId: 18,
            secondingMemberId: 17
        }
    ]))

    // .then(() => connection.model('position').create({
    //     name: '152nd Grand Marshal',
    //     masterPositionId: 1,
    //     bodyUniqueId: 'senate',
    //     sessionUniqueId: '48',
    //     voting: false,
    //     officer: true
    // })).then(() => connection.model('position').create({
    //     name: 'Student Life Committee Chairperson',
    //     masterPositionId: 2,
    //     bodyUniqueId: 'senate',
    //     sessionUniqueId: '48',
    //     voting: false,
    //     officer: true
    // })).then(() => connection.model('position').create({
    //     name: 'Student Life Committee Chairperson',
    //     masterPositionId: 2,
    //     bodyUniqueId: 'senate',
    //     sessionUniqueId: '47',
    //     voting: false,
    //     officer: true
    // }))

    // .then(() => connection.model('master_subbody').create({
    //     name: 'Student Life Committee',
    //     uniqueId: 'slc',
    //     bodyUniqueId: 'senate'
    // }))

    // .then(() => connection.model('subbody').create({
    //     name: 'Student Life Committee',
    //     uniqueId: 'slc',
    //     sessionUniqueId: '48',
    //     bodyUniqueId: 'senate',
    //     presidingPositionId: 1
    // })).then(() => connection.model('subbody').create({
    //     name: 'Student Life Committee',
    //     uniqueId: 'slc',
    //     sessionUniqueId: '47',
    //     bodyUniqueId: 'senate',
    //     presidingPositionId: 2
    // }))
    //
    // .then(() => connection.model('membership').create({
    //     personRcsId: 'merroh',
    //     startDate: '2017-04-07',
    //     positionId: 1,
    // })).then(() => connection.model('membership').create({
    //     personRcsId: 'etzinj',
    //     startDate: '2016-04-30',
    //     endDate: '2017-04-07',
    //     positionId: 2
    // }))


    .then(() => connection.close())
})
