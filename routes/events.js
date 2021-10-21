const express = require('express');
const router = express.Router();
const eventsCtrl = require('../controllers/events');
const isLoggedIn = require('../config/auth');

/* GET users listing. */

router.delete('/:id', isLoggedIn, eventsCtrl.delete);
router.get('/:id/edit', eventsCtrl.edit);
router.put('/:id', eventsCtrl.update);
router.get('/', eventsCtrl.index);
router.get('/new', isLoggedIn, eventsCtrl.new);
router.post('/', isLoggedIn, eventsCtrl.create);
router.get('/:id', eventsCtrl.show);
router.post('/:id/artists', eventsCtrl.addToEvent);
router.post('/:id/artists/edit', eventsCtrl.addArtistOnEditPage);
router.delete('/:eventId/artists/:artistId', eventsCtrl.removeArtist);

module.exports = router;