const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true, 
  useUnifiedTopology: true
})

module.exports = [{
    name: 'Mandolin',
    city: 'Raleigh',
    state: 'NC',
    cuisines: 'French/ Southern American',
    pic: '/images/mandolin.jpg'
}, {
    name: 'Death and Taxes',
    city: 'Raleigh',
    state: 'NC',
    cuisines: 'Contemporary',
    pic: '/images/deathtaxes.jpg'
}]
