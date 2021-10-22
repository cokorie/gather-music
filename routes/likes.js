const express = require('express');
const router = express.Router();
const likesCtrl = require('../controllers/likes');

router.post('/events/:id/likes', likesCtrl.addLike);

module.exports = router;