import React from 'react';

export const CategoryScroller = ({ categories, activeCategory, setActiveCategory, title = "Popular Cuisines & Dishes" }) => {
  return (
    <div className="category-section">
      <div className="category-header-row">
        <h3 className="category-section-title">{title}</h3>
      </div>
      <div className="category-scroller">
        {categories.map((cat) => {
          const isActive = activeCategory.toLowerCase() === cat.name.toLowerCase() || 
                           (activeCategory === 'all' && (cat.id === 'all' || cat.name === 'All Dishes'));
          return (
            <button
              key={cat.id}
              className={`category-item ${isActive ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.id === 'all' ? 'all' : cat.name)}
              type="button"
            >
              <div className="category-img-wrapper">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="category-img"
                  loading="lazy"
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=200&auto=format&fit=crop&q=80";
                  }}
                />
              </div>
              <span className="category-name">{cat.name}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
