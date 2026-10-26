const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../middleware/authMiddleware');

// Mock in-memory user registry for instant testing
const users = [
  {
    id: "user_1",
    name: "Alex Taylor",
    email: "demo@bluebite.com",
    password: "password123",
    phone: "+91 91234 56789",
    addresses: [
      {
        id: "addr_1",
        category: "Home",
        recipientName: "Alex Taylor",
        phone: "+91 91234 56789",
        houseNo: "Flat 402, Palm Grove Apts",
        street: "100 Feet Road, Indiranagar",
        city: "Bengaluru",
        pincode: "560038",
        landmark: "Near Indiranagar Metro Station",
        shortName: "Home · Indiranagar (560038)",
        address: "Flat 402, Palm Grove Apts, 100 Feet Road, Indiranagar, Bengaluru - 560038"
      },
      {
        id: "addr_2",
        category: "Hostel",
        recipientName: "Alex Taylor",
        phone: "+91 91234 56789",
        houseNo: "Room 204, Kaveri Scholars Hostel",
        street: "Koramangala 4th Block, 80ft Road",
        city: "Bengaluru",
        pincode: "560034",
        landmark: "Behind Sony World Signal",
        shortName: "Hostel · Koramangala (560034)",
        address: "Room 204, Kaveri Scholars Hostel, Koramangala 4th Block, Bengaluru - 560034"
      },
      {
        id: "addr_3",
        category: "Work",
        recipientName: "Alex Taylor",
        phone: "+91 91234 56789",
        houseNo: "Tower B, Level 5, WeWork Tech Park",
        street: "Outer Ring Road, Bellandur",
        city: "Bengaluru",
        pincode: "560103",
        landmark: "Opposite Ecospace Tech Park",
        shortName: "Work · Bellandur (560103)",
        address: "Tower B, Level 5, WeWork Tech Park, Bellandur, Bengaluru - 560103"
      }
    ]
  }
];

const register = async (req, res) => {
  try {
    const { name, email, password, phone } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({ success: false, message: 'Please provide name, email and password' });
    }

    const existing = users.find(u => u.email.toLowerCase() === email.toLowerCase());
    if (existing) {
      return res.status(400).json({ success: false, message: 'User already exists with this email' });
    }

    const newUser = {
      id: `user_${Date.now()}`,
      name,
      email,
      password,
      phone: phone || "+91 91234 56789",
      addresses: [
        {
          id: `addr_${Date.now()}`,
          category: "Home",
          recipientName: name,
          phone: phone || "+91 91234 56789",
          houseNo: "Flat 101",
          street: "100 Feet Road, Indiranagar",
          city: "Bengaluru",
          pincode: "560038",
          landmark: "Near Metro Station",
          shortName: "Home · Indiranagar (560038)",
          address: "Flat 101, 100 Feet Road, Indiranagar, Bengaluru - 560038"
        }
      ]
    };
    users.push(newUser);

    const token = jwt.sign({ id: newUser.id, email: newUser.email, name: newUser.name }, JWT_SECRET, {
      expiresIn: '7d'
    });

    res.status(201).json({
      success: true,
      message: 'Registration successful',
      token,
      user: {
        id: newUser.id,
        name: newUser.name,
        email: newUser.email,
        phone: newUser.phone,
        addresses: newUser.addresses
      }
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ success: false, message: 'Please provide email and password' });
    }

    const user = users.find(u => u.email.toLowerCase() === email.toLowerCase());
    if (!user || user.password !== password) {
      return res.status(401).json({ success: false, message: 'Invalid email or password' });
    }

    const token = jwt.sign({ id: user.id, email: user.email, name: user.name }, JWT_SECRET, {
      expiresIn: '7d'
    });

    res.json({
      success: true,
      message: 'Login successful',
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        addresses: user.addresses
      }
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const getProfile = async (req, res) => {
  try {
    const user = users.find(u => u.id === req.user.id) || users[0];
    res.json({
      success: true,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        addresses: user.addresses
      }
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const addAddress = async (req, res) => {
  try {
    const { category, recipientName, phone, houseNo, street, city, pincode, landmark, address, shortName } = req.body;
    const user = users.find(u => u.id === req.user.id);
    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }
    const cleanCategory = category || "Home";
    const cleanHouse = houseNo || "";
    const cleanStreet = street || "";
    const cleanCity = city || "Bengaluru";
    const cleanPin = pincode || "560038";
    const fullAddr = address || `${cleanHouse ? `${cleanHouse}, ` : ''}${cleanStreet}, ${cleanCity} - ${cleanPin}`;
    const short = shortName || `${cleanCategory} · ${cleanStreet.split(',')[0]} (${cleanPin})`;

    const newAddr = {
      id: `addr_${Date.now()}`,
      category: cleanCategory,
      recipientName: recipientName || user.name,
      phone: phone || user.phone,
      houseNo: cleanHouse,
      street: cleanStreet,
      city: cleanCity,
      pincode: cleanPin,
      landmark: landmark || "",
      address: fullAddr,
      shortName: short
    };

    if (!user.addresses) user.addresses = [];
    user.addresses.unshift(newAddr);

    res.status(201).json({
      success: true,
      message: 'Address added successfully',
      data: newAddr,
      addresses: user.addresses
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = { register, login, getProfile, addAddress };
