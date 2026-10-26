import React from 'react';
import { Star, Clock, Heart, Bike, Utensils, CheckCircle } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const RestaurantCard = ({ restaurant, activeSection }) => {
  const { favorites, toggleFavorite, setActiveRestaurantModal } = useCart();
  const isFav = favorites.includes(restaurant.id);

  const handleCardClick = () => {
    setActiveRestaurantModal(restaurant);
  };

  const handleFavoriteClick = (e) => {
    e.stopPropagation();
    toggleFavorite(restaurant.id);
  };

  const isDiningMode = activeSection === 'dining';

  return (
    <div className="restaurant-card" onClick={handleCardClick}>
      {/* Landscape Image Container with 16:9 aspect ratio */}
      <div className="card-image-wrapper">
        <img
          src={restaurant.image}
          alt={restaurant.name}
          className="card-image"
          loading="lazy"
          onError={(e) => {
            e.target.src = "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&auto=format&fit=crop&q=80";
          }}
        />

        {/* Favorite Heart Button */}
        <button
          className={`favorite-btn ${isFav ? 'active' : ''}`}
          onClick={handleFavoriteClick}
          aria-label={isFav ? "Remove from favorites" : "Add to favorites"}
        >
          <Heart size={18} fill={isFav ? "#2563EB" : "none"} color={isFav ? "#2563EB" : "#FFFFFF"} />
        </button>

        {/* Offer / Discount Badge */}
        {restaurant.hasOffer && restaurant.offerText && (
          <div className="card-discount-badge">
            <span>{restaurant.offerText}</span>
          </div>
        )}

        {/* Overlay Badge */}
        <div className="card-time-badge">
          {isDiningMode ? (
            <>
              <Utensils size={13} />
              <span>Dine-In</span>
            </>
          ) : (
            <>
              <Clock size={13} />
              <span>{restaurant.deliveryTime} mins</span>
            </>
          )}
        </div>
      </div>

      {/* Card Content */}
      <div className="card-content">
        <div className="card-header-row">
          <h3 className="restaurant-title">{restaurant.name}</h3>
          {/* Restrained Green Rating Badge */}
          <div className="rating-badge">
            <span>{restaurant.rating.toFixed(1)}</span>
            <Star size={12} fill="currentColor" strokeWidth={0} />
          </div>
        </div>

        {/* Cuisine Tags */}
        <p className="card-cuisines">
          {restaurant.cuisines.join(', ')}
        </p>

        {/* Distance, Area & Price For Two */}
        <div className="card-meta-row">
          <span className="card-area">{restaurant.address?.area || 'Bengaluru'}</span>
          <span className="meta-dot">·</span>
          <span className="card-distance">{restaurant.distance}</span>
          <span className="meta-dot">·</span>
          <span className="card-price">₹{restaurant.priceForTwo} for two</span>
        </div>

        {/* Card Footer: Delivery or Dining Features */}
        <div className="card-delivery-footer">
          {isDiningMode ? (
            <div className="dining-tag">
              <CheckCircle size={14} className="dining-icon" />
              <span>{restaurant.diningDetails?.hasTableBooking ? 'Table Booking Available' : 'Walk-in Welcome'}</span>
            </div>
          ) : (
            <div className="delivery-tag">
              <Bike size={14} className="delivery-icon" />
              <span>
                {restaurant.deliveryFee === 0 ? (
                  <strong className="free-delivery">FREE DELIVERY</strong>
                ) : (
                  `₹${restaurant.deliveryFee} Delivery fee`
                )}
              </span>
            </div>
          )}
          {restaurant.pureVeg && (
            <span className="pure-veg-tag">Pure Veg</span>
          )}
        </div>
      </div>
    </div>
  );
};
