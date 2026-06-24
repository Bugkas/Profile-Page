const express = require('express');
const router = express.Router();
const messageController = require('../controllers/messageController');

// Route mapping
router.post('/', messageController.createMessage);
router.get('/', messageController.getMessages);

module.exports = router;
