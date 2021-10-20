const express = require('express');
const router = express.Router();
const eventsCtrl = require('../controllers/events');
const isLoggedIn = require('../config/auth');

/* GET users listing. */

router.get('/', eventsCtrl.index);
router.get('/new', isLoggedIn, eventsCtrl.new);
router.post('/', isLoggedIn, eventsCtrl.create);
router.get('/:id', eventsCtrl.show);

module.exports = router;