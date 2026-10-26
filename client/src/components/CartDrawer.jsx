import React, { useState } from 'react';
import { X, ShoppingBag, Plus, Minus, Tag, Check, ArrowRight, MapPin, Bike, Home, Building2, Briefcase, AlertCircle } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const CartDrawer = () => {
  const {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    cartRestaurant,
    addToCart,
    removeFromCart,
    clearCart,
    subtotal,
    deliveryFee,
    currentDiscount,
    totalAmount,
    promoCode,
    setPromoCode,
    currentLocation,
    placeOrder,
    setIsLocationModalOpen
  } = useCart();

  const [couponInput, setCouponInput] = useState('');
  const [couponMsg, setCouponMsg] = useState('Coupon BLUEBITE applied: ₹50 OFF');
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isCartOpen) return null;

  const handleApplyCoupon = (e) => {
    e.preventDefault();
    const clean = couponInput.trim().toUpperCase();
    if (!clean) return;
    if (clean === 'BLUEBITE' || clean === 'TASTY') {
      setPromoCode(clean);
      setCouponMsg(`Coupon ${clean} applied!`);
      setCouponInput('');
    } else {
      setCouponMsg('Invalid coupon code. Try BLUEBITE or TASTY');
    }
  };

  const handleCheckout = async () => {
    setIsSubmitting(true);
    await placeOrder();
    setIsSubmitting(false);
  };

  return (
    <div className="modal-backdrop" onClick={() => setIsCartOpen(false)}>
      <div className="cart-drawer-sheet" onClick={(e) => e.stopPropagation()}>
        <div className="cart-header">
          <div>
            <h3 className="cart-title">Your Cart</h3>
            {cartRestaurant && (
              <p className="cart-restaurant-name">{cartRestaurant.name}</p>
            )}
          </div>
          <button className="modal-close-btn" onClick={() => setIsCartOpen(false)}>
            <X size={20} />
          </button>
        </div>

        {cartItems.length === 0 ? (
          <div className="cart-empty-state">
            <div className="empty-cart-icon">
              <ShoppingBag size={44} />
            </div>
            <h4>Your cart is empty</h4>
            <p>Looks like you haven't added anything to your cart yet.</p>
            <button className="primary-btn-filled" onClick={() => setIsCartOpen(false)}>
              Browse Restaurants
            </button>
          </div>
        ) : (
          <div className="cart-body">
            {/* Enhanced Delivery Address Card */}
            <div className="cart-delivery-card-enhanced">
              <div className="cart-delivery-card-header">
                <div className="cart-delivery-cat-group">
                  <span className={`cart-cat-badge cat-${(currentLocation?.category || 'home').toLowerCase()}`}>
                    {currentLocation?.category === 'Hostel' && <Building2 size={13} />}
                    {currentLocation?.category === 'Work' && <Briefcase size={13} />}
                    {currentLocation?.category === 'Home' && <Home size={13} />}
                    {(!currentLocation?.category || currentLocation?.category === 'Other') && <MapPin size={13} />}
                    <span>{currentLocation?.displayCategory || currentLocation?.category || 'Home'}</span>
                  </span>
                  <span className="cart-pin-badge">PIN: {currentLocation?.pincode || '560038'}</span>
                </div>

                <button 
                  className="cart-change-address-btn"
                  onClick={() => setIsLocationModalOpen(true)}
                  type="button"
                >
                  Change
                </button>
              </div>

              <div className="cart-delivery-recipient-text">
                <strong>{currentLocation?.recipientName || 'Alex Taylor'}</strong> · {currentLocation?.phone || '+91 91234 56789'}
              </div>

              <div className="cart-delivery-full-addr">
                {currentLocation?.houseNo ? `${currentLocation.houseNo}, ` : ''}
                {currentLocation?.street || ''}, {currentLocation?.city || 'Bengaluru'}
                {currentLocation?.landmark ? ` (Landmark: ${currentLocation.landmark})` : ''}
              </div>
            </div>

            {/* Cart Items List */}
            <div className="cart-items-list">
              {cartItems.map((item) => (
                <div key={item.id} className="cart-item-row">
                  <div className="cart-item-info">
                    <span className={`veg-dot-border ${item.isVeg ? 'veg' : 'non-veg'}`}>
                      <span className={`veg-dot-inner ${item.isVeg ? 'veg' : 'non-veg'}`}></span>
                    </span>
                    <span className="cart-item-name">{item.name}</span>
                  </div>

                  <div className="cart-item-actions">
                    <div className="dish-qty-stepper compact">
                      <button
                        className="qty-btn"
                        onClick={() => removeFromCart(item.id)}
                        aria-label="Decrease quantity"
                      >
                        <Minus size={12} />
                      </button>
                      <span className="qty-number">{item.quantity}</span>
                      <button
                        className="qty-btn"
                        onClick={() => addToCart(item, cartRestaurant)}
                        aria-label="Increase quantity"
                      >
                        <Plus size={12} />
                      </button>
                    </div>
                    <span className="cart-item-price">₹{item.price * item.quantity}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Promo Code Input */}
            <div className="promo-code-section">
              <form onSubmit={handleApplyCoupon} className="coupon-form">
                <div className="coupon-input-wrapper">
                  <Tag size={16} className="coupon-icon" />
                  <input
                    type="text"
                    className="coupon-input"
                    placeholder="Enter coupon (e.g. BLUEBITE)"
                    value={couponInput}
                    onChange={(e) => setCouponInput(e.target.value)}
                  />
                </div>
                <button type="submit" className="apply-coupon-btn">
                  Apply
                </button>
              </form>
              {couponMsg && (
                <div className={`coupon-applied-msg ${couponMsg.includes('Invalid') ? 'coupon-error-msg' : ''}`}>
                  {couponMsg.includes('Invalid') ? <AlertCircle size={14} /> : <Check size={14} />}
                  <span>{couponMsg}</span>
                </div>
              )}
            </div>

            {/* Bill Summary */}
            <div className="bill-details-card">
              <h5 className="bill-heading">Bill Details</h5>

              <div className="bill-row">
                <span>Item Total</span>
                <span>₹{subtotal}</span>
              </div>

              <div className="bill-row">
                <div className="delivery-row-info">
                  <Bike size={14} />
                  <span>Delivery Partner Fee</span>
                </div>
                <span>{deliveryFee === 0 ? <strong className="free-text">FREE</strong> : `₹${deliveryFee}`}</span>
              </div>

              {currentDiscount > 0 && (
                <div className="bill-row discount-row">
                  <span>Discount Applied</span>
                  <span>-₹{currentDiscount}</span>
                </div>
              )}

              <div className="bill-divider"></div>

              <div className="bill-row total-row">
                <span>To Pay</span>
                <span>₹{totalAmount}</span>
              </div>
            </div>

            {/* Checkout Action Button */}
            <button
              className="checkout-btn"
              onClick={handleCheckout}
              disabled={isSubmitting}
            >
              <div className="checkout-btn-text">
                <span className="checkout-total">₹{totalAmount}</span>
                <span className="checkout-label">TOTAL</span>
              </div>
              <div className="checkout-btn-action">
                <span>{isSubmitting ? 'Placing Order...' : 'Place Order'}</span>
                <ArrowRight size={18} />
              </div>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
