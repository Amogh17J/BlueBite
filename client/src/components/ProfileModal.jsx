import React from 'react';
import { X, User, Mail, Phone, MapPin, Heart, ShoppingBag, ShieldCheck, Code, LogOut } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const ProfileModal = () => {
  const { 
    user, 
    logout, 
    isProfileModalOpen, 
    setIsProfileModalOpen, 
    orders, 
    favorites, 
    currentLocation,
    savedAddresses,
    setIsLocationModalOpen
  } = useCart();

  if (!isProfileModalOpen || !user) return null;

  const handleOpenAddressManager = () => {
    setIsProfileModalOpen(false);
    setIsLocationModalOpen(true);
  };

  return (
    <div className="modal-backdrop" onClick={() => setIsProfileModalOpen(false)}>
      <div className="profile-modal-sheet" onClick={(e) => e.stopPropagation()}>
        <div className="profile-header">
          <div className="profile-avatar-circle">
            <span className="profile-avatar-text">{user.name.charAt(0).toUpperCase()}</span>
          </div>
          <div className="profile-header-info">
            <h3 className="profile-name">{user.name}</h3>
            <p className="profile-meta">{user.email}</p>
          </div>
          <button className="modal-close-btn" onClick={() => setIsProfileModalOpen(false)} aria-label="Close">
            <X size={20} />
          </button>
        </div>

        {/* Quick Stats */}
        <div className="profile-stats-row">
          <div className="profile-stat-box">
            <ShoppingBag size={20} className="stat-icon" />
            <span className="stat-value">{orders.length}</span>
            <span className="stat-label">Orders</span>
          </div>
          <div className="profile-stat-box">
            <Heart size={20} className="stat-icon" />
            <span className="stat-value">{favorites.length}</span>
            <span className="stat-label">Favorites</span>
          </div>
          <div className="profile-stat-box">
            <ShieldCheck size={20} className="stat-icon" />
            <span className="stat-value">Gold</span>
            <span className="stat-label">Membership</span>
          </div>
        </div>

        {/* Profile Info Details */}
        <div className="profile-details-group">
          <div className="profile-detail-item">
            <Mail size={16} className="detail-icon" />
            <div className="detail-text">
              <span className="detail-label">Email Address</span>
              <span className="detail-val">{user.email}</span>
            </div>
          </div>
          <div className="profile-detail-item">
            <Phone size={16} className="detail-icon" />
            <div className="detail-text">
              <span className="detail-label">Phone Number</span>
              <span className="detail-val">{user.phone || '+91 91234 56789'}</span>
            </div>
          </div>
          <div className="profile-detail-item address-manage-item">
            <MapPin size={16} className="detail-icon" />
            <div className="detail-text">
              <div className="profile-address-title-row">
                <span className="detail-label">Active Delivery Address</span>
                <span className="profile-cat-badge">
                  {currentLocation?.displayCategory || currentLocation?.category || 'Home'}
                </span>
              </div>
              <span className="detail-val">{currentLocation.address}</span>
              <button 
                type="button" 
                className="profile-manage-addr-btn"
                onClick={handleOpenAddressManager}
              >
                Manage or Add Address ({savedAddresses.length} saved)
              </button>
            </div>
          </div>
        </div>

        {/* MERN Stack Project Architecture Note */}
        <div className="tech-badge-card">
          <div className="tech-badge-title">
            <Code size={16} />
            <span>Authenticated with JWT Token</span>
          </div>
          <div className="tech-pills">
            <span className="tech-pill">JWT Authorization</span>
            <span className="tech-pill">Protected Routes</span>
            <span className="tech-pill">Bcrypt / Hash</span>
            <span className="tech-pill">Express Auth</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="profile-action-buttons">
          <button className="profile-logout-btn" onClick={logout}>
            <LogOut size={16} />
            <span>Sign Out</span>
          </button>
          <button className="profile-close-btn" onClick={() => setIsProfileModalOpen(false)}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
