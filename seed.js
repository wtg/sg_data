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
        {
            rcsId: 'etzinj',
            name: 'Justin Etzine',
            image: '/img/justin_etzine.jpg',
            biography: 'I believe that each and every student has an inherent right to representation. In my role in as the chief representative of the Student Body, I work hard to represent the student body as effectively as possible.\n\nPreviously, for the 47th Student Senate, I served as the chairman of the Student Senate’s Student Life Committee. The committee ensures that students have the resources for the best possible, well-rounded RPI experience, and also advocates for and protests student rights. Some projects that took place during my term as chairman include a set of recommendations for residence hall improvements based on student feedback, an access proposals for multiple points of entry in residence halls, and recommendations for the upcoming renovations to the student handbook.\n\nFor the 46th Student Senate, I served as the chairman of the Web Technologies Group, where I worked to expand upon the technological services offered to benefit RPI students. Some of these services are Shuttle Tracking, RPI Petitions, and Concerto. I am also working to educate and empower voters with the development of the new elections website. This new and improved service gives students the opportunity to learn more about each candidate’s activities and platform.\n\nOutside of Student Government, I have participated in RPI TV, where I have previously served as business manager and facilities and equipment manager, and RPI Ambulance, where I am training to serve on night crews. I’m also a resident director for the Quadrangle and a former resident assistant for Barton Hall, where I have had the opportunity to instill in my residents the same love for RPI that drives me everyday. Through these outside involvements, I have experienced many aspects of campus, all of which have provided valuable ideas and insights that I have been proud to incorporate into my representation of the students.\n\nI grew up in South Florida, and I am a proud first-generation American. Some of my favorite hobbies include jogging, playing video games, playing tennis, and watching RPI Hockey; go Red, go White!',
            email: 'gm@rpi.edu',
            hometown: 'Hollywood, FL',
            classYear: 'Class of 2018',
            major: 'Computer Science; Information Technology & Web Science',
            committees: 'Ex-officio member of all Senate committees; Student Life Committee (former); Web Technologies Group (former)',
            campusInvolvements: 'Residence Life; RPI Ambulance; ITWS Student Leadership (former); RPI TV (former); The Polytechnic (former)'
        },
        {
            rcsId: 'qiaot',
            name: 'Tianyi Qiao'
        },
        {
            rcsId: 'warnes3',
            name: 'Stefanie Warner'
        },
        {
            rcsId: 'ferras4',
            name: 'Sean Ferracioli'
        },
        {
            rcsId: 'millej19',
            name: 'Jennie Miller'
        },
        {
            rcsId: 'meese',
            name: 'Ellie Mees'
        },
        {
            rcsId: 'merroh',
            name: 'Hannah Merrow'
        },
        {
            rcsId: 'raov3',
            name: 'Varun Rao'
        },
        {
            rcsId: 'speras',
            name: 'Steve Sperazza'
        },
        {
            rcsId: 'bushn',
            name: 'Nancy Bush'
        },
        {
            rcsId: 'crochm',
            name: 'Mary Clare Crochiere'
        },
        {
            rcsId: 'duducs',
            name: 'Stephen Duduch'
        },
        {
            rcsId: 'rowank',
            name: 'Kinsley Rowan'
        },
        {
            rcsId: 'duffyc2',
            name: 'Chris Duffy'
        },
        {
            rcsId: 'lettkm',
            name: 'Meagan Lettko'
        },
        {
            rcsId: 'thomaj14',
            name: 'Joshua Thomas'
        },
        {
            rcsId: 'wangl17',
            name: 'Lily Wang'
        },
        {
            rcsId: 'ashlea',
            name: 'Anthony Ashley'
        },
        {
            rcsId: 'angelj2',
            name: 'Jordan Angel'
        },
        {
            rcsId: 'bishoa3',
            name: 'Anthony Bishop'
        },
        {
            rcsId: 'gardnm4',
            name: 'Michael Gardner'
        },
        {
            rcsId: 'jennis4',
            name: 'Stephanie Jennings'
        },
        {
            rcsId: 'pandak',
            name: 'Kinshuk Panda'
        },
        {
            rcsId: 'kochms',
            name: 'Sidney Kochman'
        },
        {
            rcsId: 'pollen',
            name: 'Nino Polletta'
        },
        {
            rcsId: 'gabbis',
            name: 'Risheel Gabbireddy'
        },
        {
            rcsId: 'wangt9',
            name: 'Tim Wang'
        },
        {
            rcsId: 'carawc',
            name: 'Caleb Caraway'
        },
        {
            rcsId: 'venusj2',
            name: 'Joe Venusto'
        },
        {
            rcsId: 'freedj2',
            name: 'Jennifer Freedberg'
        },
        {
            rcsId: 'cosarm',
            name: 'Marvin Cosare'
        },
        {
            rcsId: 'chopry',
            name: 'Yuvi Chopra'
        },
        {
            rcsId: 'ilorip',
            name: 'Paul Ilori'
        },
        {
            rcsId: 'randm',
            name: 'Matthew Rand'
        },
        {
            rcsId: 'jamesn2',
            name: 'Nathan James'
        },
        {
            rcsId: 'cinnak',
            name: 'Kayla Cinnamon'
        },
        {
            rcsId: 'scotts',
            name: 'Spencer Scott'
        }
    ]))

    .then(() => connection.model('position').bulkCreate([
        {
            name: 'Grand Marshal',
            bodyUniqueId: 'senate',
            voting: false,
            officer: true,
            presidingOfficer: true
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
        },
        {
            name: 'President of the Union',
            bodyUniqueId: 'eboard',
            voting: false,
            officer: true,
            presidingOfficer: true
        },
        {
            name: 'Judicial Board Chairman',
            bodyUniqueId: 'jboard',
            voting: false,
            officer: true,
            presidingOfficer: true
        },
        {
            name: 'Undergraduate President',
            bodyUniqueId: 'uc',
            voting: false,
            officer: true,
            presidingOfficer: true
        },
        {
            name: 'Graduate Council President',
            bodyUniqueId: 'gc',
            voting: false,
            officer: true,
            presidingOfficer: true
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
        },
        {
            personRcsId: 'randm',
            name: '128th President of the Union',
            startDate: '2017-04-07',
            positionId: 19,
            sessionUniqueId: '17-18',
            bodyUniqueId: 'eboard'
        },
        {
            personRcsId: 'jamesn2',
            name: 'Judicial Board Chairman',
            startDate: '2017-04-07',
            positionId: 20,
            sessionUniqueId: '17-18',
            bodyUniqueId: 'jboard'
        },
        {
            personRcsId: 'cinnak',
            name: 'Undergraduate President',
            startDate: '2017-04-07',
            positionId: 21,
            sessionUniqueId: '17-18',
            bodyUniqueId: 'uc'
        },
        {
            personRcsId: 'scotts',
            name: 'Graduate Council President',
            startDate: '2017-04-07',
            positionId: 22,
            sessionUniqueId: '17-18',
            bodyUniqueId: 'gc'
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
