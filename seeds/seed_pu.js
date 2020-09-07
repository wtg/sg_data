'use strict'

module.exports = connection => connection.sync().then(() => connection.model('person').bulkCreate([
    { rcsId: "spitzm", name: "Michael Spitz" },
    { rcsId: "gallan", name: "Nicole Gallant" },
    { rcsId: "stackj", name: "Jonathan Stack" },
    { rcsId: "sileog", name: "Gretchen Sileo" },
    { rcsId: "amaree", name: "Erin Amarello" },
    { rcsId: "dvoran", name: "Nick Dvorak" },
    { rcsId: "kirchc3", name: "Chip Kirchner" },
]).then(() => connection.model('membership').bulkCreate([
    { personRcsId: "spitzm", name: "121th President of the Union", startDate: "2010-04-01", endDate: "2011-04-01", positionId: 2, bodyUniqueId: 'eboard', sessionUniqueId: '10-11' },
    { personRcsId: "gallan", name: "122th President of the Union", startDate: "2011-04-01", endDate: "2012-04-01", positionId: 2, bodyUniqueId: 'eboard', sessionUniqueId: '11-12' },
    { personRcsId: "stackj", name: "123th President of the Union", startDate: "2012-04-01", endDate: "2013-04-01", positionId: 2, bodyUniqueId: 'eboard', sessionUniqueId: '12-13' },
    { personRcsId: "sileog", name: "124th President of the Union", startDate: "2013-04-01", endDate: "2014-04-01", positionId: 2, bodyUniqueId: 'eboard', sessionUniqueId: '13-14' },
    { personRcsId: "amaree", name: "125th President of the Union", startDate: "2014-04-01", endDate: "2015-04-01", positionId: 2, bodyUniqueId: 'eboard', sessionUniqueId: '14-15' },
    { personRcsId: "dvoran", name: "126th President of the Union", startDate: "2015-04-01", endDate: "2016-04-01", positionId: 2, bodyUniqueId: 'eboard', sessionUniqueId: '15-16' },
    { personRcsId: "kirchc3", name: "127th President of the Union", startDate: "2016-04-15", endDate: "2017-04-07", positionId: 2, bodyUniqueId: 'eboard', sessionUniqueId: '16-17' },
    { personRcsId: "randm", name: "128th President of the Union", startDate: "2017-04-07", endDate: "2018-04-01", positionId: 2, bodyUniqueId: 'eboard', sessionUniqueId: '17-18' },
    { personRcsId: "etzinj", name: "129th President of the Union", startDate: "2018-04-01", endDate: "2019-03-01", positionId: 2, bodyUniqueId: 'eboard', sessionUniqueId: '18-19' },
    { personRcsId: "kennec7", name: "130th President of the Union", startDate: "2019-03-01", endDate: "2020-05-01", positionId: 2, bodyUniqueId: 'eboard', sessionUniqueId: '19-20' },
    { personRcsId: "choina", name: "131st President of the Union", startDate: "2020-05-01", positionId: 2, bodyUniqueId: 'eboard', sessionUniqueId: '20-21' }
])));
