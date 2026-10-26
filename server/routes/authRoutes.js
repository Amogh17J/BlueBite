const express = require('express');
const router = express.Router();
const { register, login, getProfile, addAddress } = require('../controllers/authController');
const { protect } = require('../middleware/authMiddleware');

router.post('/register', register);
router.post('/login', login);
router.get('/profile', protect, getProfile);
router.post('/address', protect, addAddress);

module.exports = router;
