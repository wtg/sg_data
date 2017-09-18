'use strict'

const connection = require('./models')
const axios = require('axios')

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
        { rcsId: 'qiaot' },
        { rcsId: 'warnes3' },
        { rcsId: 'ferras4' },
        { rcsId: 'millej19' },
        { rcsId: 'meese' },
        { rcsId: 'merroh' },
        { rcsId: 'raov3' },
        { rcsId: 'speras' },
        { rcsId: 'bushn' },
        { rcsId: 'crochm' },
        { rcsId: 'duducs' },
        { rcsId: 'rowank' },
        { rcsId: 'duffyc2' },
        { rcsId: 'lettkm' },
        { rcsId: 'thomaj14' },
        { rcsId: 'wangl17' },
        { rcsId: 'ashlea' },
        { rcsId: 'angelj2' },
        { rcsId: 'bishoa3' },
        { rcsId: 'gardnm4' },
        { rcsId: 'jennis4' },
        { rcsId: 'pandak' },
        { rcsId: 'kochms' },
        { rcsId: 'pollen' },
        { rcsId: 'gabbis' },
        { rcsId: 'wangt9' },
        { rcsId: 'carawc' },
        { rcsId: 'venusj2' },
        { rcsId: 'freedj2' },
        { rcsId: 'cosarm' },
        { rcsId: 'chopry' },
        { rcsId: 'ilorip' }
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
            name: 'Greek Senator (IFC)',
            bodyUniqueId: 'senate',
            voting: true,
            officer: false
        },
        {
            name: 'Independent Senator',
            bodyUniqueId: 'senate',
            voting: true,
            officer: false
        },
        {
            name: 'Graduate Senator',
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
            personRcsId: 'raov3',
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
            personRcsId: 'rowank',
            name: 'Class of 2019 Senator',
            startDate: '2017-04-07',
            positionId: 11,
            sessionUniqueId: '48',
            bodyUniqueId: 'senate'
        },
        {
            personRcsId: 'crochm',
            name: 'Class of 2019 Senator',
            startDate: '2017-04-07',
            positionId: 11,
            sessionUniqueId: '48',
            bodyUniqueId: 'senate'
        },
        {
            personRcsId: 'duducs',
            name: 'Class of 2019 Senator',
            startDate: '2017-09-08',
            positionId: 11,
            sessionUniqueId: '48',
            bodyUniqueId: 'senate'
        },
        {
            personRcsId: 'duffyc2',
            name: 'Class of 2020 Senator',
            startDate: '2017-04-07',
            positionId: 12,
            sessionUniqueId: '48',
            bodyUniqueId: 'senate'
        },
        {
            personRcsId: 'wangl17',
            name: 'Class of 2020 Senator',
            startDate: '2017-04-07',
            positionId: 12,
            sessionUniqueId: '48',
            bodyUniqueId: 'senate'
        },
        {
            personRcsId: 'thomaj14',
            name: 'Class of 2020 Senator',
            startDate: '2017-04-07',
            positionId: 12,
            sessionUniqueId: '48',
            bodyUniqueId: 'senate'
        },
        {
            personRcsId: 'lettkm',
            name: 'Class of 2020 Senator',
            startDate: '2017-04-07',
            positionId: 12,
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
            positionId: 18,
            sessionUniqueId: '46',
            bodyUniqueId: 'senate'
        },
        {
            personRcsId: 'ferras4',
            name: 'Greek Senator (IFC)',
            startDate: '2017-04-07',
            positionId: 15,
            sessionUniqueId: '48',
            bodyUniqueId: 'senate'
        },
        {
            personRcsId: 'qiaot',
            name: 'Independent Senator',
            startDate: '2017-04-07',
            positionId: 16,
            sessionUniqueId: '48',
            bodyUniqueId: 'senate'
        },
        {
            personRcsId: 'warnes3',
            name: 'Independent Senator',
            startDate: '2017-04-07',
            positionId: 16,
            sessionUniqueId: '48',
            bodyUniqueId: 'senate'
        },
        {
            personRcsId: 'pandak',
            name: 'Graduate Senator',
            startDate: '2017-04-07',
            positionId: 17,
            sessionUniqueId: '48',
            bodyUniqueId: 'senate'
        },
        {
            personRcsId: 'jennis4',
            name: 'Graduate Senator',
            startDate: '2017-04-07',
            positionId: 17,
            sessionUniqueId: '48',
            bodyUniqueId: 'senate'
        },
        {
            personRcsId: 'bishoa3',
            name: 'Graduate Senator',
            startDate: '2017-04-07',
            positionId: 17,
            sessionUniqueId: '48',
            bodyUniqueId: 'senate'
        },
        {
            personRcsId: 'ashlea',
            name: 'Graduate Senator',
            startDate: '2017-04-07',
            positionId: 17,
            sessionUniqueId: '48',
            bodyUniqueId: 'senate'
        },
        {
            personRcsId: 'gardnm4',
            name: 'Graduate Senator',
            startDate: '2017-04-07',
            positionId: 17,
            sessionUniqueId: '48',
            bodyUniqueId: 'senate'
        },
        {
            personRcsId: 'angelj2',
            name: 'Graduate Senator',
            startDate: '2017-04-07',
            positionId: 17,
            sessionUniqueId: '48',
            bodyUniqueId: 'senate'
        }
    ]))

    .then(() => connection.model('subbody').bulkCreate([
        {
            uniqueId: 'aac',
            sessionUniqueId: '48',
            bodyUniqueId: 'senate',
            name: 'Academic Affairs Committee'
        },
        {
            uniqueId: 'crc',
            sessionUniqueId: '48',
            bodyUniqueId: 'senate',
            name: 'Community Relations Committee'
        },
        {
            uniqueId: 'fsc',
            sessionUniqueId: '48',
            bodyUniqueId: 'senate',
            name: 'Facilities and Services Committee'
        },
        {
            uniqueId: 'hsac',
            sessionUniqueId: '48',
            bodyUniqueId: 'senate',
            name: 'Hospitality Services Advisory Committee'
        },
        {
            uniqueId: 'irc',
            sessionUniqueId: '48',
            bodyUniqueId: 'senate',
            name: 'Internal Reforms Committee'
        },
        {
            uniqueId: 'rne',
            sessionUniqueId: '48',
            bodyUniqueId: 'senate',
            name: 'Rules & Elections Committee'
        },
        {
            uniqueId: 'slc',
            sessionUniqueId: '48',
            bodyUniqueId: 'senate',
            name: 'Student Life Committee'
        },
        {
            uniqueId: 'sgcc',
            sessionUniqueId: '48',
            bodyUniqueId: 'senate',
            name: 'Student Government Communications Committee'
        },
        {
            uniqueId: 'uar',
            sessionUniqueId: '48',
            bodyUniqueId: 'senate',
            name: 'Union Annual Report Committee'
        },
        {
            uniqueId: 'wtg',
            sessionUniqueId: '48',
            bodyUniqueId: 'senate',
            name: 'Web Technologies Group'
        }
    ]))

    .then(() => connection.model('meeting').bulkCreate([
        {
            sessionUniqueId: '48',
            bodyUniqueId: 'senate',
            date: '2017-04-10',
            location: 'Ellsworth Room (RU 3602)'
        },
        {
            sessionUniqueId: '48',
            bodyUniqueId: 'senate',
            date: '2017-04-17',
            location: 'Shelnutt (RU 3606)'
        },
        {
            sessionUniqueId: '48',
            bodyUniqueId: 'senate',
            date: '2017-04-24',
            location: 'Shelnutt (RU 3606)'
        },
        {
            sessionUniqueId: '48',
            bodyUniqueId: 'senate',
            date: '2017-05-01',
            location: 'Shelnutt (RU 3606)'
        },
        {
            sessionUniqueId: '48',
            bodyUniqueId: 'senate',
            date: '2017-09-02',
            location: 'Brueggeman Room (CBIS)'
        },
        {
            sessionUniqueId: '48',
            bodyUniqueId: 'senate',
            date: '2017-09-11',
            location: 'Shelnutt (RU 3606)'
        },
        {
            sessionUniqueId: '48',
            bodyUniqueId: 'senate',
            date: '2017-09-18',
            location: 'Shelnutt (RU 3606)'
        }
    ]))

    .then(() => {
        const url = "https://spreadsheets.google.com/feeds/list/1WBiEutYCz-EZn1SfJMC3SCGuqmSS9Esgj_V_sZR06Ho/od6/public/values?alt=json"
        return axios.get(url)
    }).then(response => {
        let actions = []

        const membershipIdMappings = {
          "Ellie Mees": 10,
          "Hannah Merrow": 11,
          "Steve Sperazza": 12,
          "Varun Rao": 13,
          "Nancy Bush": 18,
          "Kinsley Rowan": 19,
          "Mary Clare Crochiere": 20,
          "Steve Duduch": 21,
          "Chris Duffy": 22,
          "Lily Wang": 23,
          "Joshua Thomas": 24,
          "Meagan Lettko": 25,
          "Jennie Miller": 26,
          "Sean Ferracioli": 33,
          "Tianyi Qiao": 34,
          "Stefanie Warner": 35,
          "Kinshuk Panda": 36,
          "Stephanie Jennings": 37,
          "Anthony Bishop": 38,
          "Anthony Ashley": 39,
          "Michael Gardner": 40,
          "Jordan Angel": 41
        }

        const subbodyIdMappings = {
            'Academic Affairs Committee': 'aac',
            'Community Relations Committee': 'crc',
            'Facilities and Services Committee': 'fsc',
            'Hospitality Services Advisory Committee': 'hsac',
            'Internal Reforms Committee': 'irc',
            'Rules & Elections Committee': 'rne',
            'Student Life Committee': 'slc',
            'Student Government Communications Committee': 'sgcc',
            'Union Annual Report Committee': 'uar',
            'Web Technologies Group': 'wtg'
        }

        for(var entry of response.data.feed.entry) {
            if(entry["gsx$status"]["t"] != "Not Yet Moved") {
                let a = {
                    description: entry["gsx$descriptor"]["$t"],
                    sessionUniqueId: '48',
                    bodyUniqueId: 'senate',
                    meetingNum: entry["gsx$gbm"]["$t"],
                    actionNum: entry["gsx$motion"]["$t"],
                    text: entry["gsx$motiontext"]["$t"].replace(/\r\n/g, "\n"),
                    status: entry["gsx$status"]["$t"],
                    votesFor: entry["gsx$votesfor"]["$t"],
                    votesAgainst: entry["gsx$votesagainst"]["$t"],
                    abstentions: entry["gsx$abstentions"]["$t"]
                }

                if(membershipIdMappings[entry["gsx$movedby"]["$t"]]) {
                    a.movingMemberId = membershipIdMappings[entry["gsx$movedby"]["$t"]]
                } else if(subbodyIdMappings[entry["gsx$movedby"]["$t"]]) {
                    a.movingSubbodyUniqueId = subbodyIdMappings[entry["gsx$movedby"]["$t"]]
                }

                if(membershipIdMappings[entry["gsx$secondedby"]["$t"]]) {
                    a.secondingMemberId = membershipIdMappings[entry["gsx$secondedby"]["$t"]]
                }



                actions.push(a)
            }
        }

        console.log(actions)

        return connection.model('action').bulkCreate(actions)
    })

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
