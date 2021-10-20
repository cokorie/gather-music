const express = require('express');
const router = express.Router();
const messagesCtrl = require('../controllers/messages');
const isLoggedIn = require('../config/auth');

router.post('/events/:id/messages', messagesCtrl.create);
router.delete('/messages/:id', isLoggedIn, messagesCtrl.delete);

module.exports = router;