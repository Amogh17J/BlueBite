import React from 'react';
import { PackageCheck, Clock, CheckCircle2, RotateCcw, ShoppingBag, LogIn, Lock, MapPin, Building2, Home, Briefcase } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const OrdersView = () => {
  const { user, setIsAuthModalOpen, orders, setActiveTab } = useCart();

  if (!user) {
    return (
      <div className="orders-empty-state">
        <div className="orders-empty-icon auth-gate-icon">
          <Lock size={44} />
        </div>
        <h3>Sign In to View Orders</h3>
        <p>You can browse restaurants and dishes freely, but please sign in or register to view your order history and track deliveries.</p>
        <button className="primary-btn-filled" onClick={() => setIsAuthModalOpen(true)}>
          <LogIn size={16} />
          <span>Sign In / Register</span>
        </button>
      </div>
    );
  }

  if (!orders || orders.length === 0) {
    return (
      <div className="orders-empty-state">
        <div className="orders-empty-icon">
          <ShoppingBag size={48} />
        </div>
        <h3>No orders placed yet</h3>
        <p>Explore our curated list of restaurants and order your favorite meal!</p>
        <button className="primary-btn-filled" onClick={() => setActiveTab('home')}>
          Explore Food
        </button>
      </div>
    );
  }

  const getStatusBadge = (status) => {
    switch (status) {
      case 'Delivered':
        return (
          <span className="order-status-badge delivered">
            <CheckCircle2 size={13} /> Delivered
          </span>
        );
      case 'Preparing':
        return (
          <span className="order-status-badge preparing">
            <Clock size={13} /> Preparing
          </span>
        );
      case 'Placed':
      default:
        return (
          <span className="order-status-badge placed">
            <PackageCheck size={13} /> Order Placed
          </span>
        );
    }
  };

  const getCategoryIcon = (cat) => {
    switch (cat) {
      case 'Hostel':
        return <Building2 size={13} />;
      case 'Work':
        return <Briefcase size={13} />;
      case 'Home':
        return <Home size={13} />;
      default:
        return <MapPin size={13} />;
    }
  };

  return (
    <div className="orders-view-container">
      <div className="orders-view-header">
        <div>
          <h2 className="section-title">Your Orders</h2>
          <span className="orders-user-greeting">Logged in as {user.name}</span>
        </div>
        <span className="results-count-badge">{orders.length} orders</span>
      </div>

      <div className="orders-list">
        {orders.map((order) => {
          const formattedDate = new Date(order.createdAt).toLocaleDateString('en-IN', {
            day: 'numeric',
            month: 'short',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
          });

          const addr = order.deliveryAddress || {};
          const cat = addr.category || 'Home';

          return (
            <div key={order.orderId} className="order-card">
              <div className="order-card-header">
                <div>
                  <h4 className="order-restaurant-name">{order.restaurantName}</h4>
                  <span className="order-id-date">Order #{order.orderId} · {formattedDate}</span>
                </div>
                {getStatusBadge(order.status)}
              </div>

              <div className="order-items-snippet">
                {order.items?.map((item, idx) => (
                  <div key={idx} className="order-item-line">
                    <span className="order-item-qty">{item.quantity}x</span>
                    <span className="order-item-title">{item.name}</span>
                    <span className="order-item-cost">₹{item.price * item.quantity}</span>
                  </div>
                ))}
              </div>

              {/* Delivery Address Details */}
              <div className="order-delivery-info-box">
                <div className="order-delivery-info-header">
                  <span className={`category-pill-tag cat-badge-${cat.toLowerCase()}`}>
                    {getCategoryIcon(cat)}
                    <span>{cat}</span>
                  </span>
                  {addr.pincode && (
                    <span className="pincode-highlight-chip">PIN: {addr.pincode}</span>
                  )}
                  {addr.recipientName && (
                    <span className="order-recipient-snippet">
                      {addr.recipientName} {addr.phone ? `(${addr.phone})` : ''}
                    </span>
                  )}
                </div>
                <p className="order-address-text">
                  {addr.address || `${addr.houseNo ? `${addr.houseNo}, ` : ''}${addr.street || ''}, ${addr.city || 'Bengaluru'}`}
                </p>
              </div>

              <div className="order-card-footer">
                <div className="order-total-group">
                  <span className="order-total-label">Total Paid:</span>
                  <span className="order-total-value">₹{order.totalAmount}</span>
                </div>

                <button
                  className="repeat-order-btn"
                  onClick={() => setActiveTab('home')}
                >
                  <RotateCcw size={14} />
                  <span>Order Again</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
