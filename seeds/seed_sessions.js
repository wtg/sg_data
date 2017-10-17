'use strict'

const connection = require('../models')
const axios = require('axios')

connection.sync().then(() => {
    let promises = []

    connection.model('session').bulkCreate([
        { name: '45th Student Senate', bodyUniqueId: 'senate', uniqueId: '45', active: false },
        { name: '44th Student Senate', bodyUniqueId: 'senate', uniqueId: '44', active: false },
        { name: '43rd Student Senate', bodyUniqueId: 'senate', uniqueId: '43', active: false },
        { name: '42nd Student Senate', bodyUniqueId: 'senate', uniqueId: '42', active: false },
        { name: '41st Student Senate', bodyUniqueId: 'senate', uniqueId: '41', active: false },
        { name: '40th Student Senate', bodyUniqueId: 'senate', uniqueId: '40', active: false },
        { name: '39th Student Senate', bodyUniqueId: 'senate', uniqueId: '39', active: false },
        { name: '38th Student Senate', bodyUniqueId: 'senate', uniqueId: '38', active: false },
        { name: '37th Student Senate', bodyUniqueId: 'senate', uniqueId: '37', active: false },
        { name: '36th Student Senate', bodyUniqueId: 'senate', uniqueId: '36', active: false },
        { name: '35th Student Senate', bodyUniqueId: 'senate', uniqueId: '35', active: false },
        { name: '34th Student Senate', bodyUniqueId: 'senate', uniqueId: '34', active: false },
        { name: '33rd Student Senate', bodyUniqueId: 'senate', uniqueId: '33', active: false },
        { name: '32nd Student Senate', bodyUniqueId: 'senate', uniqueId: '32', active: false },
        { name: '31st Student Senate', bodyUniqueId: 'senate', uniqueId: '31', active: false },
        { name: '30th Student Senate', bodyUniqueId: 'senate', uniqueId: '30', active: false },
        { name: '29th Student Senate', bodyUniqueId: 'senate', uniqueId: '29', active: false },
        { name: '28th Student Senate', bodyUniqueId: 'senate', uniqueId: '28', active: false },
        { name: '27th Student Senate', bodyUniqueId: 'senate', uniqueId: '27', active: false },
        { name: '26th Student Senate', bodyUniqueId: 'senate', uniqueId: '26', active: false },
        { name: '25th Student Senate', bodyUniqueId: 'senate', uniqueId: '25', active: false },
        { name: '24th Student Senate', bodyUniqueId: 'senate', uniqueId: '24', active: false },
        { name: '23rd Student Senate', bodyUniqueId: 'senate', uniqueId: '23', active: false },
        { name: '22nd Student Senate', bodyUniqueId: 'senate', uniqueId: '22', active: false },
        { name: '21st Student Senate', bodyUniqueId: 'senate', uniqueId: '21', active: false },
        { name: '20th Student Senate', bodyUniqueId: 'senate', uniqueId: '20', active: false },
        { name: '19th Student Senate', bodyUniqueId: 'senate', uniqueId: '19', active: false },
        { name: '18th Student Senate', bodyUniqueId: 'senate', uniqueId: '18', active: false },
        { name: '17th Student Senate', bodyUniqueId: 'senate', uniqueId: '17', active: false },
        { name: '16th Student Senate', bodyUniqueId: 'senate', uniqueId: '16', active: false },
        { name: '15th Student Senate', bodyUniqueId: 'senate', uniqueId: '15', active: false },
        { name: '14th Student Senate', bodyUniqueId: 'senate', uniqueId: '14', active: false },
        { name: '13th Student Senate', bodyUniqueId: 'senate', uniqueId: '13', active: false },
        { name: '12th Student Senate', bodyUniqueId: 'senate', uniqueId: '12', active: false },
        { name: '11th Student Senate', bodyUniqueId: 'senate', uniqueId: '11', active: false },
        { name: '10th Student Senate', bodyUniqueId: 'senate', uniqueId: '10', active: false },
        { name:  '9th Student Senate', bodyUniqueId: 'senate', uniqueId: '09', active: false },
        { name:  '8th Student Senate', bodyUniqueId: 'senate', uniqueId: '08', active: false },
        { name:  '7th Student Senate', bodyUniqueId: 'senate', uniqueId: '07', active: false },
        { name:  '6th Student Senate', bodyUniqueId: 'senate', uniqueId: '06', active: false },
        { name:  '5th Student Senate', bodyUniqueId: 'senate', uniqueId: '05', active: false },
        { name:  '4th Student Senate', bodyUniqueId: 'senate', uniqueId: '04', active: false },
        { name:  '3rd Student Senate', bodyUniqueId: 'senate', uniqueId: '03', active: false },
        { name:  '2nd Student Senate', bodyUniqueId: 'senate', uniqueId: '02', active: false },
        { name:  '1st Student Senate', bodyUniqueId: 'senate', uniqueId: '01', active: false }
    ])

    .then(() => connection.close())
})
