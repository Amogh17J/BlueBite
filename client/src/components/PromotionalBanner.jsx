import React from 'react';
import { Sparkles, ArrowRight, Tag } from 'lucide-react';

export const PromotionalBanner = ({ onExploreClick }) => {
  return (
    <div className="promo-banner-container">
      <div className="promo-banner">
        <div className="promo-content">
          <div className="promo-tag">
            <Tag size={13} className="promo-tag-icon" />
            <span>Special Offer · Up to 50% OFF</span>
          </div>
          <h2 className="promo-title">Your next favourite meal awaits</h2>
          <p className="promo-subtitle">
            Discover handpicked top-rated restaurants, fast doorstep delivery & delicious deals.
          </p>
          <div className="promo-action-group">
            <button className="promo-btn" onClick={onExploreClick}>
              <span>Explore Deals</span>
              <ArrowRight size={16} />
            </button>
            <span className="promo-code-pill">Use Code: <strong>BLUEBITE</strong></span>
          </div>
        </div>
        <div className="promo-visual">
          <div className="promo-decor-circle"></div>
          <img
            src="https://images.unsplash.com/photo-1544025162-d76694265947?w=600&auto=format&fit=crop&q=80"
            alt="Delicious Feast"
            className="promo-image"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};
