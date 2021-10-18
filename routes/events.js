const express = require('express');
const router = express.Router();
const eventsCtrl = require('../controllers/events');

/* GET users listing. */

router.get('/', eventsCtrl.index);
router.get('/new', eventsCtrl.new);
router.post('/', eventsCtrl.create);
router.get('/:id', eventsCtrl.show);

// router.get('/', function(req, res, next) {
//   res.send('Welcome to the Gather Music artist page!');
// });

module.exports = router;