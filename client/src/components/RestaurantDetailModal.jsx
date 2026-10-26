import React, { useState } from 'react';
import { X, Star, Clock, MapPin, Plus, Minus, ShoppingBag, ShieldCheck } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const RestaurantDetailModal = () => {
  const {
    activeRestaurantModal,
    setActiveRestaurantModal,
    cartItems,
    addToCart,
    removeFromCart,
    setIsCartOpen,
    totalItemCount,
    totalAmount
  } = useCart();

  const [activeMenuFilter, setActiveMenuFilter] = useState('all');

  if (!activeRestaurantModal) return null;

  const rest = activeRestaurantModal;
  const menuCategories = ['all', ...new Set((rest.menu || []).map(m => m.category || 'Dishes'))];

  const filteredMenu = (rest.menu || []).filter(item => {
    if (activeMenuFilter === 'all') return true;
    return item.category === activeMenuFilter;
  });

  const getItemQuantityInCart = (itemId) => {
    const item = cartItems.find(i => i.id === itemId);
    return item ? item.quantity : 0;
  };

  return (
    <div className="modal-backdrop" onClick={() => setActiveRestaurantModal(null)}>
      <div className="restaurant-detail-sheet" onClick={(e) => e.stopPropagation()}>
        {/* Header / Hero */}
        <div className="sheet-hero">
          <img
            src={rest.image}
            alt={rest.name}
            className="sheet-hero-image"
          />
          <button className="sheet-close-btn" onClick={() => setActiveRestaurantModal(null)}>
            <X size={20} />
          </button>
          {rest.hasOffer && (
            <div className="sheet-hero-badge">
              <span>{rest.offerText}</span>
            </div>
          )}
        </div>

        {/* Restaurant Header Info */}
        <div className="sheet-info-card">
          <div className="sheet-title-row">
            <div>
              <h2 className="sheet-name">{rest.name}</h2>
              <p className="sheet-cuisines">{rest.cuisines?.join(', ')}</p>
            </div>
            <div className="rating-badge rating-badge-lg">
              <span>{rest.rating.toFixed(1)}</span>
              <Star size={14} fill="currentColor" strokeWidth={0} />
            </div>
          </div>

          <div className="sheet-meta-pills">
            <div className="meta-pill">
              <Clock size={14} />
              <span>{rest.deliveryTime} mins</span>
            </div>
            <div className="meta-pill">
              <MapPin size={14} />
              <span>{rest.distance} · {rest.address?.area || 'Bengaluru'}</span>
            </div>
            <div className="meta-pill">
              <span>₹{rest.priceForTwo} for two</span>
            </div>
          </div>

          <p className="sheet-desc">{rest.description}</p>
        </div>

        {/* Menu Section */}
        <div className="sheet-menu-section">
          <div className="menu-filter-chips">
            {menuCategories.map((cat) => (
              <button
                key={cat}
                className={`menu-chip ${activeMenuFilter === cat ? 'active' : ''}`}
                onClick={() => setActiveMenuFilter(cat)}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>

          <div className="menu-items-list">
            {filteredMenu.map((dish) => {
              const qty = getItemQuantityInCart(dish.id);
              return (
                <div key={dish.id} className="dish-card">
                  <div className="dish-details">
                    <div className="dish-type-indicator">
                      <span className={`veg-dot-border ${dish.isVeg ? 'veg' : 'non-veg'}`}>
                        <span className={`veg-dot-inner ${dish.isVeg ? 'veg' : 'non-veg'}`}></span>
                      </span>
                      {dish.rating && (
                        <span className="dish-rating-text">★ {dish.rating}</span>
                      )}
                    </div>

                    <h4 className="dish-title">{dish.name}</h4>
                    <span className="dish-price">₹{dish.price}</span>
                    <p className="dish-description">{dish.description}</p>
                  </div>

                  <div className="dish-media-action">
                    {dish.image && (
                      <div className="dish-img-container">
                        <img
                          src={dish.image}
                          alt={dish.name}
                          className="dish-image"
                          loading="lazy"
                        />
                      </div>
                    )}
                    <div className="dish-add-container">
                      {qty === 0 ? (
                        <button
                          className="dish-add-btn"
                          onClick={() => addToCart(dish, rest)}
                        >
                          ADD <Plus size={14} />
                        </button>
                      ) : (
                        <div className="dish-qty-stepper">
                          <button
                            className="qty-btn"
                            onClick={() => removeFromCart(dish.id)}
                            aria-label="Decrease quantity"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="qty-number">{qty}</span>
                          <button
                            className="qty-btn"
                            onClick={() => addToCart(dish, rest)}
                            aria-label="Increase quantity"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Floating Cart Indicator inside restaurant modal if items added */}
        {totalItemCount > 0 && (
          <div className="floating-cart-banner" onClick={() => setIsCartOpen(true)}>
            <div className="floating-cart-info">
              <span className="floating-item-count">{totalItemCount} {totalItemCount === 1 ? 'item' : 'items'}</span>
              <span className="floating-divider">|</span>
              <span className="floating-total">₹{totalAmount}</span>
            </div>
            <div className="floating-cart-action">
              <span>View Cart</span>
              <ShoppingBag size={16} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
