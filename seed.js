'use strict'

const connection = require('./models')
const axios = require('axios')

connection.sync({ force: true }).then(() => {
    let bodyPresidingOfficerMap = {}

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
            uniqueId: '48',
            active: true
        },
        {
            name: '47th Student Senate',
            bodyUniqueId: 'senate',
            uniqueId: '47',
            active: false
        },
        {
            name: '46th Student Senate',
            bodyUniqueId: 'senate',
            uniqueId: '46',
            active: false
        },
        {
            name: '2017-18 Executive Board',
            bodyUniqueId: 'eboard',
            uniqueId: '17-18',
            active: true
        },
        {
            name: '2017-18 Judicial Board',
            bodyUniqueId: 'jboard',
            uniqueId: '17-18',
            active: true
        },
        {
            name: '2017-18 Undergraduate Council',
            bodyUniqueId: 'uc',
            uniqueId: '17-18',
            active: true
        },
        {
            name: '2017-18 Graduate Council',
            bodyUniqueId: 'gc',
            uniqueId: '17-18',
            active: true
        }
    ]))

    .then(() => connection.model('person').bulkCreate([
        {
            rcsId: 'etzinj',
            name: 'Justin Etzine',
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
        },
        {
            rcsId: 'baoj2',
            name: 'Jonathan Bao'
        },
        {
            rcsId: 'hilln2',
            name: 'Naya Hill'
        },
        {
            rcsId: 'mathem2',
            name: 'Michael Mathews'
        },
        {
            rcsId: 'naraya5',
            name: 'Advaith Narayan'
        },
        {
            rcsId: 'cuozzm',
            name: 'Michael Cuozzo'
        },
        {
            rcsId: 'sunr2',
            name: 'Kay Sun'
        },
        {
            rcsId: 'lanee',
            name: 'Erica Lane'
        },
        {
            rcsId: 'etemai',
            name: 'Ida Etemadi'
        },
        {
            rcsId: 'choina',
            name: 'Anissa Choiniere'
        },
        {
            rcsId: 'pencil',
            name: 'Lauren Pencille'
        },
        {
            rcsId: 'bermaj',
            name: 'Joshua Berman'
        },
        {
            rcsId: 'bucklb',
            name: 'Brenna Buckley'
        },
        {
            rcsId: 'babuv',
            name: 'Vignesh Babu'
        },
        {
            rcsId: 'lyonsj7',
            name: 'Josephine Lyons'
        },
        {
            rcsId: 'lazere',
            name: 'Evan Lazaro'
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
            name: 'Student Government Communications Committee Chairperson',
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
            name: 'Facilities and Services Committee Chairperson',
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
            name: 'Parliamentarian',
            bodyUniqueId: 'senate',
            voting: false,
            officer: true
        },
        {
            name: 'Treasurer',
            bodyUniqueId: 'senate',
            voting: false,
            officer: true
        },
        {
            name: 'Secretary',
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
            name: 'Judicial Board Chairperson',
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
        },
        {
            name: 'Human Resources Interview Committee Chairperson',
            bodyUniqueId: 'senate',
            voting: false,
            officer: true
        },
        {
            name: 'Hospitality Services Advisory Committee Chairperson',
            bodyUniqueId: 'senate',
            voting: false,
            officer: true
        },
        {
            name: 'Rules and Elections Committee Chairperson',
            bodyUniqueId: 'senate',
            voting: false,
            officer: true
        },
        {
            name: 'Union Business Operations Committee Chairperson',
            bodyUniqueId: 'eboard',
            voting: false,
            officer: true
        },
        {
            name: 'Union Club Operations Committee Chairperson',
            bodyUniqueId: 'eboard',
            voting: false,
            officer: true
        },
        {
            name: 'Union Marketing, Advertising, and Publicity Committee Chairperson',
            bodyUniqueId: 'eboard',
            voting: false,
            officer: true
        },
        {
            name: 'Union Policies Committee Chairperson',
            bodyUniqueId: 'eboard',
            voting: false,
            officer: true
        },
        {
            name: 'Union Programming and Activities Committee Chairperson',
            bodyUniqueId: 'eboard',
            voting: false,
            officer: true
        },
        {
            name: 'Student Motor Vehicle Court Chairperson',
            bodyUniqueId: 'jboard',
            voting: false,
            officer: true
        },
        {
            name: 'Class of 2018 President',
            bodyUniqueId: 'uc',
            voting: true,
            officer: false
        },
        {
            name: 'Class of 2019 President',
            bodyUniqueId: 'uc',
            voting: true,
            officer: false
        },
        {
            name: 'Class of 2020 President',
            bodyUniqueId: 'uc',
            voting: true,
            officer: false
        },
        {
            name: 'Class of 2021 President',
            bodyUniqueId: 'uc',
            voting: true,
            officer: false
        }
    ]))

    .then(() => connection.model('position').findAll())

    .then(positions => {
        let positionNameIdMap = {}

        for(const p of positions) {
            positionNameIdMap[p.dataValues.name] = p.dataValues.id
        }

        let memberships = [
            {
                personRcsId: 'etzinj',
                name: '152nd Grand Marshal',
                tempPositionName: 'Grand Marshal',
                startDate: '2017-04-07',
                sessionUniqueId: '48',
                bodyUniqueId: 'senate'
            },
            {
                personRcsId: 'ilorip',
                name: '151st Grand Marshal',
                tempPositionName: 'Grand Marshal',
                startDate: '2016-04-15',
                endDate: '2017-04-07',
                sessionUniqueId: '47',
                bodyUniqueId: 'senate'
            },
            {
                personRcsId: 'warnes3',
                name: 'Student Government Communications Committee Chairperson',
                startDate: '2017-04-07',
                sessionUniqueId: '48',
                bodyUniqueId: 'senate'
            },
            {
                personRcsId: 'merroh',
                name: 'Student Life Committee Chairperson',
                startDate: '2017-04-07',
                sessionUniqueId: '48',
                bodyUniqueId: 'senate'
            },
            {
                personRcsId: 'gabbis',
                name: 'Academic Affairs Committee Chairperson',
                startDate: '2017-04-07',
                sessionUniqueId: '48',
                bodyUniqueId: 'senate'
            },
            {
                personRcsId: 'bushn',
                name: 'Facilities and Services Committee Chairperson',
                startDate: '2017-04-07',
                sessionUniqueId: '48',
                bodyUniqueId: 'senate'
            },
            {
                personRcsId: 'gardnm4',
                name: 'Community Relations Committee Chairperson',
                startDate: '2017-04-07',
                sessionUniqueId: '48',
                bodyUniqueId: 'senate'
            },
            {
                personRcsId: 'venusj2',
                name: 'Senate-Executive Board Liaison',
                startDate: '2017-04-07',
                sessionUniqueId: '48',
                bodyUniqueId: 'senate'
            },
            {
                personRcsId: 'speras',
                name: 'Internal Reforms Committee Chairperson',
                startDate: '2017-04-07',
                sessionUniqueId: '48',
                bodyUniqueId: 'senate'
            },
            {
                personRcsId: 'meese',
                name: 'Class of 2018 Senator',
                startDate: '2017-04-07',
                sessionUniqueId: '48',
                bodyUniqueId: 'senate'
            },
            {
                personRcsId: 'merroh',
                name: 'Class of 2018 Senator',
                startDate: '2017-04-07',
                sessionUniqueId: '48',
                bodyUniqueId: 'senate'
            },
            {
                personRcsId: 'speras',
                name: 'Class of 2018 Senator',
                startDate: '2017-04-07',
                sessionUniqueId: '48',
                bodyUniqueId: 'senate'
            },
            {
                personRcsId: 'raov3',
                name: 'Class of 2018 Senator',
                startDate: '2017-04-07',
                endDate: '2017-10-21',
                sessionUniqueId: '48',
                bodyUniqueId: 'senate'
            },
            {
                personRcsId: 'speras',
                name: 'Class of 2018 Senator',
                startDate: '2016-04-15',
                endDate: '2017-04-07',
                sessionUniqueId: '47',
                bodyUniqueId: 'senate'
            },
            {
                personRcsId: 'etzinj',
                name: 'Class of 2018 Senator',
                startDate: '2016-04-15',
                endDate: '2017-04-07',
                sessionUniqueId: '47',
                bodyUniqueId: 'senate'
            },
            {
                personRcsId: 'etzinj',
                name: 'Class of 2018 Senator',
                startDate: '2015-04-15',
                endDate: '2016-04-15',
                sessionUniqueId: '46',
                bodyUniqueId: 'senate'
            },
            {
                personRcsId: 'etzinj',
                name: 'Class of 2018 Senator',
                startDate: '2014-09-27',
                endDate: '2015-04-15',
                sessionUniqueId: '46',
                bodyUniqueId: 'senate'
            },
            {
                personRcsId: 'bushn',
                name: 'Class of 2019 Senator',
                startDate: '2017-04-07',
                sessionUniqueId: '48',
                bodyUniqueId: 'senate'
            },
            {
                personRcsId: 'rowank',
                name: 'Class of 2019 Senator',
                startDate: '2017-04-07',
                sessionUniqueId: '48',
                bodyUniqueId: 'senate'
            },
            {
                personRcsId: 'crochm',
                name: 'Class of 2019 Senator',
                startDate: '2017-04-07',
                sessionUniqueId: '48',
                bodyUniqueId: 'senate'
            },
            {
                personRcsId: 'duducs',
                name: 'Class of 2019 Senator',
                startDate: '2017-09-08',
                sessionUniqueId: '48',
                bodyUniqueId: 'senate'
            },
            {
                personRcsId: 'chopry',
                name: 'Class of 2019 Senator',
                startDate: '2017-04-07',
                endDate: '2017-09-06',
                sessionUniqueId: '48',
                bodyUniqueId: 'senate'
            },
            {
                personRcsId: 'duffyc2',
                name: 'Class of 2020 Senator',
                startDate: '2017-04-07',
                sessionUniqueId: '48',
                bodyUniqueId: 'senate'
            },
            {
                personRcsId: 'wangl17',
                name: 'Class of 2020 Senator',
                startDate: '2017-04-07',
                sessionUniqueId: '48',
                bodyUniqueId: 'senate'
            },
            {
                personRcsId: 'thomaj14',
                name: 'Class of 2020 Senator',
                startDate: '2017-04-07',
                sessionUniqueId: '48',
                bodyUniqueId: 'senate'
            },
            {
                personRcsId: 'lettkm',
                name: 'Class of 2020 Senator',
                startDate: '2017-04-07',
                sessionUniqueId: '48',
                bodyUniqueId: 'senate'
            },
            {
                personRcsId: 'baoj2',
                name: 'Class of 2021 Senator',
                startDate: '2017-08-06',
                sessionUniqueId: '48',
                bodyUniqueId: 'senate'
            },
            {
                personRcsId: 'mathem2',
                name: 'Class of 2021 Senator',
                startDate: '2017-08-06',
                sessionUniqueId: '48',
                bodyUniqueId: 'senate'
            },
            {
                personRcsId: 'hilln2',
                name: 'Class of 2021 Senator',
                startDate: '2017-08-06',
                sessionUniqueId: '48',
                bodyUniqueId: 'senate'
            },
            {
                personRcsId: 'naraya5',
                name: 'Class of 2021 Senator',
                startDate: '2017-08-06',
                sessionUniqueId: '48',
                bodyUniqueId: 'senate'
            },
            {
                personRcsId: 'millej19',
                name: 'Greek Senator (Panhellenic)',
                startDate: '2017-04-07',
                sessionUniqueId: '48',
                bodyUniqueId: 'senate'
            },
            {
                personRcsId: 'etzinj',
                name: 'Student Life Committee Chairperson',
                startDate: '2016-04-15',
                endDate: '2017-04-07',
                sessionUniqueId: '47',
                bodyUniqueId: 'senate'
            },
            {
                personRcsId: 'ilorip',
                name: 'Student Life Committee Chairperson',
                startDate: '2015-04-15',
                endDate: '2016-04-15',
                sessionUniqueId: '46',
                bodyUniqueId: 'senate'
            },
            {
                personRcsId: 'meese',
                name: 'Vice Chairperson of the Senate',
                startDate: '2017-04-07',
                sessionUniqueId: '48',
                bodyUniqueId: 'senate'
            },
            {
                personRcsId: 'venusj2',
                name: 'Vice Chairperson of the Senate',
                startDate: '2016-04-15',
                endDate: '2017-04-07',
                sessionUniqueId: '47',
                bodyUniqueId: 'senate'
            },
            {
                personRcsId: 'meese',
                name: 'Student Government Communications Committee Chairperson',
                startDate: '2017-02-01',
                endDate: '2017-04-07',
                sessionUniqueId: '47',
                bodyUniqueId: 'senate'
            },
            {
                personRcsId: 'etzinj',
                name: 'Web Technologies Group Chairperson',
                startDate: '2015-04-15',
                endDate: '2016-04-15',
                sessionUniqueId: '46',
                bodyUniqueId: 'senate'
            },
            {
                personRcsId: 'kochms',
                name: 'Web Technologies Group Chairperson',
                startDate: '2017-04-07',
                sessionUniqueId: '48',
                bodyUniqueId: 'senate'
            },
            {
                personRcsId: 'ferras4',
                name: 'Greek Senator (IFC)',
                startDate: '2017-04-07',
                sessionUniqueId: '48',
                bodyUniqueId: 'senate'
            },
            {
                personRcsId: 'qiaot',
                name: 'Independent Senator',
                startDate: '2017-04-07',
                sessionUniqueId: '48',
                bodyUniqueId: 'senate'
            },
            {
                personRcsId: 'warnes3',
                name: 'Independent Senator',
                startDate: '2017-04-07',
                sessionUniqueId: '48',
                bodyUniqueId: 'senate'
            },
            {
                personRcsId: 'pandak',
                name: 'Graduate Senator',
                startDate: '2017-04-07',
                sessionUniqueId: '48',
                bodyUniqueId: 'senate'
            },
            {
                personRcsId: 'jennis4',
                name: 'Graduate Senator',
                startDate: '2017-04-07',
                sessionUniqueId: '48',
                bodyUniqueId: 'senate'
            },
            {
                personRcsId: 'bishoa3',
                name: 'Graduate Senator',
                startDate: '2017-04-07',
                sessionUniqueId: '48',
                bodyUniqueId: 'senate'
            },
            {
                personRcsId: 'ashlea',
                name: 'Graduate Senator',
                startDate: '2017-04-07',
                sessionUniqueId: '48',
                bodyUniqueId: 'senate'
            },
            {
                personRcsId: 'gardnm4',
                name: 'Graduate Senator',
                startDate: '2017-04-07',
                sessionUniqueId: '48',
                bodyUniqueId: 'senate'
            },
            {
                personRcsId: 'angelj2',
                name: 'Graduate Senator',
                startDate: '2017-04-07',
                sessionUniqueId: '48',
                bodyUniqueId: 'senate'
            },
            {
                personRcsId: 'wangt9',
                name: 'Secretary',
                startDate: '2017-04-07',
                sessionUniqueId: '48',
                bodyUniqueId: 'senate'
            },
            {
                personRcsId: 'millej19',
                name: 'Parliamentarian',
                startDate: '2017-04-07',
                sessionUniqueId: '48',
                bodyUniqueId: 'senate'
            },
            {
                personRcsId: 'pollen',
                name: 'Treasurer',
                startDate: '2017-04-07',
                sessionUniqueId: '48',
                bodyUniqueId: 'senate'
            },
            {
                personRcsId: 'randm',
                name: '128th President of the Union',
                tempPositionName: 'President of the Union',
                startDate: '2017-04-07',
                sessionUniqueId: '17-18',
                bodyUniqueId: 'eboard'
            },
            {
                personRcsId: 'jamesn2',
                name: 'Judicial Board Chairperson',
                startDate: '2017-04-07',
                sessionUniqueId: '17-18',
                bodyUniqueId: 'jboard'
            },
            {
                personRcsId: 'cinnak',
                name: 'Undergraduate President',
                startDate: '2017-04-07',
                sessionUniqueId: '17-18',
                bodyUniqueId: 'uc'
            },
            {
                personRcsId: 'scotts',
                name: 'Graduate Council President',
                startDate: '2017-04-07',
                sessionUniqueId: '17-18',
                bodyUniqueId: 'gc'
            },
            {
                personRcsId: 'cuozzm',
                name: 'Human Resources Interview Committee Interim Chairperson',
                tempPositionName: 'Human Resources Interview Committee Chairperson',
                startDate: '2017-04-07',
                sessionUniqueId: '48',
                bodyUniqueId: 'senate'
            },
            {
                personRcsId: 'freedj2',
                name: 'Hospitality Services Advisory Committee Chairperson',
                startDate: '2017-04-07',
                sessionUniqueId: '48',
                bodyUniqueId: 'senate'
            },
            {
                personRcsId: 'carawc',
                name: 'Rules and Elections Committee Chairperson',
                startDate: '2017-04-07',
                sessionUniqueId: '48',
                bodyUniqueId: 'senate'
            },
            {
                personRcsId: 'sunr2',
                name: 'Union Business Operations Committee Chairperson',
                startDate: '2017-04-07',
                sessionUniqueId: '17-18',
                bodyUniqueId: 'eboard'
            },
            {
                personRcsId: 'lanee',
                name: 'Union Club Operations Committee Chairperson',
                startDate: '2017-04-07',
                sessionUniqueId: '17-18',
                bodyUniqueId: 'eboard'
            },
            {
                personRcsId: 'etemai',
                name: 'Union Marketing, Advertising, and Publicity Committee Chairperson',
                startDate: '2017-09-07',
                sessionUniqueId: '17-18',
                bodyUniqueId: 'eboard'
            },
            {
                personRcsId: 'choina',
                name: 'Union Policies Committee Chairperson',
                startDate: '2017-04-07',
                sessionUniqueId: '17-18',
                bodyUniqueId: 'eboard'
            },
            {
                personRcsId: 'pencil',
                name: 'Union Programming and Activities Committee Chairperson',
                startDate: '2017-04-07',
                sessionUniqueId: '17-18',
                bodyUniqueId: 'eboard'
            },
            {
                personRcsId: 'bermaj',
                name: 'Student Motor Vehicle Court Chairperson',
                startDate: '2017-04-07',
                sessionUniqueId: '17-18',
                bodyUniqueId: 'jboard'
            },
            {
                personRcsId: 'bucklb',
                name: 'Class of 2018 President',
                startDate: '2017-04-07',
                sessionUniqueId: '17-18',
                bodyUniqueId: 'uc'
            },
            {
                personRcsId: 'babuv',
                name: 'Class of 2019 President',
                startDate: '2017-04-07',
                sessionUniqueId: '17-18',
                bodyUniqueId: 'uc'
            },
            {
                personRcsId: 'lyonsj7',
                name: 'Class of 2020 President',
                startDate: '2017-04-07',
                sessionUniqueId: '17-18',
                bodyUniqueId: 'uc'
            },
            {
                personRcsId: 'lazere',
                name: 'Class of 2021 President',
                startDate: '2017-10-02',
                sessionUniqueId: '17-18',
                bodyUniqueId: 'uc'
            }
        ]

        for(let m of memberships) {
            m.positionId = positionNameIdMap[m.tempPositionName || m.name]
            if(m.tempPositionName) delete m.tempPositionName
        }

        connection.model('membership').bulkCreate(memberships)
    })
    .then(() => connection.model('position').findAll())

    .then(positions => {
        let positionNameMap = {}

        for(const p of positions) {
            positionNameMap[p.dataValues.name] = p.dataValues.id
        }

        let subbodies = [
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
                uniqueId: 'hri',
                sessionUniqueId: '48',
                bodyUniqueId: 'senate',
                name: 'Human Resources Interview Committee'
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
                name: 'Rules and Elections Committee'
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
            },
            {
                uniqueId: 'policies',
                sessionUniqueId: '17-18',
                bodyUniqueId: 'eboard',
                name: 'Union Policies Committee'
            },
            {
                uniqueId: 'busops',
                sessionUniqueId: '17-18',
                bodyUniqueId: 'eboard',
                name: 'Union Business Operations Committee'
            },
            {
                uniqueId: 'clubops',
                sessionUniqueId: '17-18',
                bodyUniqueId: 'eboard',
                name: 'Union Club Operations Committee'
            },
            {
                uniqueId: 'upac',
                sessionUniqueId: '17-18',
                bodyUniqueId: 'eboard',
                name: 'Union Programming and Activities Committee'
            },
            {
                uniqueId: 'map',
                sessionUniqueId: '17-18',
                bodyUniqueId: 'eboard',
                name: 'Union Marketing, Advertising, and Publicity Committee'
            },
            {
                uniqueId: 'smvc',
                sessionUniqueId: '17-18',
                bodyUniqueId: 'jboard',
                name: 'Student Motor Vehicle Court'
            },
            {
                uniqueId: '2018',
                sessionUniqueId: '17-18',
                bodyUniqueId: 'uc',
                name: 'Class of 2018 Council'
            },
            {
                uniqueId: '2019',
                sessionUniqueId: '17-18',
                bodyUniqueId: 'uc',
                name: 'Class of 2019 Council'
            },
            {
                uniqueId: '2020',
                sessionUniqueId: '17-18',
                bodyUniqueId: 'uc',
                name: 'Class of 2020 Council'
            },
            {
                uniqueId: '2021',
                sessionUniqueId: '17-18',
                bodyUniqueId: 'uc',
                name: 'Class of 2021 Council'
            }
        ]

        for(let s of subbodies) {
            let councilRegex

            if(positionNameMap[s.name + ' Chairperson']) {
                s.presidingOfficerPositionId = positionNameMap[s.name + ' Chairperson']
            } else if(s.name === 'Union Annual Report Committee' && positionNameMap['Senate-Executive Board Liaison']) {
                s.presidingOfficerPositionId = positionNameMap['Senate-Executive Board Liaison']
            } else if(!!(councilRegex = s.name.match(/Class of ([0-9]*) Council/i)) && positionNameMap['Class of ' + councilRegex[1] + ' President']) {
                s.presidingOfficerPositionId = positionNameMap['Class of ' + councilRegex[1] + ' President']
            }
        }

        return connection.model('subbody').bulkCreate(subbodies)
    })

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
            location: 'Shelnutt Gallery (RU 3606)'
        },
        {
            sessionUniqueId: '48',
            bodyUniqueId: 'senate',
            date: '2017-04-24',
            location: 'Shelnutt Gallery (RU 3606)'
        },
        {
            sessionUniqueId: '48',
            bodyUniqueId: 'senate',
            date: '2017-05-01',
            location: 'Shelnutt Gallery (RU 3606)'
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
            location: 'Shelnutt Gallery (RU 3606)'
        },
        {
            sessionUniqueId: '48',
            bodyUniqueId: 'senate',
            date: '2017-09-18',
            location: 'Shelnutt Gallery (RU 3606)'
        },
        {
            sessionUniqueId: '48',
            bodyUniqueId: 'senate',
            date: '2017-09-25',
            location: 'Shelnutt Gallery (RU 3606)'
        },
        {
            sessionUniqueId: '48',
            bodyUniqueId: 'senate',
            date: '2017-10-02',
            location: 'Shelnutt Gallery (RU 3606)'
        },
        {
            sessionUniqueId: '48',
            bodyUniqueId: 'senate',
            date: '2017-10-16',
            location: 'Shelnutt Gallery (RU 3606)'
        },
        {
            sessionUniqueId: '48',
            bodyUniqueId: 'senate',
            date: '2017-10-23',
            location: 'Shelnutt Gallery (RU 3606)'
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
          "Jennie Miller": 30,
          "Sean Ferracioli": 37,
          "Tianyi Qiao": 38,
          "Stefanie Warner": 39,
          "Kinshuk Panda": 40,
          "Stephanie Jennings": 41,
          "Anthony Bishop": 42,
          "Anthony Ashley": 43,
          "Michael Gardner": 44,
          "Jordan Angel": 45
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
            if(entry["gsx$status"]["$t"] !== "Not Yet Moved") {
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


    .then(() => connection.close())
})
