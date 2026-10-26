const Order = require('../models/Order');
const { getIsConnected } = require('../config/db');

let inMemoryOrders = [
  {
    orderId: "BB-9201",
    userId: "user_1",
    restaurantId: "rest-1",
    restaurantName: "Royal Biryani Darbar",
    items: [
      { id: "m-101", name: "Hyderabadi Chicken Dum Biryani", price: 280, quantity: 1, isVeg: false },
      { id: "m-104", name: "Garlic Butter Naan", price: 45, quantity: 2, isVeg: true }
    ],
    subtotal: 370,
    discount: 50,
    deliveryFee: 0,
    totalAmount: 320,
    deliveryAddress: {
      address: "Home · 100 Feet Road, Indiranagar",
      landmark: "Opposite Metro Pillar 84",
      phone: "+91 91234 56789"
    },
    status: "Delivered",
    paymentMethod: "UPI",
    createdAt: new Date(Date.now() - 86400000).toISOString()
  }
];

// Create Order (Protected)
const createOrder = async (req, res) => {
  try {
    const { items, restaurantId, restaurantName, deliveryAddress, discount = 0, deliveryFee = 0 } = req.body;

    if (!items || !items.length) {
      return res.status(400).json({ success: false, message: "Order must contain at least one item." });
    }

    const userId = req.user ? req.user.id : "user_1";
    const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const totalAmount = Math.max(0, subtotal - discount + deliveryFee);
    const orderId = `BB-${Math.floor(1000 + Math.random() * 9000)}`;

    const newOrderData = {
      orderId,
      userId,
      restaurantId: restaurantId || "rest-1",
      restaurantName: restaurantName || "Featured Restaurant",
      items,
      subtotal,
      discount,
      deliveryFee,
      totalAmount,
      deliveryAddress: deliveryAddress || {
        address: "Home · Indiranagar 100ft Road, Bengaluru",
        landmark: "Near BDA Complex",
        phone: "+91 91234 56789"
      },
      status: "Placed",
      paymentMethod: "UPI",
      createdAt: new Date().toISOString()
    };

    if (getIsConnected()) {
      try {
        const savedDoc = await Order.create(newOrderData);
        inMemoryOrders.unshift(newOrderData);
        return res.status(201).json({ success: true, message: "Order placed successfully!", data: savedDoc });
      } catch (e) {
        console.warn("Falling back to in-memory order storage:", e.message);
      }
    }

    inMemoryOrders.unshift(newOrderData);
    res.status(201).json({
      success: true,
      message: "Order placed successfully!",
      data: newOrderData
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get All Orders for logged-in user (Protected)
const getOrders = async (req, res) => {
  try {
    const userId = req.user ? req.user.id : null;

    if (getIsConnected() && userId) {
      try {
        const orders = await Order.find({ userId }).sort({ createdAt: -1 });
        if (orders.length > 0) {
          return res.json({ success: true, count: orders.length, data: orders });
        }
      } catch (e) {}
    }

    // Filter by userId if available, else return orders
    const userOrders = userId ? inMemoryOrders.filter(o => o.userId === userId || !o.userId) : inMemoryOrders;

    res.json({
      success: true,
      count: userOrders.length,
      data: userOrders
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get Single Order (Protected)
const getOrderById = async (req, res) => {
  try {
    const { id } = req.params;
    const order = inMemoryOrders.find(o => o.orderId === id);
    if (!order) {
      return res.status(404).json({ success: false, message: "Order not found" });
    }
    res.json({ success: true, data: order });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = {
  createOrder,
  getOrders,
  getOrderById
};
