const express = require('express');
const router = express.Router();
const {
  createOrder,
  getOrders,
  getOrderById
} = require('../controllers/orderController');
const { protect } = require('../middleware/authMiddleware');

// Protected routes: user must be authenticated with JWT
router.post('/', protect, createOrder);
router.get('/', protect, getOrders);
router.get('/:id', protect, getOrderById);

module.exports = router;
