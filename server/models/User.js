const mongoose = require('mongoose');

const AddressSchema = new mongoose.Schema({
  id: String,
  category: { type: String, default: "Home" }, // "Home" | "Work" | "Hostel" | "Other"
  recipientName: { type: String, default: "Alex Taylor" },
  phone: { type: String, default: "+91 91234 56789" },
  houseNo: { type: String, default: "Flat 402" },
  street: { type: String, default: "100 Feet Road, Indiranagar" },
  city: { type: String, default: "Bengaluru" },
  pincode: { type: String, default: "560038" },
  landmark: { type: String, default: "" },
  address: String,
  shortName: String
});

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phone: { type: String, default: "+91 91234 56789" },
  addresses: [AddressSchema],
  favorites: [{ type: String }]
}, { timestamps: true });

module.exports = mongoose.model('User', UserSchema);
