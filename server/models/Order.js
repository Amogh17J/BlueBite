const mongoose = require('mongoose');

const OrderItemSchema = new mongoose.Schema({
  id: String,
  name: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true, min: 1 },
  isVeg: { type: Boolean, default: true },
  restaurantId: String,
  restaurantName: String
});

const OrderSchema = new mongoose.Schema({
  orderId: { type: String, required: true, unique: true },
  userId: { type: String, default: "guest_user" },
  items: [OrderItemSchema],
  restaurantName: { type: String, required: true },
  restaurantId: { type: String, required: true },
  subtotal: { type: Number, required: true },
  discount: { type: Number, default: 0 },
  deliveryFee: { type: Number, default: 0 },
  totalAmount: { type: Number, required: true },
  deliveryAddress: {
    category: { type: String, default: "Home" },
    recipientName: { type: String, default: "Alex Taylor" },
    phone: { type: String, default: "+91 91234 56789" },
    houseNo: { type: String, default: "Flat 402" },
    street: { type: String, default: "100 Feet Road, Indiranagar" },
    city: { type: String, default: "Bengaluru" },
    pincode: { type: String, default: "560038" },
    landmark: { type: String, default: "Opposite Metro Station" },
    address: { type: String, default: "Flat 402, 100 Feet Road, Indiranagar, Bengaluru - 560038" }
  },
  status: {
    type: String,
    enum: ['Placed', 'Preparing', 'Out for Delivery', 'Delivered', 'Cancelled'],
    default: 'Placed'
  },
  paymentMethod: { type: String, default: 'UPI' }
}, { timestamps: true });

module.exports = mongoose.model('Order', OrderSchema);
