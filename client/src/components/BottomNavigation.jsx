import React from 'react';
import { Home, Search, ReceiptText, User, ShoppingBag, LogIn } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const BottomNavigation = ({ onSearchClick }) => {
  const {
    user,
    activeTab,
    setActiveTab,
    setIsProfileModalOpen,
    setIsAuthModalOpen,
    totalItemCount,
    setIsCartOpen
  } = useCart();

  const handleNavClick = (tab) => {
    if (tab === 'profile') {
      if (user) {
        setIsProfileModalOpen(true);
      } else {
        setIsAuthModalOpen(true);
      }
      return;
    }
    if (tab === 'cart') {
      if (!user) {
        setIsAuthModalOpen(true);
      } else {
        setIsCartOpen(true);
      }
      return;
    }
    if (tab === 'search') {
      setActiveTab('home');
      if (onSearchClick) onSearchClick();
      return;
    }
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="bottom-nav-bar" aria-label="Bottom Navigation">
      <button
        className={`bottom-nav-item ${activeTab === 'home' ? 'active' : ''}`}
        onClick={() => handleNavClick('home')}
        type="button"
      >
        <Home size={20} className="nav-icon" />
        <span className="nav-label">Home</span>
      </button>

      <button
        className={`bottom-nav-item ${activeTab === 'search' ? 'active' : ''}`}
        onClick={() => handleNavClick('search')}
        type="button"
      >
        <Search size={20} className="nav-icon" />
        <span className="nav-label">Search</span>
      </button>

      <button
        className={`bottom-nav-item ${activeTab === 'orders' ? 'active' : ''}`}
        onClick={() => handleNavClick('orders')}
        type="button"
      >
        <ReceiptText size={20} className="nav-icon" />
        <span className="nav-label">Orders</span>
      </button>

      <button
        className="bottom-nav-item"
        onClick={() => handleNavClick('cart')}
        type="button"
      >
        <div className="nav-icon-wrapper">
          <ShoppingBag size={20} className="nav-icon" />
          {totalItemCount > 0 && (
            <span className="nav-badge">{totalItemCount}</span>
          )}
        </div>
        <span className="nav-label">Cart</span>
      </button>

      <button
        className="bottom-nav-item"
        onClick={() => handleNavClick('profile')}
        type="button"
      >
        {user ? (
          <>
            <div className="nav-avatar-tiny">{user.name.charAt(0).toUpperCase()}</div>
            <span className="nav-label">{user.name.split(' ')[0]}</span>
          </>
        ) : (
          <>
            <LogIn size={20} className="nav-icon" />
            <span className="nav-label">Sign In</span>
          </>
        )}
      </button>
    </nav>
  );
};
