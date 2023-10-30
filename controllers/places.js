const router = require('express').Router()
const places = require('../models/places.js')

router.get('/', (req, res) => {
    res.render('places/index', { places })
})

router.post('/', (req, res) => {
    if (!req.body.pic) {
        req.body.pic = 'public/images/dynamic-wang-cD-_fbY6yww-unsplash.jpg'
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

router.delete('/:id', (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id)) {
      res.render('error404')
    }
    else if (!places[id]) {
      res.render('error404')
    }
    else {
      places.splice(id, 1)  
      res.redirect('/places')
    }
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