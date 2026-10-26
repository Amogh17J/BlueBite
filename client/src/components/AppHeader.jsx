import React from 'react';
import { MapPin, ChevronDown, ShoppingBag, User, LogIn, Home, Briefcase, Building2 } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const AppHeader = () => {
  const {
    user,
    currentLocation,
    setIsLocationModalOpen,
    totalItemCount,
    setIsCartOpen,
    setIsProfileModalOpen,
    setIsAuthModalOpen,
    setActiveTab
  } = useCart();

  const handleProfileOrAuth = () => {
    if (user) {
      setIsProfileModalOpen(true);
    } else {
      setIsAuthModalOpen(true);
    }
  };

  const handleCartClick = () => {
    if (!user) {
      setIsAuthModalOpen(true);
    } else {
      setIsCartOpen(true);
    }
  };

  const getLocationIcon = () => {
    const cat = currentLocation?.category;
    switch (cat) {
      case 'Hostel':
        return <Building2 size={16} className="location-icon location-cat-hostel" />;
      case 'Work':
        return <Briefcase size={16} className="location-icon location-cat-work" />;
      case 'Home':
        return <Home size={16} className="location-icon location-cat-home" />;
      case 'Other':
      default:
        return <MapPin size={16} className="location-icon" />;
    }
  };

  const displayCategory = currentLocation?.displayCategory || currentLocation?.category || 'Home';
  const displayArea = currentLocation?.street ? currentLocation.street.split(',')[0] : 'Indiranagar';
  const displayPin = currentLocation?.pincode ? ` (${currentLocation.pincode})` : '';

  return (
    <header className="app-header">
      <div className="header-left">
        {/* Brand Logo & Wordmark */}
        <div className="brand-logo" onClick={() => setActiveTab('home')}>
          <div className="brand-icon">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
              <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
              <line x1="6" y1="1" x2="6" y2="4"></line>
              <line x1="10" y1="1" x2="10" y2="4"></line>
              <line x1="14" y1="1" x2="14" y2="4"></line>
            </svg>
          </div>
          <span className="brand-name">Blue<span className="brand-accent">Bite</span></span>
        </div>

        {/* Location Selector */}
        <button 
          className="location-pill" 
          onClick={() => setIsLocationModalOpen(true)}
          title="Change delivery address or add new location"
        >
          {getLocationIcon()}
          <div className="location-text-group">
            <span className="location-title">
              {displayCategory} · {displayArea}{displayPin}
            </span>
            <span className="location-subtitle">
              {currentLocation?.recipientName ? `${currentLocation.recipientName} • ` : ''}
              {currentLocation?.houseNo || (currentLocation?.address ? currentLocation.address.split(',')[0] : 'Indiranagar')}
            </span>
          </div>
          <ChevronDown size={15} className="location-chevron" />
        </button>
      </div>

      <div className="header-right">
        {/* Cart Button */}
        <button 
          className="header-action-btn cart-btn" 
          onClick={handleCartClick}
          title={user ? "View Cart" : "Sign in to view cart"}
        >
          <ShoppingBag size={20} />
          {totalItemCount > 0 && (
            <span className="cart-badge">{totalItemCount}</span>
          )}
        </button>

        {/* User Auth / Profile Button */}
        {user ? (
          <button 
            className="user-profile-badge-btn"
            onClick={handleProfileOrAuth}
            title={`Logged in as ${user.name}`}
          >
            <div className="user-avatar-small">
              {user.name.charAt(0).toUpperCase()}
            </div>
            <span className="user-short-name">{user.name.split(' ')[0]}</span>
          </button>
        ) : (
          <button 
            className="header-signin-btn"
            onClick={handleProfileOrAuth}
            title="Sign In or Register"
          >
            <LogIn size={16} />
            <span>Sign In</span>
          </button>
        )}
      </div>
    </header>
  );
};
