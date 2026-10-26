const express = require('express');
const router = express.Router();
const {
  getRestaurants,
  getRestaurantById,
  getCategories,
  toggleFavorite
} = require('../controllers/restaurantController');

// Categories endpoint
router.get('/categories', getCategories);

// Restaurants endpoints
router.get('/', getRestaurants);
router.get('/:id', getRestaurantById);
router.post('/:id/favorite', toggleFavorite);

module.exports = router;
