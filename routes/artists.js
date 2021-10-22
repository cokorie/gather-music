const express = require('express');
const router = express.Router();
const artistsCtrl = require('../controllers/artists');

router.get('/', function(req, res, next) {
    res.redirect('artists/new');
  });
router.get('/new', artistsCtrl.new);
router.post('/', artistsCtrl.create);

module.exports = router;