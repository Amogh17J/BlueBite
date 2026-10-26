const Restaurant = require('../models/Restaurant');
const { seedRestaurants, foodCategoriesList, sectionTabs } = require('../data/seedData');
const { getIsConnected } = require('../config/db');

// In-memory working copy
let inMemoryRestaurants = JSON.parse(JSON.stringify(seedRestaurants));

// Get all restaurants with live search & filters
const getRestaurants = async (req, res) => {
  try {
    const {
      search = '',
      section = 'all', // 'all' | 'delivery' | 'dining' | 'cafes'
      foodCategory = 'all', // 'Biryani' | 'Pizza' | etc.
      pureVeg,
      hasOffer,
      under200,
      fastDelivery,
      minRating,
      sortBy
    } = req.query;

    let results = [...inMemoryRestaurants];

    // 1. High-level Section / Page Filter
    if (section && section !== 'all') {
      const sec = section.toLowerCase();
      if (sec === 'delivery') {
        results = results.filter(r => r.category.includes('Delivery'));
      } else if (sec === 'dining') {
        results = results.filter(r => r.category.includes('Dining Out'));
      } else if (sec === 'cafes') {
        results = results.filter(r => r.category.includes('Cafes') || r.cuisines.includes('Cafes') || r.cuisines.includes('Bakery'));
      }
    }

    // 2. Food / Cuisine Category Filter
    if (foodCategory && foodCategory.toLowerCase() !== 'all' && foodCategory.toLowerCase() !== 'all dishes') {
      const targetCat = foodCategory.toLowerCase().replace('_', ' ');
      results = results.filter(r =>
        r.cuisines.some(c => c.toLowerCase().includes(targetCat)) ||
        (r.category && r.category.some(c => c.toLowerCase().includes(targetCat))) ||
        (r.menu && r.menu.some(m => m.category.toLowerCase().includes(targetCat) || m.name.toLowerCase().includes(targetCat)))
      );
    }

    // 3. Live search query
    if (search.trim()) {
      const q = search.trim().toLowerCase();
      results = results.filter(r => 
        r.name.toLowerCase().includes(q) ||
        r.cuisines.some(c => c.toLowerCase().includes(q)) ||
        r.description.toLowerCase().includes(q) ||
        r.menu.some(m => m.name.toLowerCase().includes(q))
      );
    }

    // 4. Pure veg filter
    if (pureVeg === 'true') {
      results = results.filter(r => r.pureVeg === true);
    }

    // 5. Offers filter
    if (hasOffer === 'true') {
      results = results.filter(r => r.hasOffer === true);
    }

    // 6. Under 200/250 filter
    if (under200 === 'true') {
      results = results.filter(r => r.priceForTwo <= 250);
    }

    // 7. Fast delivery (< 25 min) filter
    if (fastDelivery === 'true') {
      results = results.filter(r => r.deliveryTime <= 25);
    }

    // 8. Min rating 4.0+
    if (minRating) {
      const min = parseFloat(minRating);
      results = results.filter(r => r.rating >= min);
    }

    // 9. Sorting
    if (sortBy === 'rating') {
      results.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === 'deliveryTime') {
      results.sort((a, b) => a.deliveryTime - b.deliveryTime);
    } else if (sortBy === 'costLow') {
      results.sort((a, b) => a.priceForTwo - b.priceForTwo);
    } else if (sortBy === 'costHigh') {
      results.sort((a, b) => b.priceForTwo - a.priceForTwo);
    }

    res.json({
      success: true,
      count: results.length,
      section,
      foodCategory,
      data: results
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get single restaurant by ID
const getRestaurantById = async (req, res) => {
  try {
    const { id } = req.params;
    const found = inMemoryRestaurants.find(r => r.id === id);
    if (!found) {
      return res.status(404).json({ success: false, message: 'Restaurant not found' });
    }
    res.json({ success: true, data: found });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get categories & section tabs
const getCategories = (req, res) => {
  res.json({
    success: true,
    data: {
      foodCategories: foodCategoriesList,
      sectionTabs: sectionTabs
    }
  });
};

// Toggle favorite
const toggleFavorite = (req, res) => {
  const { id } = req.params;
  const item = inMemoryRestaurants.find(r => r.id === id);
  if (item) {
    item.isFavorite = !item.isFavorite;
    return res.json({ success: true, isFavorite: item.isFavorite });
  }
  res.status(404).json({ success: false, message: 'Restaurant not found' });
};

module.exports = {
  getRestaurants,
  getRestaurantById,
  getCategories,
  toggleFavorite
};
