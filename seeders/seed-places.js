const db = require('../models')

db.Place.create([{
    name: 'Mandolin',
    city: 'Raleigh',
    state: 'NC',
    cuisines: 'Southern, French',
    pic: '/images/mandolin.jpg',
    founded: 2003
}, {
    name: 'Death and Taxes',
    city: 'Raleigh',
    state: 'NC',
    cuisines: 'contemporary',
    pic: '/images/deathtaxes.jpg',
    founded: 2014
}])
.then(() => {
    console.log('Success!')
    process.exit()
})
.catch(err => {
    console.log('Failure!', err)
    process.exit()
})
