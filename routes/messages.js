const express = require('express');
const router = express.Router();
const messagesCtrl = require('../controllers/messages');

router.post('/events/:id/messages', messagesCtrl.create);
router.delete('/messages/:id', messagesCtrl.delete);

module.exports = router;