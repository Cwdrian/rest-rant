const router = require('express').Router();
const places = require('../models/places.js');

router.get('/', (req, res) => {
    res.render('places/index', { places });
});

router.post('/', (req, res) => {
    if (!req.body.pic) {
        req.body.pic = '/images/Error404.jpg';
    }
    if (!req.body.city) {
        req.body.city = 'Anytown';
    }
    if (!req.body.state) {
        req.body.state = 'USA';
    }

    places.push(req.body);
    res.redirect('/places');
});

router.get('/new', (req, res) => {
    res.render('places/new');
});

router.get('/:id', (req, res) => {
    let id = Number(req.params.id);

    if (isNaN(id) || id < 0 || id >= places.length) {
        return res.render('error404');
    }

    res.render('places/show', { place: places[id], id });
});

router.put('/:id', (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id)) {
        res.render('error404')
    }
    else if (!places[id]) {
        res.render('error404')
    }
    else {
        // Dig into req.body and make sure data is valid
        if (!req.body.pic) {
            // Default image if one is not provided
            req.body.pic = 'images/Error404.jpg'
        }
        if (!req.body.city) {
            req.body.city = 'Anytown'
        }
        if (!req.body.state) {
            req.body.state = 'USA'
        }

        // Save the new data into places[id]
        places[id] = req.body
        res.redirect(`/places/${id}`)
    }
})

router.delete('/:id', (req, res) => {
    let id = Number(req.params.id);

    if (isNaN(id) || id < 0 || id >= places.length) {
        return res.render('error404');
    }

    places.splice(id, 1);
    res.redirect('/places');
});

router.get('/:id/edit', (req, res) => {
    let id = Number(req.params.id);

    if (isNaN(id) || id < 0 || id >= places.length) {
        return res.render('error404');
    }

    res.render('places/edit', { place: places[id], id });
});

router.post('/:id/rant', (req, res) => {
    res.send('POST /places/:id/rant stub');
});

router.delete('/:id/rant/:rantId', (req, res) => {
    res.send('DELETE /places/:id/rant/:rantId stub');
});

module.exports = router;