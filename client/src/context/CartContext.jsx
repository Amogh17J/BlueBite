import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

const CartContext = createContext();

const defaultAddresses = [
  {
    id: "addr_1",
    category: "Home", // "Home" | "Work" | "Hostel" | "Other"
    recipientName: "Alex Taylor",
    phone: "+91 91234 56789",
    houseNo: "Flat 402, Palm Grove Apts",
    street: "100 Feet Road, Indiranagar",
    city: "Bengaluru",
    pincode: "560038",
    landmark: "Near Indiranagar Metro Station",
    shortName: "Home · Indiranagar",
    address: "Flat 402, Palm Grove Apts, 100 Feet Road, Indiranagar, Bengaluru - 560038"
  },
  {
    id: "addr_2",
    category: "Hostel",
    recipientName: "Alex Taylor",
    phone: "+91 91234 56789",
    houseNo: "Room 204, Kaveri Scholars Hostel",
    street: "80 Feet Road, 4th Block, Koramangala",
    city: "Bengaluru",
    pincode: "560034",
    landmark: "Behind Sony World Signal",
    shortName: "Hostel · Koramangala",
    address: "Room 204, Kaveri Scholars Hostel, 80ft Rd, 4th Block, Koramangala, Bengaluru - 560034"
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
    shortName: "Work · Bellandur",
    address: "Tower B, Level 5, WeWork Tech Park, Outer Ring Road, Bellandur, Bengaluru - 560103"
  }
];

export const CartProvider = ({ children }) => {
  // Authentication state (JWT & User)
  const [user, setUser] = useState(() => {
    try {
      const savedUser = localStorage.getItem('bluebite_user');
      return savedUser ? JSON.parse(savedUser) : null;
    } catch (e) {
      return null;
    }
  });

  const [token, setToken] = useState(() => {
    try {
      return localStorage.getItem('bluebite_token') || null;
    } catch (e) {
      return null;
    }
  });

  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authModalMessage, setAuthModalMessage] = useState('');
  const [pendingAction, setPendingAction] = useState(null);

  // Cart state
  const [cartItems, setCartItems] = useState(() => {
    try {
      const saved = localStorage.getItem('bluebite_cart');
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  });

  const [cartRestaurant, setCartRestaurant] = useState(() => {
    try {
      const saved = localStorage.getItem('bluebite_cart_restaurant');
      return saved ? JSON.parse(saved) : null;
    } catch (e) {
      return null;
    }
  });

  // Orders state
  const [orders, setOrders] = useState([]);

  // Favorites
  const [favorites, setFavorites] = useState(() => {
    try {
      const saved = localStorage.getItem('bluebite_favs');
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  });

  // Active navigation tab ('home', 'search', 'orders', 'profile')
  const [activeTab, setActiveTab] = useState('home');

  // Detailed Addresses state
  const [savedAddresses, setSavedAddresses] = useState(() => {
    try {
      const saved = localStorage.getItem('bluebite_saved_addresses');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    } catch (e) {}
    return defaultAddresses;
  });

  // Active delivery location
  const [currentLocation, setCurrentLocation] = useState(() => {
    try {
      const savedLoc = localStorage.getItem('bluebite_active_location');
      if (savedLoc) return JSON.parse(savedLoc);
    } catch (e) {}
    return defaultAddresses[0];
  });

  // Modals state
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLocationModalOpen, setIsLocationModalOpen] = useState(false);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [activeRestaurantModal, setActiveRestaurantModal] = useState(null);

  // Discount promo
  const [promoCode, setPromoCode] = useState('BLUEBITE');
  const [discountAmount, setDiscountAmount] = useState(50);

  // Persist auth
  useEffect(() => {
    if (user && token) {
      localStorage.setItem('bluebite_user', JSON.stringify(user));
      localStorage.setItem('bluebite_token', token);
    } else {
      localStorage.removeItem('bluebite_user');
      localStorage.removeItem('bluebite_token');
    }
  }, [user, token]);

  // Persist cart
  useEffect(() => {
    localStorage.setItem('bluebite_cart', JSON.stringify(cartItems));
    localStorage.setItem('bluebite_cart_restaurant', JSON.stringify(cartRestaurant));
  }, [cartItems, cartRestaurant]);

  // Persist favorites
  useEffect(() => {
    localStorage.setItem('bluebite_favs', JSON.stringify(favorites));
  }, [favorites]);

  // Persist addresses
  useEffect(() => {
    localStorage.setItem('bluebite_saved_addresses', JSON.stringify(savedAddresses));
  }, [savedAddresses]);

  // Persist active location
  useEffect(() => {
    localStorage.setItem('bluebite_active_location', JSON.stringify(currentLocation));
  }, [currentLocation]);

  // Address operations
  const addAddress = async (addrData) => {
    const id = `addr_${Date.now()}`;
    const cleanCategory = addrData.category || "Home";
    const customLabel = addrData.customCategoryLabel?.trim();
    const displayCategory = cleanCategory === 'Other' && customLabel ? customLabel : cleanCategory;
    const houseNo = addrData.houseNo?.trim() || "";
    const street = addrData.street?.trim() || "Indiranagar";
    const city = addrData.city?.trim() || "Bengaluru";
    const pincode = addrData.pincode?.trim() || "560038";
    const landmark = addrData.landmark?.trim() || "";
    const recipientName = addrData.recipientName?.trim() || (user ? user.name : "Alex Taylor");
    const phone = addrData.phone?.trim() || (user ? user.phone : "+91 91234 56789");

    const fullAddrString = `${houseNo ? `${houseNo}, ` : ''}${street ? `${street}, ` : ''}${city}${pincode ? ` - ${pincode}` : ''}${landmark ? ` (Landmark: ${landmark})` : ''}`;
    const short = `${displayCategory} · ${street ? street.split(',')[0] : city} (${pincode})`;

    const newAddressObj = {
      id,
      category: cleanCategory,
      displayCategory,
      recipientName,
      phone,
      houseNo,
      street,
      city,
      pincode,
      landmark,
      shortName: short,
      address: fullAddrString
    };

    setSavedAddresses(prev => [newAddressObj, ...prev]);
    setCurrentLocation(newAddressObj);

    // If authenticated, also persist to backend
    if (token) {
      try {
        await fetch('/api/auth/address', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
          body: JSON.stringify(newAddressObj)
        });
      } catch (err) {
        console.warn('Could not sync address to server:', err);
      }
    }

    return newAddressObj;
  };

  const selectAddress = (addrObj) => {
    setCurrentLocation(addrObj);
    setIsLocationModalOpen(false);
  };

  const deleteAddress = (addrId) => {
    setSavedAddresses(prev => {
      const filtered = prev.filter(a => a.id !== addrId);
      if (currentLocation.id === addrId && filtered.length > 0) {
        setCurrentLocation(filtered[0]);
      }
      return filtered;
    });
  };

  // Fetch orders from backend when token is present
  const fetchUserOrders = useCallback(async (authToken) => {
    const activeJwt = authToken || token;
    if (!activeJwt) {
      setOrders([]);
      return;
    }
    try {
      const res = await fetch('/api/orders', {
        headers: { 'Authorization': `Bearer ${activeJwt}` }
      });
      if (res.ok) {
        const data = await res.json();
        if (data.success && data.data) {
          setOrders(data.data);
          return;
        }
      }
    } catch (err) {
      console.warn('Failed to fetch user orders from backend:', err);
    }
  }, [token]);

  useEffect(() => {
    if (token) {
      fetchUserOrders(token);
    } else {
      setOrders([]);
    }
  }, [token, fetchUserOrders]);

  // Auth gate helper
  const requireAuth = (callback, message = 'Please sign in or create an account to proceed.') => {
    if (user && token) {
      if (typeof callback === 'function') callback();
      return true;
    }
    setAuthModalMessage(message);
    setPendingAction(() => callback);
    setIsAuthModalOpen(true);
    return false;
  };

  // Login action
  const login = async (email, password) => {
    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });
    const data = await res.json();
    if (!res.ok || !data.success) {
      throw new Error(data.message || 'Login failed');
    }

    setUser(data.user);
    setToken(data.token);
    fetchUserOrders(data.token);

    if (pendingAction && typeof pendingAction === 'function') {
      setTimeout(() => {
        pendingAction();
        setPendingAction(null);
      }, 100);
    }
    return data;
  };

  // Signup action
  const signup = async (name, email, password, phone) => {
    const res = await fetch('/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password, phone })
    });
    const data = await res.json();
    if (!res.ok || !data.success) {
      throw new Error(data.message || 'Registration failed');
    }

    setUser(data.user);
    setToken(data.token);
    fetchUserOrders(data.token);

    if (pendingAction && typeof pendingAction === 'function') {
      setTimeout(() => {
        pendingAction();
        setPendingAction(null);
      }, 100);
    }
    return data;
  };

  // Logout action
  const logout = () => {
    setUser(null);
    setToken(null);
    setOrders([]);
    clearCart();
    setIsProfileModalOpen(false);
  };

  // Cart operations (GATED BY AUTH)
  const addToCart = (item, restaurant) => {
    if (!user || !token) {
      requireAuth(
        () => addToCart(item, restaurant),
        `Please sign in or create an account to add dishes from ${restaurant.name} to your cart!`
      );
      return;
    }

    if (cartRestaurant && cartRestaurant.id !== restaurant.id && cartItems.length > 0) {
      const confirmSwitch = window.confirm(
        `Your cart contains dishes from ${cartRestaurant.name}. Discard and start a new order from ${restaurant.name}?`
      );
      if (!confirmSwitch) return;
      setCartItems([{ ...item, quantity: 1, restaurantId: restaurant.id, restaurantName: restaurant.name }]);
      setCartRestaurant({ id: restaurant.id, name: restaurant.name, deliveryFee: restaurant.deliveryFee || 0 });
      return;
    }

    setCartRestaurant({ id: restaurant.id, name: restaurant.name, deliveryFee: restaurant.deliveryFee || 0 });
    setCartItems(prev => {
      const existing = prev.find(i => i.id === item.id);
      if (existing) {
        return prev.map(i => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i);
      }
      return [...prev, { ...item, quantity: 1, restaurantId: restaurant.id, restaurantName: restaurant.name }];
    });
  };

  const removeFromCart = (itemId) => {
    setCartItems(prev => {
      const existing = prev.find(i => i.id === itemId);
      if (!existing) return prev;
      if (existing.quantity === 1) {
        const next = prev.filter(i => i.id !== itemId);
        if (next.length === 0) setCartRestaurant(null);
        return next;
      }
      return prev.map(i => i.id === itemId ? { ...i, quantity: i.quantity - 1 } : i);
    });
  };

  const clearCart = () => {
    setCartItems([]);
    setCartRestaurant(null);
  };

  // Favorites (GATED BY AUTH)
  const toggleFavorite = (restId) => {
    if (!user || !token) {
      requireAuth(
        () => toggleFavorite(restId),
        "Please sign in or create an account to save favorite restaurants!"
      );
      return;
    }
    setFavorites(prev => 
      prev.includes(restId) ? prev.filter(id => id !== restId) : [...prev, restId]
    );
  };

  // Subtotal and Total calculations
  const subtotal = cartItems.reduce((acc, curr) => acc + (curr.price * curr.quantity), 0);
  const deliveryFee = subtotal > 300 || (cartRestaurant && cartRestaurant.deliveryFee === 0) ? 0 : 25;
  const currentDiscount = subtotal > 199 ? discountAmount : 0;
  const totalAmount = Math.max(0, subtotal - currentDiscount + (cartItems.length ? deliveryFee : 0));
  const totalItemCount = cartItems.reduce((acc, curr) => acc + curr.quantity, 0);

  // Place order (PROTECTED WITH JWT & COMPREHENSIVE ADDRESS)
  const placeOrder = async () => {
    if (!user || !token) {
      requireAuth(
        () => placeOrder(),
        "Please sign in to place your order!"
      );
      return null;
    }

    if (!cartItems.length || !cartRestaurant) return null;

    const orderPayload = {
      restaurantId: cartRestaurant.id,
      restaurantName: cartRestaurant.name,
      items: [...cartItems],
      subtotal,
      discount: currentDiscount,
      deliveryFee,
      totalAmount,
      deliveryAddress: {
        category: currentLocation.category || "Home",
        recipientName: currentLocation.recipientName || user.name || "Alex Taylor",
        phone: currentLocation.phone || user.phone || "+91 91234 56789",
        houseNo: currentLocation.houseNo || "",
        street: currentLocation.street || "",
        city: currentLocation.city || "Bengaluru",
        pincode: currentLocation.pincode || "560038",
        landmark: currentLocation.landmark || "",
        address: currentLocation.address || "100 Feet Road, Indiranagar, Bengaluru - 560038"
      }
    };

    try {
      const res = await fetch('/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(orderPayload)
      });
      const data = await res.json();
      if (res.ok && data.success && data.data) {
        setOrders(prev => [data.data, ...prev]);
        clearCart();
        setIsCartOpen(false);
        setActiveTab('orders');
        return data.data;
      } else {
        throw new Error(data.message || 'Failed to place order');
      }
    } catch (err) {
      console.error('Order error:', err);
      throw err;
    }
  };

  return (
    <CartContext.Provider value={{
      user,
      token,
      login,
      signup,
      logout,
      requireAuth,
      isAuthModalOpen,
      setIsAuthModalOpen,
      authModalMessage,
      cartItems,
      cartRestaurant,
      addToCart,
      removeFromCart,
      clearCart,
      subtotal,
      deliveryFee,
      currentDiscount,
      totalAmount,
      totalItemCount,
      promoCode,
      setPromoCode,
      orders,
      placeOrder,
      favorites,
      toggleFavorite,
      activeTab,
      setActiveTab,
      savedAddresses,
      addAddress,
      selectAddress,
      deleteAddress,
      currentLocation,
      setCurrentLocation,
      isCartOpen,
      setIsCartOpen,
      isLocationModalOpen,
      setIsLocationModalOpen,
      isProfileModalOpen,
      setIsProfileModalOpen,
      activeRestaurantModal,
      setActiveRestaurantModal
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
