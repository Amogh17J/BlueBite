const mongoose = require('mongoose');

const MenuItemSchema = new mongoose.Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },
  isVeg: { type: Boolean, default: true },
  rating: { type: Number, default: 4.5 },
  image: { type: String },
  category: { type: String }
});

const RestaurantSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  description: { type: String },
  image: { type: String, required: true },
  rating: { type: Number, default: 4.0 },
  ratingCount: { type: String, default: "100+" },
  cuisines: [{ type: String }],
  deliveryTime: { type: Number, default: 30 },
  priceForTwo: { type: Number, default: 300 },
  distance: { type: String, default: "2.5 km" },
  pureVeg: { type: Boolean, default: false },
  hasOffer: { type: Boolean, default: false },
  offerText: { type: String, default: "" },
  deliveryFee: { type: Number, default: 0 },
  category: [{ type: String }],
  isFavorite: { type: Boolean, default: false },
  address: {
    street: String,
    city: String,
    area: String
  },
  menu: [MenuItemSchema]
}, { timestamps: true });

module.exports = mongoose.model('Restaurant', RestaurantSchema);
