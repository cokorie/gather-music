const express = require('express');
const router = express.Router();
const searchesCtrl = require('../controllers/searches');

router.post('/searches/index', searchesCtrl.allEvents);
router.get('/searches/index', searchesCtrl.index);

module.exports = router;