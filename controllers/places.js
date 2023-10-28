const router = require('express').Router()
const places = require('../models/places.js')

router.get('/', (req, res) => {
    res.render('places/index', { places })
})

router.post('/', (req, res) => {
    if (!req.body.pic) {
        req.body.pic = '/images/Error404.jpg'
    }
    if (!req.body.city) {
        req.body.city = 'Anytown'
    }
    if (!req.body.state) {
        req.body.state = 'USA'
    }
    places.push(req.body)
    res.redirect('/places')
})

router.get('/new', (req, res) => {
    res.render('places/new')
})

router.get('/:id', (req, res) => {
    res.send('GET /places/:id')
})

router.put('/:id', (req, res) => {
    res.send('PUT /places/:id')
})

router.delete('/:id', (req, res) => {
    res.send('DELETE /places/:id')
})

router.get('/:id/edit', (req, res) => {
    res.send('GET /places/:id/edit')
})

router.post('/:id/rant', (req, res) => {
    res.send('GET /places/:id/rant')
})

router.delete('/:id/rant/:rantId', (req, res) => {
    res.send('GET /places/:id/rant/:rantId')
})


module.exports = router