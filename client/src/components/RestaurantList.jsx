import React from 'react';
import { RestaurantCard } from './RestaurantCard';
import { UtensilsCrossed, RotateCcw } from 'lucide-react';

export const RestaurantList = ({
  restaurants,
  isLoading,
  searchQuery,
  activeCategory,
  activeSection,
  onResetFilters
}) => {
  if (isLoading) {
    return (
      <div className="restaurant-list-section">
        <div className="restaurant-grid">
          {[1, 2, 3, 4, 5, 6].map((n) => (
            <div key={n} className="restaurant-card-skeleton">
              <div className="skeleton-image"></div>
              <div className="skeleton-content">
                <div className="skeleton-line line-title"></div>
                <div className="skeleton-line line-subtitle"></div>
                <div className="skeleton-line line-meta"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (restaurants.length === 0) {
    return (
      <div className="empty-state-card">
        <div className="empty-state-icon">
          <UtensilsCrossed size={36} />
        </div>
        <h3 className="empty-state-title">No matching spots found</h3>
        <p className="empty-state-desc">
          We couldn't find any spots matching {searchQuery ? `"${searchQuery}"` : 'your active filters'}. Try resetting filters or switching section tabs.
        </p>
        <button className="reset-filters-btn" onClick={onResetFilters}>
          <RotateCcw size={16} />
          <span>Reset All Filters</span>
        </button>
      </div>
    );
  }

  const getSectionHeading = () => {
    if (activeCategory && activeCategory !== 'all' && activeCategory !== 'All Dishes') {
      return `${activeCategory} Specials`;
    }
    switch (activeSection) {
      case 'delivery': return 'Online Delivery Restaurants';
      case 'dining': return 'Top Dining Out & Table Booking';
      case 'cafes': return 'Artisanal Cafes & Roasters';
      default: return 'Top Restaurants in Bengaluru';
    }
  };

  return (
    <section className="restaurant-list-section">
      <div className="section-header-row">
        <h2 className="section-title">{getSectionHeading()}</h2>
        <span className="results-count-badge">{restaurants.length} places</span>
      </div>

      <div className="restaurant-grid">
        {restaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant.id}
            restaurant={restaurant}
            activeSection={activeSection}
          />
        ))}
      </div>
    </section>
  );
};
